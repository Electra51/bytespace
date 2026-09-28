import BlueGridBackground from "@/components/common/BlueGridBackground";
import Link from "next/link";

export default function NotFound() {
  return (
    <BlueGridBackground>
      <div className="flex flex-col items-center justify-center text-center px-4 min-h-screen">
        <h1
          className=" text-[189px] sm:text-[290px] md:text-[390px] lg:text-[480px] font-poppins font-semibold leading-[100%] bg-[linear-gradient(to_bottom,#D4FB20_0%,#D4FB20F5_25%,#D4FB20CF_50%,#D4FB209C_75%,#FFFFFF00_100%)] bg-clip-text text-transparent select-none
  "
        >
          404
        </h1>

        <h2 className="text-[24px] sm:text-[42px] md:text-[49px] lg:text-[72px] font-semibold font-poppins text-white -mt-12 sm:-mt-20 md:-mt-26 lg:-mt-30 leading-[120%]">
          The page you are looking
          <br />
          for doesn't exist
        </h2>

        <p className="mt-8 text-sm sm:text-[18px] text-shuttle-gray-100 max-w-121.5">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          href="/"
          className="mt-8 inline-block bg-electric-lime-400 hover:bg-lime-400 text-shuttle-gray-950 font-medium text-sm sm:text-base px-6 py-3 rounded-full transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </BlueGridBackground>
  );
}
