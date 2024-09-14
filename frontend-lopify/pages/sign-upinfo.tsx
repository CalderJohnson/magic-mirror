import type { NextPage } from "next";

const SignUpinfo: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border gap-[51px] leading-[normal] tracking-[normal] mq825:gap-[25px]">
      <header className="self-stretch bg-silver flex flex-row items-start justify-start py-[15px] px-[47px] box-border top-[0] z-[99] sticky max-w-full text-left text-45xl text-black font-jsmath-cmmi10 mq1425:pl-[23px] mq1425:pr-[23px] mq1425:box-border">
        <div className="h-[100px] w-[1728px] relative bg-silver hidden max-w-full" />
        <div className="w-[781px] relative inline-block shrink-0 max-w-full z-[1]">
          MagicMirror
        </div>
      </header>
      <main className="w-[1478px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="flex flex-col items-start justify-start gap-[114.5px] max-w-full text-left text-109xl text-black font-heading-littler-boi mq825:gap-[29px] mq450:gap-[57px]">
          <div className="w-[999px] flex flex-col items-start justify-start max-w-full">
            <i className="self-stretch h-[280px] relative inline-block shrink-0 mq825:text-13xl mq1425:text-32xl">
              Mirror mirror on the wall...
            </i>
            <i className="self-stretch h-[280px] relative inline-block shrink-0 z-[1] mt-[-280px] mq825:text-13xl mq1425:text-32xl">
              Mirror mirror on the wall...
            </i>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end">
            <i className="relative mq825:text-13xl mq1425:text-32xl">
              <p className="m-0">smth smth personal</p>
              <p className="m-0">info collected</p>
            </i>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pl-[537px] pr-[286px] box-border max-w-full text-45xl text-whitesmoke lg:pl-[268px] lg:pr-[143px] lg:box-border mq825:pl-5 mq825:pr-5 mq825:box-border mq450:pl-[134px] mq450:pr-[71px] mq450:box-border">
            <div className="rounded-md bg-silver flex flex-row items-start justify-start py-[26.5px] px-[169px] box-border max-w-full mq450:pl-[84px] mq450:pr-[84px] mq450:box-border">
              <b className="relative">Try it</b>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignUpinfo;
