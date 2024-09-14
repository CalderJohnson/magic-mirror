import type { NextPage } from "next";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1683px] flex flex-row items-start justify-start pt-0 px-[77px] pb-[393px] box-border max-w-full shrink-0 text-left text-45xl text-night font-heading-littler-boi lg:pb-[255px] lg:box-border mq825:pb-[166px] mq825:box-border mq1425:pl-[38px] mq1425:pr-[38px] mq1425:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[27px] max-w-full">
        <div className="self-stretch flex flex-row items-end justify-start gap-[54px] max-w-full mq825:gap-[27px] mq1425:flex-wrap">
          <div className="h-[608px] flex flex-col items-start justify-end pt-0 px-0 pb-[12.8px] box-border max-w-full mq825:min-w-full mq1425:flex-1">
            <img
              className="self-stretch flex-1 relative rounded-175xl max-w-full overflow-hidden max-h-full object-cover z-[1] mq1425:self-stretch mq1425:w-auto"
              loading="lazy"
              alt=""
              src="/image-10@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[103px] min-w-[596px] max-w-full lg:gap-[51px] mq825:min-w-full mq450:gap-[26px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[19px] pr-0 box-border max-w-full">
              <b className="flex-1 relative inline-block max-w-full z-[1] mq825:text-32xl mq450:text-19xl">
                it’s as easy as abracadabra idk it tells you how to do it here
                and whatnot dude
              </b>
            </div>
            <img
              className="w-[130px] h-[74px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/vector-5.svg"
            />
          </div>
        </div>
        <div className="w-[1174px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <img
            className="h-[50px] w-[88px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/vector-6.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
