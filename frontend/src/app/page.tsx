import Image from "next/image";
import Link from "next/link";
import cloud from "../../public/assets/vector.svg";
import magic_mirror from "../../public/assets/magic_mirror.png"
import magic_mirror_girl from "../../public/assets/mirror_magic.png"
import leaf from "../../public/assets/tropical-ferns-png-7.png"
import drip from "../../public/assets/Component9.png"
import mirror from "../../public/assets/m_m.png"
import shop1 from "../../public/assets/shop1.png"
import shop2 from "../../public/assets/shop2.png"
import shop3 from "../../public/assets/shop3.png"
import shop4 from "../../public/assets/shop4.png"
import shop5 from "../../public/assets/shop5.png"
import elipse from "../../public/assets/Ellipse22.png"
import wave from "../../public/assets/wave.png"
export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <section className="w-full h-[1037px] bg-wet">
        <div className="flex p-6 justify-between w-full">
          <div className="flex">
            <Image src={cloud} alt="cloud" className="" width={279} height={159}/>
            <div className="flex-col">
              <Image src={cloud} alt="cloud" className="" width={130} height={74}/>
              <Image src={cloud} alt="cloud" className="ml-20" width={191} height={109}/>
            </div>
            
          </div>
          <Link href={"/info"} className="px-[32px] py-[10px] w-[289px] h-[70px] text-white font-bold rounded-md bg-[#706545]  text-[32px]">Try it</Link>  
        </div>
       
        
        <div className="w-full flex justify-around py-6 pr-4">
          <div className="flex flex-col gap-4 flex-1 justify-center items-center">
            <Image src={magic_mirror} alt="magic mirror" className="" width={577} height={595}/>
            <h1 className="text-gray-600 font-bold text-2xl">"Step into the Reflection
            of Your Dreams!"</h1>
          </div>
          <div className="flex-1">
            <Image src={magic_mirror_girl} alt="magic mirror girl" className="" width={892} height={862}/>
          </div>
        </div>
      
        <Image src={leaf} width={200} height={250} alt={""} className="absolute top-[750px] right-[20px] -rotate-45 translate-x-10"/>
        <Image src={leaf} width={200} height={250} alt={""} className="absolute top-[950px] left-[20px] rotate-45 -translate-x-10"/>
        <Image src={leaf} width={200} height={250} alt={""} className="absolute top-[1050px] left-[20px] rotate-90 -translate-x-10"/>
        
      </section>
      <section className="w-full h-[600px] bg-wet relative">
      <Image src={drip} width={2047} height={600} alt={""} className="absolute top-[100px] z-[-1]"/>
      <div className="flex w-full h-[600px] justify-center items-center gap-6">
        <h2 className="text-[32px] font-semibold">Confidence with clothes that fit!</h2>
        <Image src={mirror} width={100} height={100} alt={"mirror"} className=""/>
      </div>
      </section>

      <Image src={leaf} width={200} height={250} alt={""} className="absolute top-[1320px] right-[20px] -rotate-45 translate-x-10"/>
      <Image src={leaf} width={200} height={250} alt={""} className="absolute top-[1420px] right-[20px] -rotate-90 translate-x-10"/>

      <section className="w-full flex flex-col gap-32 h-[3097px]">
        <div className="flex gap-8 mx-8 justify-around items-center mt-32">
          <Image src={shop1} width={400} height={450} alt={""} className=""/>
          <p className="text-[32px]">do you have this bad problem
          where you online shop and then when you get the item it looks bad on you?</p>
        </div>
        <div className="flex gap-8 mx-8 justify-around items-center mt-32">
          <p className="text-[32px]">smth smth let our fairy godmothers take care of you with this newfangled thing called the magic mirror oooooh magic</p>
          <Image src={shop2} width={400} height={450} alt={""} className=""/>
        </div>
        <div className="flex gap-8 mx-8 justify-around items-center mt-32">
          <Image src={shop3} width={400} height={450} alt={""} className=""/>
          <p className="text-[32px]">it’s as easy as abracadabra idk it tells you how to do it here and whatnot dude</p>
        </div>
        <div className="flex gap-8 mx-8 justify-around items-center mt-32">
          <p className="text-[32px]">woah now you look amazing and
          super cool huzzah</p>
          <Image src={shop4} width={400} height={450} alt={""} className=""/>
        </div>
        <div className="flex justify-center items-center">
          <Image src={shop5} width={400} height={450} alt={""} className=""/>
        </div>
      </section>
      <section className="w-full h-[495px] bg-[#FDD9BC] flex justify-center items-center gap-20">
        <Image src={elipse} width={300} height={300} alt={""} className=""/>
        <p className="text-gray-600 text-[32px]">smth smth AI magic will make it
so that you’ve never looked better
never had more style woah!!</p>
      </section>

      <section className="w-full h-[1000px] flex flex-col">
        <div className="flex flex-col flex-1">
          <h4 className="text-5xl self-center flex-1">Example Image Here</h4>
          <h4 className="text-5xl justify-self-end">Proudly powered by ...</h4>
        </div>
        <div className="w-full flex justify-center items-center bg-[#D9D9D9] h-[250px]">
        </div>
      </section>
      <section className="w-full h-[1000px] flex flex-col justify-end relative">
        <Image src={mirror} width={140} height={140} className="absolute right-[50px] bottom-[220px] z-10" alt={""}/>
        <Image src={wave} width={2000} height={300} alt={""} className=""/>
        <Image src={leaf} width={200} height={250} alt={""} className="absolute bottom-10 rotate-45"/>
        <Image src={leaf} width={200} height={250} alt={""} className="absolute bottom-0 rotate-90"/>
      </section>
      
    </div>
  );
}

