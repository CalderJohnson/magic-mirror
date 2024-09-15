'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import drip from "../../../public/assets/vector.png";
import mirror from "../../../public/assets/m_m.png";
import crown from "../../../public/assets/crown.png";
import Link from 'next/link';

const Page = () => {
  const [summaryResult, setSummaryResult] = useState({ description: "" });
  const [tryonResult, setTryonResult] = useState({ img_url: "" });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedResult = localStorage.getItem('summary_result');
      const tryOnResult = localStorage.getItem('tryon_result');
      if (storedResult) setSummaryResult(JSON.parse(storedResult));
      if (tryOnResult) setTryonResult(JSON.parse(tryOnResult));
    }
  }, []);

  const summary_response = {
    description: "The Daring Cheetah Print Sweater is a must-have fashion item for those seeking a bold and unique addition to their wardrobe. With its eye-catching design, this sweater is sure to make a statement wherever you go. The product description highlights its appeal to women who embrace their individuality and want to make a stylish impact.\n\nCrafted with a focus on comfort, this sweater is made from an ultra-soft fabric, ensuring a cozy and pleasant wearing experience. The cheetah print pattern adds a touch of wild elegance, allowing wearers to embrace their fierce and feminine side. Its versatility is a key feature, as it can be effortlessly styled for various occasions, from casual daytime looks with jeans to more dressed-up evening ensembles.\n\nReviews for this sweater are generally positive, with many customers raving about its softness, warmth, and eye-catching design. It has earned a 5-star rating from multiple reviewers, who appreciate its high-quality fabric and the confidence it instills. One reviewer mentions that it has become a staple in their casual wardrobe and consistently receives compliments. Another customer rates it 4 stars, indicating that while they enjoy the print and fit, they would have preferred a slightly thicker material. Despite this minor critique, the overall feedback suggests that this sweater delivers on its promise of style and comfort.\n\nIn summary, the Daring Cheetah Print Sweater is a fashionable choice for women seeking a statement piece that combines comfort and bold aesthetics. Its soft fabric and versatile design make it a popular option, as evidenced by the positive customer reviews. Whether you're looking to upgrade your casual outfits or add a touch of wild elegance to your style, this sweater is a confident choice."
  };

  const tryon_response = {
    "message": "Success",
    "img_url": "https://res.cloudinary.com/djwt4zrhz/image/upload/v1726378584/mmybdqsuqywzboxsj7rr.png"
  };

  const carouselImages = [
    "https://res.cloudinary.com/djwt4zrhz/image/upload/v1726378584/mmybdqsuqywzboxsj7rr.png",
    "https://res.cloudinary.com/djwt4zrhz/image/upload/v1726378584/mmybdqsuqywzboxsj7rr.png",
    "https://res.cloudinary.com/djwt4zrhz/image/upload/v1726378584/mmybdqsuqywzboxsj7rr.png",
    // Add more image paths as needed
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='w-full min-h-screen bg-[#F8E3DD] flex flex-col justify-center items-center relative'>
      <Image src={drip} width={2300} height={200} alt="" className="absolute top-0 z-0" />
      <Image src={mirror} width={75} height={75} alt="mirror" className="absolute top-4 left-4 z-10" />
      
      <div className='w-full max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-8 z-10'>
        <div className='flex flex-col items-center space-y-[-2rem] md:w-1/2'>
          <div className='relative'>
            <Image src={crown} width={300} height={200} alt='' className='mb-[-3rem]' />
            <div className='w-[300px] h-[400px] bg-white rounded-t-full overflow-hidden shadow-lg relative'>
              <img 
                src={tryonResult.img_url}
                alt={`Carousel Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover object-top"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
        
        <div className='md:w-1/2 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg max-h-[70vh] overflow-y-auto'>
          <h2 className='font-semibold text-lg mb-4'>Product Description</h2>
          <p className='text-sm'>{summaryResult.description}</p>
        </div>
      </div>
      
      <Link href={"/info"} className='mt-8 mb-4 bg-[#7E958F] hover:bg-[#6A7F7A] text-white font-bold px-12 py-3 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
        Try Again!
      </Link>
    </div>
  );
};

export default Page;