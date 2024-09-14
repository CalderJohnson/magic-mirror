import type { NextPage } from "next";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1685px] flex flex-row items-start justify-end py-0 px-7 box-border max-w-full ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-[98px] box-border relative gap-[65px] max-w-full mq825:gap-8 mq825:pl-6 mq825:pr-6 mq825:box-border mq450:pl-[49px] mq450:pr-[49px] mq450:box-border mq1425:gap-4">
        <div className="h-[356px] w-[307px] relative bg-gainsboro" />
        <div className="w-[679px] flex flex-col items-start justify-start gap-[41px] max-w-full mq825:gap-5">
          <div className="self-stretch flex flex-row items-start justify-start gap-[66px] mq825:gap-[33px] mq825:flex-wrap mq1425:gap-4">
            <div className="h-[356px] flex-1 relative bg-gainsboro min-w-[200px]" />
            <div className="h-[356px] flex-1 relative bg-gainsboro min-w-[200px]" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[22px]">
            <div className="flex flex-row items-start justify-start gap-[29.5px]">
              <div className="h-12 w-11 relative rounded-[50%] bg-darkgray" />
              <div className="h-12 w-11 relative rounded-[50%] bg-gainsboro" />
              <div className="h-12 w-11 relative rounded-[50%] bg-gainsboro" />
            </div>
          </div>
        </div>
        <div className="h-[356px] w-[307px] relative bg-gainsboro" />
        <img
          className="h-[65.8px] w-[59.8px] absolute !m-[0] top-[14.1px] left-[0px] object-contain"
          loading="lazy"
          alt=""
          src="/polygon-1.svg"
        />
        <img
          className="h-[65.8px] w-[70.1px] absolute !m-[0] top-[39.2px] right-[0px] object-contain"
          loading="lazy"
          alt=""
          src="/polygon-2.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent6;
