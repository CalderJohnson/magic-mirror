import type { NextPage } from 'next';
import Head from 'next/head';

const LandingPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#F8D0CB] flex flex-col items-center">
      <Head>
        <title>Magic Mirror - Step into the Reflection of Your Dreams!</title>
        <meta name="description" content="Magic Mirror landing page for outfit transformation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Top Section with Heading and Character */}
      <header className="w-full h-[100vh] flex items-center justify-between relative">
        <div className="absolute top-[10vh] left-[5vw]">
          <img
            src="/placeholder-logo.png" 
            alt="Magic Mirror Logo"
            className="w-[40vw] h-auto"
          />
        </div>

        <div className="absolute top-[20vh] right-[5vw]">
          <img
            src="/placeholder-character.png" 
            alt="Fairy character"
            className="w-[30vw] h-auto"
          />
        </div>

        <button className="absolute top-[5vh] right-[5vw] px-[3vw] py-[1vw] bg-[#8AA878] text-white rounded-lg">
          Try it
        </button>
      </header>

      {/* Confidence in clothes section */}
      <section className="w-full h-[50vh] bg-[#B4E7F8] relative flex items-center justify-center">
        <h2 className="text-[5vw] font-serif text-center text-gray-800">
          Confidence in clothes that fit!
        </h2>

        {/* Decorative Dripping */}
        <div className="absolute bottom-0 w-full h-[5vh] bg-gradient-to-b from-[#B4E7F8] to-[#F8D0CB] rounded-t-lg">
          <div className="flex justify-between">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i} 
                className="w-[8vw] h-[3vh] bg-[#B4E7F8] rounded-t-full"
                style={{transform: `translateY(${Math.random() * 2}vh)`}}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image and Text Section */}
      <section className="w-full h-[100vh] flex flex-col justify-around items-center">
        <div className="w-[50vw] h-auto">
          <img src="/placeholder-image.png" alt="Outfit Example" className="w-full h-auto" />
        </div>
        <p className="text-[3vw] text-center font-serif text-gray-700">
          Do you have this problem when you online shop, and the item doesn't fit right?
        </p>
      </section>

      {/* Three Small Sections */}
      <section className="w-full h-[80vh] flex justify-between items-center px-[5vw]">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-[25vw] h-auto text-center">
            <img src="/placeholder-small.png" alt={`Image ${i + 1}`} className="w-[100%] h-auto" />
            <p className="text-[2vw] mt-[2vh] text-gray-600">
              Your personalized outfit is on its way!
            </p>
          </div>
        ))}
      </section>

      {/* Final Section */}
      <footer className="w-full h-[50vh] bg-[#F8D0CB] flex flex-col justify-center items-center">
        <p className="text-[4vw] text-gray-800 font-serif">Proudly Powered By...</p>
        <div className="w-[30vw] h-auto mt-[3vh]">
          <img src="/placeholder-powered-by.png" alt="Powered by Logo" className="w-full h-auto" />
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;