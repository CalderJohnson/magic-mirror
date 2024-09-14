import type { NextPage } from "next";

export type CopyrightInfoType = {
  className?: string;
};

const CopyrightInfo: NextPage<CopyrightInfoType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch [background:linear-gradient(180deg,_#fcd3b6,_#efd0ce_52%,_#ebb0aa_85.5%)] flex flex-row items-start justify-start pt-[157px] pb-[257px] pl-[73px] pr-[59px] box-border gap-[39px] max-w-full text-left text-45xl text-black font-heading-littler-boi mq825:pt-[66px] mq825:pb-[109px] mq825:pl-9 mq825:pr-[29px] mq825:box-border mq450:pt-[102px] mq450:pb-[167px] mq450:box-border mq1425:gap-[19px] ${className}`}
    >
      <div className="h-[1347px] w-[1728px] relative [background:linear-gradient(180deg,_#fcd3b6,_#efd0ce_52%,_#ebb0aa_85.5%)] hidden max-w-full" />
      <div className="h-[673px] flex flex-col items-start justify-start pt-[191px] px-0 pb-0 box-border min-w-[447px] max-w-full mq825:pt-[124px] mq825:box-border mq825:min-w-full">
        <div className="self-stretch flex-1 relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset,_0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-t-161xl rounded-b-none bg-lavender z-[1]" />
      </div>
      <div className="flex-1 flex flex-row items-start justify-start gap-[39px] min-w-[721px] max-w-full mq825:gap-[19px] mq450:flex-wrap mq450:min-w-full">
        <div className="flex-1 flex flex-col items-end justify-start gap-[42.5px] min-w-[406px] max-w-full mq825:gap-[21px] mq825:min-w-full">
          <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset,_0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-t-161xl rounded-b-none bg-lavender flex flex-row items-start justify-end pt-[272px] px-[27px] pb-[106px] box-border min-h-[673px] max-w-full z-[1] mq1425:pt-[177px] mq1425:pb-[69px] mq1425:box-border">
            <div className="h-[673px] w-[624px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset,_0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-t-161xl rounded-b-none bg-lavender hidden max-w-full" />
            <b className="w-[482px] relative inline-block shrink-0 max-w-full z-[2] mq825:text-32xl mq1425:text-19xl">
              generated img
            </b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px]">
            <div className="flex flex-row items-start justify-start gap-[29.5px]">
              <div className="h-12 w-11 relative shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)_inset] rounded-[50%] bg-lightpink-200 z-[1]" />
              <div className="h-12 w-11 relative shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)_inset] rounded-[50%] bg-lightpink-100 z-[1]" />
              <div className="h-12 w-11 relative shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)_inset] rounded-[50%] bg-lightpink-100 z-[1]" />
            </div>
          </div>
          <div className="flex flex-row items-start justify-end py-0 px-[122px] box-border max-w-full text-17xl text-whitesmoke mq825:pl-[61px] mq825:pr-[61px] mq825:box-border mq1425:pl-5 mq1425:pr-5 mq1425:box-border">
            <div className="shadow-[0px_4px_8px_rgba(0,_0,_0,_0.25)] rounded-md bg-ocean flex flex-row items-start justify-start py-[42.5px] pl-[57px] pr-14 box-border max-w-full z-[1] mq1425:pl-5 mq1425:pr-5 mq1425:box-border">
              <b className="relative">something here</b>
            </div>
          </div>
        </div>
        <div className="h-[673px] flex flex-col items-start justify-start pt-[191px] px-0 pb-0 box-border min-w-[447px] max-w-full mq825:pt-[124px] mq825:box-border mq825:min-w-full mq450:flex-1">
          <div className="self-stretch flex-1 relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset,_0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-t-161xl rounded-b-none bg-lavender z-[1]" />
        </div>
      </div>
    </div>
  );
};

export default CopyrightInfo;
