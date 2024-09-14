import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-[6929px]">
      <main className="flex flex-col justify-start h-[897px] mt-[50px] gap-6">
        <Link
          href={"/info"}
          className="px-[32px] mt-[30px] py-[10px] w-[150px] h-[50px] bg-[#5B7045] self-end mr-[137px] flex justify-center items-center rounded-sm border-[#5B7045] text-white font-bold"
        >
          Try It
        </Link>
        <div className="flex justify-around gap-2 w-full">
          <div className="flex flex-col gap-6 ml-[112px] mt-[52px] w-full">
            <Image src={"/assets/magicMirrorText.png"} width={677} height={595} alt={""}/>
            <p className="text-[35px] pl-[84px]">A-really-cool-slogan</p>
          </div>
          <Image
            src={"/assets/mirror_magic.png"}
            width={592}
            height={562}
            alt={""}
            className="md:pr-16 max-md:pr-8"
          />
        </div>

      </main>

      <div className="absolute top-[500px] -right-[25px] -rotate-45 z-[1]">
        <Image
          src={"/assets/tropical-ferns-png-7.png"}
          width={228}
          height={313}
          alt={""}
        />
      </div>
      <section className="flex justify-center items-center w-full h-[600px] z-[2] relative bg-[url('/assets/Component9.png')]">
        <div className="flex justify-center w-full h-full max-w-[1200px] items-center -mt-[150px] flex-2">
          <div className="flex-3 flex justify-center items-center">
            <h2 className="text-[46px] text-start">
              Confidence with clothes that fit!
            </h2>
          </div>
          <div className="flex-1 flex justify-center items-center ">
            <div className="w-[238px] h-[238px] rounded-full bg-tertiary"></div>
          </div>
        </div>
      </section>

      <section className="w-full h-[5156px] z-[2] relative"></section>

      <section className="flex justify-center items-center w-full h-[512px] bg-ocean">
        <div className="flex justify-between w-full max-w-[1200px] items-center">
          <div className="flex-1 flex justify-center">
            <div className="w-[238px] h-[238px] rounded-full bg-tertiary"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <h2 className="text-[44px] text-center text-columbia">
              smth smth AI magic will make it so that you’ve never looked better
              never had more style woah!!
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full h-[1258px]"></section>

      <Image
        src={"/assets/Component9.png"}
        width={1712}
        height={502}
        alt={""}
        className="scale-y-[-1]"
      />
    </div>
  );
}
