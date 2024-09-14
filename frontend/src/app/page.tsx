import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="w-full h-[100px] bg-secondary">

      </div>
      <main className="flex flex-col">
        <div className="flex">
          <div className="flex flex-col gap-4 ml-[112px] mt-[152px]">
            <h1 className="font-semibold text-6xl">Magic
            Mirror</h1>
            <p>A-really-cool-slogan</p>
          </div>
        </div>
      </main>
    </div>
  );
}
