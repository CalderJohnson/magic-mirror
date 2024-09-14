import type { NextPage } from "next";

export type DesktopButtonsType = {
  className?: string;
};

const DesktopButtons: NextPage<DesktopButtonsType> = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-2 pl-[109px] pr-[108px] bg-darkolivegreen rounded-md flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-darkseagreen mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <b className="relative text-45xl font-heading-littler-boi text-whitesmoke text-left">
        Try it
      </b>
    </button>
  );
};

export default DesktopButtons;
