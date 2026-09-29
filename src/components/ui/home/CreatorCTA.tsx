import BlueGridBackground from "@/components/common/BlueGridBackground";

const CreatorCTA = () => {
  return (
    <BlueGridBackground>
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
