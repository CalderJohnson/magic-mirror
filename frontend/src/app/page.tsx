import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-[6929px]">
      <div className="w-full h-[100px] bg-secondary"/>
      <main className="flex flex-col justify-start h-[717px]">
        <div className="flex justify-around gap-2">
          <div className="flex flex-col gap-6 ml-[112px] mt-[152px] w-full">
            <h1 className="font-semibold text-6xl">Magic
            Mirror</h1>
            <p className="text-[30px]">A-really-cool-slogan</p>
          </div>
          <Image src={"/assets/mirror_magic.png"} width={800} height={800} alt={""}/>
        </div>
        <Link href={"/info"} className="px-[32px] py-[10px] bg-secondary self-center">Try It</Link>
      </main>
      <section className="flex flex-col justify-center items-center w-full h-[512px] bg-secondary">
        <div className="flex justify-around w-full items-center">
          <h2 className="text-[44px]">confidence with clothes that fit!</h2>
          <div className="w-[238px] h-[244px] rounded-[444px] bg-tertiary"></div>
        </div>

      </section>
    </div>
  );
}
