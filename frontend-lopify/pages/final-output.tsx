import type { NextPage } from "next";
import CopyrightInfo from "../components/copyright-info";
import FrameComponent6 from "../components/frame-component6";

const FinalOutput: NextPage = () => {
  return (
    <div className="w-full h-[5280px] relative bg-blossom overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[1041px] box-border gap-[672px] leading-[normal] tracking-[normal] text-left text-109xl text-black font-header-big-boi mq825:gap-[336px] mq1425:gap-[168px]">
      <main className="self-stretch flex flex-col items-end justify-start gap-40 shrink-0 max-w-full mq825:gap-20 mq1425:gap-10">
        <section className="self-stretch flex flex-col items-start justify-start gap-[123px] max-w-full text-left text-29xl text-black font-heading-littler-boi mq825:gap-[61px] mq1425:gap-[31px]">
          <CopyrightInfo />
          <div className="self-stretch flex flex-col items-start justify-start pt-[725px] pb-[809px] pl-[71px] pr-5 box-border relative gap-[266px] max-w-full mq825:gap-[66px] mq825:pt-[199px] mq825:pb-[222px] mq825:box-border mq450:gap-[133px] mq450:pl-[35px] mq450:pt-[306px] mq450:pb-[342px] mq450:box-border mq1425:gap-[33px]">
            <div className="w-[1744px] h-full absolute !m-[0] top-[2164px] bottom-[-2164px] left-[1733px] [background:linear-gradient(180deg,_#ebb2ac_64%,_rgba(209,_91,_136,_0.33))] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
            <div className="w-[1217px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
              <div className="h-[197px] flex-1 flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[766px] w-[637px] absolute !m-[0] right-[-86px] bottom-[-329px] bg-gainsboro z-[1]" />
                <b className="flex-1 relative inline-block max-w-full z-[2] mq825:text-19xl mq1425:text-10xl">
                  <p className="m-0">price: $$$$</p>
                  <p className="m-0">size: a #</p>
                  <p className="m-0">Fabric:</p>
                  <p className="m-0">Washing instructions:</p>
                  <p className="m-0">Other parameters??</p>
                </b>
              </div>
            </div>
            <b className="w-[1340px] relative text-45xl inline-block max-w-full z-[2] mq825:text-32xl mq1425:text-19xl">
              recommended accessories idk what to call this??
            </b>
            <b className="w-[1050px] h-[65px] absolute !m-[0] bottom-[-31px] left-[81px] inline-block z-[1] mq825:text-19xl mq1425:text-10xl">
              carousel with reviews: (click to enlarge review)
            </b>
          </div>
        </section>
        <FrameComponent6 />
      </main>
      <img
        className="mr-[-26px] w-[2121px] h-[531.9px] relative object-contain shrink-0 max-w-[123%]"
        alt=""
        src="/vector.svg"
      />
      <div className="w-full h-[865.7px] absolute !m-[0] top-[1347px] right-[0px] left-[0px]">
        <div className="absolute top-[0px] left-[-41px] w-[1775px] flex flex-row items-start justify-start">
          <img
            className="h-[536px] flex-1 relative max-w-full overflow-hidden z-[1]"
            alt=""
            src="/group-6.svg"
          />
          <h1 className="!m-[0] h-[280px] w-[1433px] absolute top-[76px] left-[109px] text-inherit font-medium font-[inherit] inline-block z-[3] mq825:text-32xl mq1425:text-13xl">
            About your fit
          </h1>
        </div>
        <img
          className="absolute top-[189.2px] left-[1418.3px] w-[508.5px] h-[676.5px] object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/image-5@2x.png"
        />
      </div>
      <header className="w-full h-[223px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <div className="absolute top-[-170px] left-[-38px] w-[2047px] h-[393px] z-[2] flex items-center justify-center">
          <img
            className="w-full h-full z-[2] object-contain absolute left-[0px] top-[4px] [transform:scale(1.076)]"
            alt=""
            src="/vector-11.svg"
          />
        </div>
        <img
          className="absolute top-[10px] left-[42px] rounded-[100px] w-[94px] h-[94px] object-cover z-[3]"
          loading="lazy"
          alt=""
          src="/image-21@2x.png"
        />
      </header>
    </div>
  );
};

export default FinalOutput;
