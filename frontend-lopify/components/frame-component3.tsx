import type { NextPage } from "next";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-45xl text-olive font-heading-littler-boi ${className}`}
    >
      <img
        className="h-[259.3px] w-[449.7px] absolute !m-[0] top-[-158.6px] right-[-90.7px] object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/image-16@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[67px] max-w-full lg:gap-[33px] mq450:gap-[17px]">
        <div className="w-[1245px] flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border relative max-w-full">
          <img
            className="h-[354.5px] w-[465px] absolute !m-[0] bottom-[-167.5px] left-[-108px] object-contain z-[3]"
            loading="lazy"
            alt=""
            src="/image-17@2x.png"
          />
          <div className="flex-1 flex flex-row items-start justify-end max-w-full">
            <img
              className="w-[753px] relative max-h-full object-cover max-w-full z-[1]"
              loading="lazy"
              alt=""
              src="/image-14@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch shadow-[0px_4px_75px_8px_rgba(111,_19,_54,_0.33)] bg-peachpuff flex flex-row items-start justify-start pt-9 pb-[35px] pl-[73px] pr-[101px] box-border gap-[161px] max-w-full z-[1] lg:gap-20 lg:pl-9 lg:pr-[50px] lg:box-border mq825:pt-[23px] mq825:pb-[23px] mq825:box-border mq450:gap-10 mq450:pr-5 mq450:box-border mq1425:flex-wrap">
          <div className="h-[515px] w-[1728px] relative shadow-[0px_4px_75px_8px_rgba(111,_19,_54,_0.33)] bg-peachpuff hidden max-w-full" />
          <div className="h-[444px] relative rounded-[50%] bg-silver [transform:_rotate(180deg)] min-w-[438px] max-w-full z-[2] mq825:min-w-full mq1425:flex-1" />
          <div className="flex-1 flex flex-col items-start justify-start pt-[111px] px-0 pb-0 box-border min-w-[621px] max-w-full lg:min-w-full">
            <b className="h-[222px] relative inline-block max-w-full z-[2] mq825:text-32xl mq450:text-19xl">
              <p className="m-0">smth smth AI magic will make it</p>
              <p className="m-0">so that you’ve never looked better</p>
              <p className="m-0">never had more style woah!!</p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
