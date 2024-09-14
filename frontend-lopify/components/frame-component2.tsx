import type { NextPage } from "next";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`w-full h-[2057.8px] absolute !m-[0] top-[213px] right-[0px] left-[0px] ${className}`}
    >
      <img
        className="absolute top-[0px] left-[696px] w-[992px] h-[962px] object-cover z-[2]"
        alt=""
        src="/image-20@2x.png"
      />
      <img
        className="absolute top-[643px] left-[1225px] w-[678px] h-[573.2px] object-contain z-[3]"
        loading="lazy"
        alt=""
        src="/image-7@2x.png"
      />
      <div className="absolute top-[1216px] left-[-66px] w-[2047px] h-[599px] z-[4] flex items-center justify-center">
        <img
          className="w-full h-full z-[4] object-contain absolute left-[0px] top-[4px] [transform:scale(1.05)]"
          alt=""
          src="/vector-9.svg"
        />
      </div>
      <img
        className="absolute top-[1584px] left-[1342px] w-[454px] h-[271.3px] object-contain z-[5]"
        alt=""
        src="/image-11@2x.png"
      />
      <img
        className="absolute top-[1628.7px] left-[1412.3px] w-[459.3px] h-[429.1px] object-contain z-[6]"
        loading="lazy"
        alt=""
        src="/image-12@2x.png"
      />
      <img
        className="absolute top-[1129px] left-[-68px] w-[296.4px] h-[226px] object-contain z-[6]"
        alt=""
        src="/image-18@2x.png"
      />
      <img
        className="absolute top-[1030px] left-[-112px] w-[296.5px] h-[211.5px] object-contain z-[7]"
        alt=""
        src="/image-19@2x.png"
      />
      <div className="absolute top-[90px] left-[19px] w-[677px] h-[595px] z-[3] flex items-center justify-center">
        <img
          className="w-full h-full z-[3] object-contain absolute left-[0px] top-[4px] [transform:scale(1.05)]"
          loading="lazy"
          alt=""
          src="/file3qub6dzikem6boquchqsevvs-1@2x.png"
        />
      </div>
      <img
        className="absolute top-[1287px] left-[1378px] rounded-228xl w-[269px] h-[270px] object-cover z-[5]"
        loading="lazy"
        alt=""
        src="/image-22@2x.png"
      />
    </section>
  );
};

export default FrameComponent2;
