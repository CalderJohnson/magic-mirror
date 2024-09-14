import type { NextPage } from "next";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-[43px] pb-[420px] box-border max-w-full shrink-0 text-left text-45xl text-olive font-heading-littler-boi lg:pb-[177px] lg:box-border mq450:pb-[115px] mq450:box-border mq1425:pl-[21px] mq1425:pr-[21px] mq1425:pb-[273px] mq1425:box-border ${className}`}
    >
      <div className="w-[1600px] flex flex-col items-start justify-start gap-[73px] max-w-full mq825:gap-9 mq450:gap-[18px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[110.2px] max-w-full mq825:gap-[55px] mq450:gap-7 mq1425:flex-wrap">
          <img
            className="w-[579.8px] relative rounded-175xl max-h-full object-cover max-w-full z-[1] mq1425:flex-1"
            loading="lazy"
            alt=""
            src="/image-8@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[131px] px-0 pb-0 box-border min-w-[591px] max-w-full mq825:min-w-full mq450:pt-[85px] mq450:box-border">
            <b className="relative z-[1] mq825:text-32xl mq450:text-19xl">
              <p className="m-0">do you have this bad problem</p>
              <p className="m-0">
                where you online shop and then when you get the item it looks
                bad on you? :(
              </p>
            </b>
          </div>
        </div>
        <div className="w-[229px] flex flex-row items-start justify-start pt-0 px-[27px] pb-[21px] box-border">
          <div className="flex-1 flex flex-col items-end justify-start gap-[25px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <img
                className="h-[74px] w-[130px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
            </div>
            <img
              className="w-[88px] h-[50px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/vector-4.svg"
            />
          </div>
        </div>
        <div className="w-[1589px] flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start [row-gap:20px] max-w-full mq1425:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-[97px] px-0 pb-0 box-border min-w-[635px] max-w-full mq825:min-w-full mq450:pt-[63px] mq450:box-border">
              <b className="relative z-[1] mq825:text-32xl mq450:text-19xl">{`smth smth let our fairy godmothers take care of you with this newfangled thing called the magic mirror oooooh magic >:0`}</b>
            </div>
            <img
              className="w-[558px] relative rounded-175xl max-h-full object-cover max-w-full z-[2] mq1425:flex-1"
              loading="lazy"
              alt=""
              src="/image-9@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
