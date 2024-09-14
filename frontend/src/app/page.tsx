import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-[6929px]">
      {/* Background Image */}
      <Image
        src={"/assets/Component9.png"}
        width={1712}
        height={502}
        alt={""}
        className="absolute z-[-1]"
      />
      <main className="flex flex-col justify-start h-[797px] pt-[100px]">
        <div className="flex justify-around gap-2">
          <div className="flex flex-col gap-6 ml-[112px] mt-[152px] w-full">
            <h1 className="font-semibold text-6xl">Magic Mirror</h1>
            <p className="text-[30px]">A-really-cool-slogan</p>
          </div>
          <Image
            src={"/assets/mirror_magic.png"}
            width={800}
            height={800}
            alt={""}
          />
        </div>
        <Link
          href={"/info"}
          className="px-[32px] py-[10px] bg-secondary self-center"
        >
          Try It
        </Link>
      </main>

      <div className="absolute top-[400px] right-[50px] -rotate-45 z-[1]">
        <Image
          src={"/assets/tropical-ferns-png-7.png"}
          width={328}
          height={493}
          alt={""}
        />
      </div>

      <section className="flex justify-center items-center w-full h-[512px] bg-cloud z-[2] relative">
        <div className="flex justify-between w-full max-w-[1200px] items-center">
          <div className="flex-1 flex justify-center">
            <h2 className="text-[44px] text-center">
              Confidence with clothes that fit!
            </h2>
          </div>
          <div className="flex-1 flex justify-center">
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
