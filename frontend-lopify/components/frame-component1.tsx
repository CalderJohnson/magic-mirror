import type { NextPage } from "next";
import DesktopButtons from "./desktop-buttons";
export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1680px] flex flex-col items-start justify-start pt-0 px-[89px] pb-[520px] box-border gap-[564px] max-w-full text-center text-29xl text-olive font-modern-antiqua mq825:gap-[141px] mq825:pl-[22px] mq825:pr-[22px] mq825:pb-[220px] mq825:box-border mq450:gap-[70px] mq1425:gap-[282px] mq1425:pl-11 mq1425:pr-11 mq1425:pb-[338px] mq1425:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 lg:flex-wrap">
        <div className="w-[560px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq825:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border min-w-[181px]">
              <img
                className="self-stretch h-[159px] relative max-w-full overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[183px] mq450:gap-4">
              <img
                className="w-[130px] h-[74px] relative z-[2]"
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-end">
                <img
                  className="h-[109px] w-[191px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <DesktopButtons />
      </div>
      <div className="ml-[-111px] w-[780px] relative inline-block [text-shadow:0px_4px_10px_rgba(0,_0,_0,_0.1)] max-w-full z-[1] mq825:text-19xl mq450:text-10xl">
        <p className="m-0">"Step into the Reflection</p>
        <p className="m-0">of Your Dreams!"</p>
      </div>
    </section>
  );
};

export default FrameComponent1;
