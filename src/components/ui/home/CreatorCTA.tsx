import BlueGridBackground from "@/components/common/BlueGridBackground";
import Image from "next/image";

const CreatorCTA = () => {
  return (
    <BlueGridBackground>
      <Image
        src="/icons/yellow-hero-left-shape.svg"
        alt=""
        width={343}
        height={343}
        className="absolute top-[-19%] -left-10 w-36 h-36 md:w-66 md:h-66 z-10 animate-float-slow"
        aria-hidden="true"
      />

      <Image
        src="/icons/white-hero-left-shape.svg.svg"
        alt=""
        width={175}
        height={175}
        className="hidden md:flex absolute top-[10%] left-[8%] w-36 h-36 md:w-35 md:h-35 z-10 animate-float-medium"
        aria-hidden="true"
      />

      <Image
        src="/icons/creator-yellow-ring.svg"
        alt=""
        width={343}
        height={343}
        className="absolute bottom-[-15%] left-[14%] md:left-[2%] w-36 h-36 md:w-74 md:h-74 z-10 animate-float-slow"
        aria-hidden="true"
      />

      <Image
        src="/icons/creator-white-cone.svg"
        alt=""
        width={100}
        height={100}
        className="hidden md:flex absolute top-[40%] left-[-1%] w-36 h-36 md:w-45 md:h-45 z-10 animate-float-medium"
        aria-hidden="true"
      />

      <Image
        src="/icons/yellow-hero-left-shape.svg"
        alt=""
        width={343}
        height={343}
        className="absolute rotate-140 bottom-[-15%] right-10 w-36 h-36 md:w-46 md:h-46 z-10 animate-float-slow"
        aria-hidden="true"
      />

      <Image
        src="/icons/creator-white-right.svg"
        alt=""
        width={150}
        height={150}
        className="absolute top-[20%] right-[-15%] md:right-[-2%] w-30 h-30 md:w-46 md:h-46 z-10 animate-float-slow"
        aria-hidden="true"
      />

      <section className="relative overflow-hidden py-16 md:py-20 lg:py-24 max-h-122">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-2xl text-2xl sm:text-3xl md:text-[44px] font-semibold leading-[120%] text-shuttle-gray-50 md:text-5xl">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>

          <p className="mx-auto mt-6 md:mt-10 max-w-3xl text-base font-normal md:text-lg leading-[160%] text-shuttle-gray-50 sm:text-base md:leading-[160%] ">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          <button
            type="button"
            className="mt-10 rounded-full bg-electric-lime-400 px-7 py-3 text-sm md:text-lg font-medium text-[#111] transition-transform duration-200 hover:scale-105"
          >
            Join as Creator
          </button>
        </div>
      </section>
    </BlueGridBackground>
  );
};

export default CreatorCTA;
