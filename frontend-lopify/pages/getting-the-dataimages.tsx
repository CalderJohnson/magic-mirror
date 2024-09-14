import type { NextPage } from "next";

const GettingTheDataimages: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border gap-[51px] leading-[normal] tracking-[normal] mq825:gap-[25px]">
      <header className="self-stretch bg-silver flex flex-row items-start justify-start py-[15px] px-[47px] box-border top-[0] z-[99] sticky max-w-full text-left text-45xl text-black font-jsmath-cmmi10 mq1425:pl-[23px] mq1425:pr-[23px] mq1425:box-border">
        <div className="h-[100px] w-[1728px] relative bg-silver hidden max-w-full" />
        <a className="[text-decoration:none] w-[781px] relative text-[inherit] inline-block shrink-0 max-w-full z-[1]">
          MagicMirror
        </a>
      </header>
      <main className="w-[1689px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="flex flex-col items-start justify-start gap-[22px] max-w-full text-left text-109xl text-black font-heading-littler-boi">
          <h1 className="m-0 w-[1433px] relative text-inherit inline-block italic font-normal font-[inherit] max-w-full mq825:text-13xl mq450:text-32xl">
            What do you wish to see...
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[39px] pr-0 box-border max-w-full text-45xl">
            <div className="flex-1 flex flex-col items-end justify-start gap-9 max-w-full mq450:gap-[18px]">
              <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5">
                <div className="bg-gainsboro flex flex-row items-start justify-start py-[156px] pl-[41px] pr-10 box-border min-h-[601px] max-w-full mq825:pt-[101px] mq825:pb-[101px] mq825:box-border">
                  <div className="h-[601px] w-[638px] relative bg-gainsboro hidden max-w-full" />
                  <b className="relative z-[1] mq825:text-19xl mq450:text-32xl">{`wow it’s my face >:0`}</b>
                </div>
                <div className="bg-gainsboro flex flex-row items-start justify-start py-[78px] px-3.5 box-border min-h-[601px] max-w-full mq825:pt-[51px] mq825:pb-[51px] mq825:box-border">
                  <div className="h-[601px] w-[638px] relative bg-gainsboro hidden max-w-full" />
                  <b className="relative z-[1] mq825:text-19xl mq450:text-32xl">
                    <p className="m-0">wow it’s that sick</p>
                    <p className="m-0">outfit I’m considering</p>
                    <p className="m-0">getting</p>
                  </b>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[498px] pr-[497px] box-border max-w-full text-whitesmoke mq825:pl-5 mq825:pr-5 mq825:box-border mq450:pl-[124px] mq450:pr-[124px] mq450:box-border">
                <div className="flex-1 rounded-md bg-silver flex flex-row items-start justify-start py-[26.5px] pl-[89px] pr-[88px] box-border max-w-full mq450:pl-11 mq450:pr-11 mq450:box-border">
                  <b className="relative mq825:text-19xl mq450:text-32xl">
                    COMBINE!!!
                  </b>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GettingTheDataimages;
