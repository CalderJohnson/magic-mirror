'use client';

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from 'next/navigation'

export default function MagicMirror() {
  const [userImageUrl, setUserImageUrl] = useState<string | null>(null);
  const [shopifyLink, setShopifyLink] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const router = useRouter();

  // Function to handle the Cloudinary Upload widget result
  const handleUploadSuccess = (result: any) => {
    setUserImageUrl(result.info.secure_url); // Set the Cloudinary image URL
    console.log('Cloudinary upload result:', result);
    setIsUploading(false); // Stop the loading state
  };

  const handleUpload = async () => {
    if (!userImageUrl || !shopifyLink) {
      alert("Please upload an image and provide the Shopify product link.");
      return;
    }

    const url = new URL(shopifyLink);
    const shopifyStore = url.hostname.split('.')[0];
    const productHandle = shopifyLink.split('/products/')[1];

    setIsUploading(true);

    // Send Shopify link and Cloudinary URL to your backend
    const summary_payload = {
      id: productHandle,
      store: shopifyStore,
    };
    
    const tryon_payload = {
      id: productHandle,
      store: shopifyStore,
      user_image_url: userImageUrl,
    }

    try {
      const summary_response = await fetch('http://localhost:8080/summary/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(summary_payload),
      });

      const tryon_response = await fetch('http://localhost:8000/tryon/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tryon_payload),
      });

      if (summary_response.ok) {
        const summary_result = await summary_response.json();
        const tryon_result = await tryon_response.json();
        alert('Image and link uploaded successfully!');
        alert(JSON.stringify(summary_result) + " " + JSON.stringify(tryon_result))
        if (typeof window !== "undefined")
        localStorage.setItem('summary_result', JSON.stringify(summary_result)); // Store the result in local storage
        localStorage.setItem("tryon_result", JSON.stringify(tryon_result));
        router.push('/result'); // Redirect to the result page
      } else {
        alert('Failed to upload data.');
        console.error('Server error:', summary_response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Error uploading data.' + error + "test");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="w-full h-full bg-gray-200">
      <div className="w-full bg-gray-600 h-[100px] flex items-center justify-center text-white">
        <h1 className="italic text-3xl">MagicMirror</h1>
      </div>
      <main className="flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-serif my-8">What do you wish to see...</h2>
        <div className="flex flex-col items-center space-y-6 w-full">

          {/* Cloudinary Upload Widget */}
          <CldUploadWidget
            uploadPreset="next_preset" // Replace with your Cloudinary upload preset
            onSuccess={handleUploadSuccess}
            options={{ sources: ['local', 'url', 'camera'], cropping: false }}
          >
            {({ open }) => (
              <div
                className={`w-full h-[300px] border-2 ${userImageUrl ? "border-blue-500" : "border-gray-400"} border-dashed rounded-lg flex justify-center items-center cursor-pointer bg-gray-100`}
                onClick={() => open()}
              >
                <div className="text-center">
                  {userImageUrl ? (
                    <Image src={userImageUrl} alt="User Image" width={200} height={200} className="rounded-lg" />
                  ) : (
                    <p className="text-gray-500">Click to upload an image</p>
                  )}
                </div>
              </div>
            )}
          </CldUploadWidget>

          {/* Shopify Link Input */}
          <div className="w-full">
            <label htmlFor="shopifyLink" className="block text-lg text-gray-700">
              Shopify Product Link:
            </label>
            <input
              type="url"
              id="shopifyLink"
              value={shopifyLink}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setShopifyLink(e.target.value)}
              className="w-full p-2 border border-gray-400 rounded-md"
              placeholder="https://your-shopify-product-link.com"
              required
            />
          </div>
        </div>

        {/* Button */}
        <button
          className="mt-8 py-2 px-6 bg-gray-500 text-white font-semibold rounded-md"
          onClick={handleUpload}
          disabled={isUploading}
        >
          {isUploading ? "Uploading..." : "Dress up time :)"}
        </button>
      </main>
    </div>
  );
}
