import Image from "next/image";

const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const studentAvatars = [
  { id: "1", img: "/images/home-image/man1.png" },
  { id: "2", img: "/images/home-image/man2.png" },
  { id: "3", img: "/images/home-image/man3.png" },
  { id: "4", img: "/images/home-image/man4.png" },
  { id: "5", img: "/images/home-image/man5.png" },
  { id: "6", img: "/images/home-image/man6.png" },
  { id: "7", img: "/images/home-image/man7.png" },
];

export default function FeaturesSection() {
  return (
    <section className="relative md:pb-5 pt-10 md:pt-20 lg:pt-0 px-5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/images/home-image/11.png"
                alt="Creator with headset"
                width={520}
                height={520}
                className="w-full h-auto drop-shadow-2xl relative z-30"
                priority
              />

              <div className="absolute top-[8%] left-[-5%] sm:left-[-10%] bg-persian-blue-800 rounded-xl shadow-xl p-4 w-58 sm:p-5 z-20 animate-float-slow">
                <p className="text-shuttle-gray-50 text-sm sm:text-base font-medium">
                  Total Revenue
                </p>
                <p className="text-shuttle-gray-50 text-[10px] sm:text-xs">
                  July 1-28
                </p>
                <p className="font-poppins text-shuttle-gray-50 text-2xl sm:text-2xl font-semibold mt-1">
                  $120.29
                </p>
                <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                  <div
                    className="bg-electric-lime-400 h-2 rounded-full"
                    style={{ width: "65%" }}
                  />
                </div>
              </div>

              <div className="absolute top-[40%] md:top-[32%] left-[-5%] sm:left-[-10%] bg-persian-blue-800 rounded-xl shadow-xl p-4 sm:p-5 z-20 animate-float-medium">
                <p className="text-shuttle-gray-50 text-sm sm:text-base font-medium">
                  Year to Date
                </p>
                <p className="text-shuttle-gray-50 text-[10px] sm:text-xs">
                  2023
                </p>
                <p className="text-shuttle-gray-50 text-2xl sm:text-2xl font-semibold font-poppins mt-1">
                  $1,200.38
                </p>
                <span className="inline-block mt-2 bg-electric-lime-400 text-shuttle-gray-950 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full">
                  +12$
                </span>
              </div>
              <div
                className="absolute -top-20 -left-200.5 w-284.25 h-284.25 rounded-full opacity-60 blur-2xl pointer-events-none rotate-45"
                style={{
                  background:
                    "radial-gradient(circle, #CBFC01, #CBFC013B, #CBFC010F, #CBFC0100)",
                }}
                aria-hidden="true"
              />
              <div className="absolute bottom-[50%] right-0 sm:right-[5%] z-30">
                <Image
                  src={"/icons/shape1.svg"}
                  alt=""
                  width={210}
                  height={210}
                  className="w-30 h-30 md:w-52.5 md:h-52.5 rotate-135 md:rotate-0 z-40"
                />
              </div>

              <div className="absolute bottom-[25%] right-[1%] sm:right-[-0%] bg-white rounded-xl shadow-xl p-4 sm:p-5 z-30 w-40 md:w-64.5 animate-float-fast">
                <p className="text-shuttle-gray-950 text-sm sm:text-base font-medium mb-1">
                  Happy Students
                </p>
                <div className="flex items-center gap-1 mb-3">
                  <span className="text-sm sm:text-[10px] font-bold text-shuttle-gray-950">
                    4.5
                  </span>
                  <span className="text-[10px] text-shuttle-gray-400">
                    (240)
                  </span>
                  <svg
                    className="w-4 h-4 text-electric-lime-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="flex items-center">
                  <div className="flex -space-x-4">
                    {studentAvatars.map((avatar, i) => (
                      <div
                        key={i}
                        className={`w-7 h-7 sm:w-10 sm:h-10 rounded-full border-2 border-white flex items-center justify-center`}
                      >
                        <Image
                          src={avatar?.img}
                          alt=""
                          height={43}
                          width={43}
                          className="rounded-full h-auto w-auto"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="bg-electric-lime-400 text-gray-900 text-xs font-bold h-7 w-7 md:h-10 md:w-10 rounded-full flex justify-center items-center -ml-3">
                    2K+
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pl-8">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-shuttle-gray-950 font-poppins leading-[120%]">
              Create & Manage Courses Easily.
            </h2>

            <p className="text-shuttle-gray-700 text-sm sm:text-lg leading-relaxed my-6 md:my-10 max-w-143.5">
              <span className="font-bold text-shuttle-gray-950">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
                        fill="#003BE2"
                      />
                    </svg>
                  </div>
                  <span className="text-shuttle-gray-950 text-sm sm:text-base font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
