import Image from "next/image";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export default function GrowthSection() {
  return (
    <section className="relative lg:pb-8 px-5 overflow-hidden pt-18 md:pt-30">
      <div
        className="absolute top-0 lg:bottom-50 -left-54 lg:-left-8 w-144.25 h-124.25 lg:w-244.25 lg:h-224.25 rounded-full opacity-60 blur-2xl pointer-events-none rotate-45 z-20"
        style={{
          background:
            "radial-gradient(circle, #CBFC01, #CBFC013B, #CBFC010F, #CBFC0100)",
        }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 items-center">
          <div className="order-2 lg:order-1 lg:pr-8">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold font-poppins text-shuttle-gray-950 leading-[120%] mb-8">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="text-shuttle-gray-700 text-sm sm:text-lg leading-[160%] mb-10 max-w-119.25">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="flex flex-wrap gap-8 sm:gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-[36px] font-medium text-persian-blue-800">
                    {stat.value}
                  </p>
                  <p className="text-shuttle-gray-700 text-sm md:text-lg">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/images/home-image/12.png"
                alt="Student learning"
                width={520}
                height={520}
                className="w-full h-auto drop-shadow-2xl relative z-10"
                priority
              />

              <div className="absolute bottom-[51%] right-0 sm:right-[-18%] z-30">
                <Image
                  src={"/icons/shape2.svg"}
                  alt=""
                  width={210}
                  height={210}
                />
              </div>
              <div className="absolute top-[35%] right-[-5%] sm:right-[-8%] bg-white rounded-xl shadow-xl p-4 sm:p-5 z-20 w-40 sm:w-55.75 animate-float-medium">
                <p className="text-xs sm:text-sm text-shuttle-gray-950 font-medium mb-1">
                  Learning Progress
                </p>
                <p className="text-3xl sm:text-4xl md:text-[48px] font-semibold font-poppins text-shuttle-gray-950 mb-2">
                  55%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-electric-lime-400 h-2 rounded-full"
                    style={{ width: "55%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
