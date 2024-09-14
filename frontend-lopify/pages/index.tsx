import type { NextPage } from "next";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent from "../components/frame-component";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";

const LandingPage: NextPage = () => {
  return (
    <div className="w-full h-[9622px] relative [background:linear-gradient(180deg,_#efd0ce_36.5%,_#ebb0aa)] overflow-hidden flex flex-col items-start justify-start pt-[61px] px-0 pb-[640px] box-border gap-[46px] leading-[normal] tracking-[normal] lg:h-auto mq450:gap-[23px]">
      <div className="self-stretch h-[5297px] relative [background:linear-gradient(180deg,_#fcd3b6,_#efd0ce_37.5%,_#ebb0aa_85.5%)] hidden z-[0]" />
      <div className="self-stretch h-[2164px] relative [background:linear-gradient(180deg,_#ebb2ac_64%,_rgba(209,_91,_136,_0.33))] hidden z-[1]" />
      <div className="self-stretch h-[1527px] relative [background:linear-gradient(180deg,_#ebb2ac,_#fcd3b6)] hidden z-[2]" />
      <FrameComponent1 />
      <img
        className="w-[813.3px] h-[700.6px] absolute !m-[0] top-[3463px] left-[-143px] object-contain z-[2]"
        loading="lazy"
        alt=""
        src="/image-3@2x.png"
      />
      <section className="w-[1432px] flex flex-row items-start justify-start pt-0 pb-[606px] pl-[57px] pr-14 box-border max-w-full shrink-0 text-left text-77xl text-night font-heading-littler-boi mq825:pb-[394px] mq825:box-border mq1425:pl-7 mq1425:pr-7 mq1425:box-border">
        <h3 className="m-0 h-[124px] flex-1 relative text-inherit inline-block italic font-normal font-[inherit] max-w-full z-[5] mq825:text-29xl mq450:text-10xl">
          Confidence with clothes that fit!
        </h3>
      </section>
      <FrameComponent4 />
      <FrameComponent5 />
      <section className="flex flex-row items-start justify-start pt-0 pb-[834px] pl-[9px] pr-0 box-border max-w-full shrink-0 mq825:pb-[229px] mq825:box-border mq450:pb-[149px] mq450:box-border mq1425:pb-[352px] mq1425:box-border">
        <div className="w-[1719px] flex flex-col items-start justify-start gap-[264px] max-w-full lg:gap-[132px] mq450:gap-[66px]">
          <FrameComponent />
          <FrameComponent3 />
        </div>
      </section>
      <section className="w-[1451px] flex flex-row items-start justify-start py-0 pl-[75px] pr-[74px] box-border max-w-full shrink-0 text-left text-77xl text-night font-header-big-boi mq1425:pl-[37px] mq1425:pr-[37px] mq1425:box-border">
        <h3 className="m-0 h-[166px] flex-1 relative text-inherit font-medium font-[inherit] inline-block max-w-full z-[1] mq825:text-29xl mq450:text-10xl">
          Proudly powered by...
        </h3>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[145px] pl-0 pr-[9px] box-border max-w-full shrink-0 text-left text-29xl text-night font-header-big-boi mq450:pb-[94px] mq450:box-border">
        <div className="h-[249px] flex-1 bg-gainsboro flex flex-row items-start justify-end pt-[49px] px-[60px] pb-[34px] box-border max-w-full z-[1] mq1425:pl-[30px] mq1425:pr-[30px] mq1425:box-border">
          <div className="h-[249px] w-[1728px] relative bg-gainsboro hidden max-w-full" />
          <div className="w-[1301px] relative font-medium inline-block shrink-0 max-w-full z-[2] mq825:text-19xl mq450:text-10xl">
            This is the scrolly bit, but make the box transparent to match bg
          </div>
        </div>
      </section>
      <section className="ml-[-1px] self-stretch flex flex-row items-start justify-start relative max-w-[102%]">
        <img
          className="h-[506.8px] flex-1 relative max-w-full overflow-hidden z-[3]"
          loading="lazy"
          alt=""
          src="/group-5.svg"
        />
        <div className="h-[674px] w-[618.3px] absolute !m-[0] top-[-225px] left-[1px]">
          <img
            className="absolute top-[0px] left-[-172px] w-[510.8px] h-[675.5px] object-contain z-[2]"
            alt=""
            src="/image-5@2x.png"
          />
          <img
            className="absolute top-[167px] left-[-195px] w-[813.3px] h-[700.6px] object-contain z-[4]"
            alt=""
            src="/image-6@2x.png"
          />
        </div>
      </section>
      <FrameComponent2 />
    </div>
  );
};

export default LandingPage;
