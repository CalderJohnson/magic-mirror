'use client';

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from 'next/navigation';
import Head from "next/head";

import lace from "/public/assets/vector.png";
import crown from "/public/assets/crown.png";
import logo from "/public/assets/m_m.png";

export default function MagicMirror() {
  const [userImageUrl, setUserImageUrl] = useState<string | null>(null);
  const [shopifyLink, setShopifyLink] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleUploadSuccess = (result: any) => {
    setUserImageUrl(result.info.secure_url);
    console.log('Cloudinary upload result:', result);
    setIsUploading(false);
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
      setIsLoading(true);
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
        if (typeof window !== "undefined") {
          localStorage.setItem('summary_result', JSON.stringify(summary_result));
          localStorage.setItem("tryon_result", JSON.stringify(tryon_result));
        }
        router.push('/result');
      } else {
        alert('Failed to upload data.');
        console.error('Server error:', summary_response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Error uploading data.' + error + "test");
    } finally {
      setIsUploading(false);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-300 flex items-center justify-center">
        <Head>
          <title>Loading - Fairy Godmother Outfit Fitting</title>
          <meta name="description" content="Loading page for fairy godmother outfit fitting" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="w-[90vw] h-[50vh] relative bg-gradient-to-b from-[#B4E7F8] to-[#F8D0CB] rounded-lg shadow-lg overflow-hidden">
          {/* Dripping effect */}
          <div className="absolute top-0 left-0 right-0 h-[5vh] bg-[#B4E7F8]">
            <div className="flex justify-between">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-[8vw] h-[3vh] bg-[#B4E7F8] rounded-b-full"
                  style={{transform: `translateY(${2 + Math.random() * 2}vh)`}}
                />
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-[10vw] h-[10vw] rounded-full border-4 border-pink-300 border-t-pink-500 animate-spin" />
          </div>

          <div className="absolute bottom-[5vh] left-0 right-0 text-center">
            <p className="text-[2.5vw] text-gray-700 font-serif">
              The Fairy godmothers are fitting your outfit
            </p>
            <p className="text-[2vw] text-gray-600 font-serif mt-2">
              please be patient
            </p>
          </div>
        </main>
      </div>
    )
  }

  function handleShopifyLinkChange(event: ChangeEvent<HTMLInputElement>): void {
    setShopifyLink(event.target.value);
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-[#FCD3B6] via-[#EFD0CE] to-[#EBB0AA] overflow-hidden">
      {/* Lace Banner */}
      <div className="w-[100vw] h-[15vh] relative overflow-hidden">
        <Image 
          src={lace}
          alt="Lace Trim Banner"
          fill
          style={{objectFit: "cover"}}
        />
        {/* Logo */}
        <div className="absolute top-[2vh] left-[2vw] w-[10vw] h-[10vh]">
          <Image 
            src={logo}
            alt="MagicMirror Logo"
            fill
            style={{objectFit: "contain"}}
          />
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex justify-between items-center h-[85vh] w-[100vw] px-[5vw] mt-[-20x]">
        {/* Left Section with Image */}
        <div className="relative w-[50vw] h-[70vh] flex flex-col justify-center items-center gap-12">
          <h2 className="text-[4vw] font-serif mb-[3vh] mt-[-20px]">
            What do you wish to see...
          </h2>
          <div className="relative w-[25vw] h-[55vh] mt-[-20px]"> {/* Adjusted for skinnier, taller shape */}
            <CldUploadWidget
              uploadPreset="next_preset"
              onSuccess={handleUploadSuccess}
              options={{ sources: ['local', 'url', 'camera'], cropping: false }}
            >
              {({ open }) => (
                <div
                  className="w-full h-full border-2 border-dashed overflow-hidden cursor-pointer bg-gray-100 flex justify-center items-center"
                  style={{
                    borderRadius: '70% 70% 0 0', // More pronounced arch
                    position: 'relative',
                  }}
                  onClick={() => open()}
                >
                  {userImageUrl ? (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '70% 70% 0 0',
                      overflow: 'hidden'
                    }}>
                      <Image src={userImageUrl} alt="User Image" fill style={{objectFit: "cover"}} />
                    </div>
                  ) : (
                    <p className="text-[1.5vw] text-gray-500 text-center px-2">Click to upload an image</p>
                  )}
                </div>
              )}
            </CldUploadWidget>

            {/* Crown Decoration */}
            <div className="absolute top-[-8%] left-[70%] transform -translate-x-1/2 w-[30vw] h-[10vh]">
              <Image 
                src={crown}
                width={300}
                height={100}
                alt="Crown Decoration"
                style={{objectFit: "contain"}}
              />
            </div>
          </div>
        </div>

        {/* Right Section with URL Input and Button */}
        <div className="w-[40vw] h-[70vh] flex flex-col justify-center items-center">
          <div className="mb-[3vh] w-full">
            <label htmlFor="shopifyLink" className="block text-[2vw] text-gray-700">
              Shopify Product Link:
            </label>
            <input
              type="url"
              id="shopifyLink"
              value={shopifyLink}
              onChange={handleShopifyLinkChange}
              className="w-full p-[2vh] border border-gray-400 rounded-md text-[1.5vw]"
              placeholder="https://your-shopify-product-link.com"
              required
            />
          </div>
          <button
            className="py-[2vh] px-[5vw] bg-gray-500 text-white font-semibold rounded-md text-[2vw]"
            onClick={handleUpload}
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Confirm!"}
          </button>
        </div>
      </main>
    </div>
  );
}