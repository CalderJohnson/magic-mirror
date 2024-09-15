'use client';
import Image from "next/image";
import Link from "next/link";
import cloud from "../../public/assets/vector.svg";
import clouds from "../../public/assets/clouds.png";
import magic_mirror from "../../public/assets/magic_mirror.png";
import magic_mirror_girl from "../../public/assets/mirror_magic.png";
import leaf from "../../public/assets/tropical-ferns-png-7.png";
import drip from "../../public/assets/Component9.png";
import mirror from "../../public/assets/m_m.png";
import shop1 from "../../public/assets/shop1.png";
import shop2 from "../../public/assets/shop2.png";
import shop3 from "../../public/assets/shop3.png";
import shop4 from "../../public/assets/shop4.png";
import shop5 from "../../public/assets/shop5.png";
import example from "../../public/assets/example_image_1.png";
import example2 from "../../public/assets/example_image_2.png";
import elipse from "../../public/assets/Ellipse22.png";
import wave from "../../public/assets/wave.png";
import shopify_logo from "../../public/assets/shopify.png";
import cohere_logo from "../../public/assets/cohere.png";
import example_image_1 from "../../public/assets/example_image_1.png";
import example_image_2 from "../../public/assets/example_image_2.png";
import { Modern_Antiqua } from 'next/font/google';
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import fairy from "../../public/assets/Fairy4.png";
import fairy3 from "../../public/assets/Fairy3.png";
import fairy2 from "../../public/assets/Fairy2.png";
import fairy1 from "../../public/assets/Fairy1.png";
import MMHero from "../../public/assets/MMhero.png";

const modernAntiqua = Modern_Antiqua({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex: number) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex: number) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };
  
  const carouselImages = [
    example,
    example2
  ];
  return (
    <div className={`${modernAntiqua.className} w-full overflow-hidden`}>
      <section className="w-full min-h-screen bg-wet relative p-8">
        <div className="flex justify-between items-center mb-12">
          <div className="flex">
            <Image src={cloud} alt="cloud" width={279} height={159} className="mr-4" />
            <div className="flex flex-col">
              <Image src={cloud} alt="cloud" width={130} height={74} className="mb-4" />
              <Image src={cloud} alt="cloud" width={191} height={109} className="ml-8" />
            </div>
          </div>
          <Link href="/info" className="px-8 py-3 bg-[#76CBCC] text-white font-bold rounded-md text-3xl hover:bg-[#5fb9ba] transition-colors">
            Try it
          </Link>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex-1 flex flex-col items-center">
            <Image src={magic_mirror} alt="magic mirror" width={500} height={515} className="mb-6" />
            <h1 className="text-gray-600 font-bold text-3xl text-center">"Step into the Reflection of Your Dreams!"</h1>
          </div>
          <div className="flex-1">
            <Image src={MMHero} alt="magic mirror girl" width={800} height={775} className="box-shadow: 0 0 5px 5px [#FDD9BC];"/>
          </div>
        </div>
        
        <Image src={leaf} width={150} height={187} alt="" className="absolute bottom-12 right-8 -rotate-45" />
        <Image src={leaf} width={150} height={187} alt="" className="absolute bottom-24 left-8 rotate-45" />
      </section>

      <section className="w-full py-24 bg-wet relative">
        <Image src={drip} alt="" width={2300} height={400} objectFit="cover" className="z-0 absolute" />
        <div className="relative z-10 flex justify-center items-center gap-8 mt-32">
          <h2 className="text-4xl font-semibold">Confidence with clothes that fit!</h2>
          <Image src={mirror} width={100} height={100} alt="mirror" />
        </div>
      </section>

      <div className='flex flex-col items-center self-center ml-[360px] mt-[250px] space-y-[-2rem] md:w-1/2'>
          <div className='relative'>
            <div className='w-[350px] h-[470px] bg-white rounded-t-full overflow-hidden shadow-lg relative'>
              <Image 
                src={carouselImages[currentImageIndex]}
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
        

        <Image src={clouds} alt="cloud" width={179} height={59} className="absolute right-20" />
      <section className="w-full py-24 space-y-48 mt-16">
        <div className="flex justify-around items-center px-16">
        <div className="bg-gradient-to-r from-indigo-500 w-[250px] h-[250px] absolute rounded-full left-32 z-[-1]"></div>
          <Image src={fairy1} width={300} height={350} alt="" />
          <p className="text-3xl max-w-2xl">Do you online shop, but find it hard to discover quality products that fit?</p>
          
        </div>

        <div className="flex flex-row-reverse justify-around items-center px-16">
        <div className="bg-gradient-to-r from-indigo-500 w-[250px] h-[250px] absolute rounded-full right-32 z-[-1]"></div>
          <Image src={fairy2} width={300} height={350} alt="" className="scale-x-[-1]" />
          <p className="text-3xl max-w-2xl">Magic Mirror lets you see clothes on yourself before you buy them! Our platform also gives you a detailed rundown of the product to help you make informed purchasing decisions!</p>
        </div>

        <div className="flex justify-around items-center px-16 relative">
        <Image src={cloud} alt="cloud" width={179} height={59} className="absolute right-20 top-0" />
        <div className="bg-gradient-to-r from-indigo-500 w-[250px] h-[250px] absolute rounded-full left-32 z-[-1]"></div>
          <Image src={fairy3} width={300} height={350} alt="" />
          <p className="text-3xl max-w-2xl">It's as easy as uploading a picture of yourself, and the Magic Mirror will do the rest!</p>
        </div>

        <div className="flex flex-row-reverse justify-around items-center px-16">
          <div className="bg-gradient-to-r from-indigo-500 w-[250px] h-[250px] rounded-full">
          <Image src={fairy} width={400} height={450} alt=""/>
          </div>
          
          <p className="text-3xl max-w-2xl">Now you look amazing and save time and money shopping!</p>
        </div>
      </section>

      <section className="w-full py-24 flex flex-col items-center">
        <h4 className="text-5xl">Proudly powered by ...</h4>
        <div className="w-full flex justify-center items-center bg-[#D9D9D9] py-12">
          <Image src={shopify_logo} width={200} height={200} alt="Shopify logo" className="mx-8" />
          <Image src={cohere_logo} width={200} height={200} alt="Cohere logo" className="mx-8" />
        </div>
      </section>

      <section className="w-full h-[600px] relative flex items-end bg-gradient-to-t from-[#de959cf4]">
        <Image src={wave} layout="fill" objectFit="cover" alt="" />
        <Image src={leaf} width={150} height={187} alt="" className="absolute bottom-12 left-8 rotate-45" />
        <Image src={leaf} width={150} height={187} alt="" className="absolute bottom-0 left-24 rotate-90" />
      </section>
    </div>
  );
}
