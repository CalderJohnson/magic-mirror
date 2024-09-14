import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-20 pr-[82px] box-border max-w-full text-left text-45xl text-night font-heading-littler-boi lg:pl-10 lg:pr-[41px] lg:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[24.4px] max-w-full">
        <div className="self-stretch flex flex-row items-end justify-start gap-[60px] max-w-full mq825:gap-[30px] mq1425:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[137px] max-w-full lg:gap-[68px] lg:min-w-full mq825:gap-[34px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[11px] pr-0">
              <b className="relative z-[1] mq825:text-32xl mq450:text-19xl">
                <p className="m-0">woah now you look amazing and</p>
                <p className="m-0">super cool huzzah</p>
              </b>
            </div>
            <img
              className="w-[130px] h-[74px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/vector-7.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start relative max-w-full mq825:min-w-full mq1425:flex-1">
            <img
              className="h-[602.6px] flex-1 relative rounded-175xl max-w-full overflow-hidden object-cover z-[1] mq1425:flex-1"
              alt=""
              src="/image-13@2x.png"
            />
            <img
              className="h-[422.8px] w-[462.6px] absolute !m-[0] right-[-190.9px] bottom-[-102.2px] object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/image-15@2x.png"
            />
          </div>
        </div>
        <div className="w-[262px] flex flex-row items-start justify-center py-0 px-5 box-border">
          <img
            className="h-[50px] w-[88px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/vector-8.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
