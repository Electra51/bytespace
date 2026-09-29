"use client";

import BlueGridBackground from "@/components/common/BlueGridBackground";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

const studentAvatars = [
  { id: "1", img: "/images/home-image/man1.png" },
  { id: "2", img: "/images/home-image/man2.png" },
  { id: "3", img: "/images/home-image/man3.png" },
  { id: "4", img: "/images/home-image/man4.png" },
  { id: "5", img: "/images/home-image/man5.png" },
  { id: "6", img: "/images/home-image/man6.png" },
  { id: "7", img: "/images/home-image/man7.png" },
];

export default function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedQuery = query.trim();
    router.push(`/courses?query=${encodeURIComponent(trimmedQuery)}`);
  };

  return (
    <BlueGridBackground>
      <div className="overflow-hidden min-h-160 md:min-h-256">
        <div className="absolute top-110 md:top-135.5 left-1/2 -translate-x-1/2 w-150 h-150 md:w-287.25 md:h-287.25 bg-electric-lime-400 rounded-full z-0" />

        <div className="absolute -bottom-40 left-[53%] -translate-x-1/2 z-10 w-110 max-w-196 md:w-196">
          <Image
            src="/images/home-image/man-hero1.png"
            alt="Student with laptop"
            width={800}
            height={800}
            className="w-full h-auto object-contain drop-shadow-[0_28px_60px_rgba(0,0,0,0.28)]"
            priority
          />
        </div>
        <Image
          src="/icons/yellow-hero-left-shape.svg"
          alt=""
          width={343}
          height={343}
          className="absolute top-[22%] md:top-[20%] -left-10 w-36 h-36 md:w-66 md:h-66 z-10 animate-float-slow"
          aria-hidden="true"
        />

        <Image
          src="/icons/white-hero-left-shape.svg.svg"
          alt=""
          width={175}
          height={175}
          className="hidden md:flex absolute top-[40%] left-[8%] w-36 h-36 md:w-45 md:h-45 z-10 animate-float-medium"
          aria-hidden="true"
        />

        <Image
          src="/icons/white-ring-shape.svg"
          alt=""
          width={343}
          height={343}
          className="absolute bottom-[15%] md:bottom-[4%] left-[-11%] md:left-[14%] lg:left-[2%] w-36 h-36 md:w-74 md:h-74 z-10 animate-float-slow"
          aria-hidden="true"
        />

        <Image
          src="/icons/white-cone-shape.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-[45%] md:top-[40%] -right-14.5 md:right-[8%] w-32 h-32 md:w-45 md:h-45 z-10 animate-float-medium"
          aria-hidden="true"
        />

        <Image
          src="/icons/yellow-right-shape.svg"
          alt=""
          width={150}
          height={150}
          className="absolute top-[25%] md:top-[20%] right-[-17%] md:right-[-2%] w-36 h-36 md:w-66 md:h-66 z-10 animate-float-slow"
          aria-hidden="true"
        />

        <Image
          src="/icons/white-hero-right-shape.svg"
          alt=""
          width={120}
          height={120}
          className="hidden md:flex absolute bottom-[12%] right-[3.5%] w-36 h-36 md:w-66 md:h-66 z-10 animate-float-fast"
          aria-hidden="true"
        />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 pt-24 md:pt-32 pb-10">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="md:max-w-150 mx-auto lg:max-w-233.75 text-white text-3xl sm:text-3xl md:text-5xl lg:text-[72px] font-semibold tracking-[-1%] leading-[120%] font-poppins mb-4">
              Get Access to Hundreds Courses Available
            </h1>
            <p className="text-shuttle-gray-100 text-sm sm:text-base md:text-lg md:max-w-150 lg:max-w-204.75 mx-auto">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center max-w-xl mx-auto mb-12 md:mb-16"
          >
            <div className="relative flex-1 py-3 px-6">
              <svg
                className="absolute left-12 top-1/2 -translate-y-1/2 w-4 h-4 text-shuttle-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Course, topic, creator"
                className="w-full bg-white rounded-full pl-12 pr-2 py-3.5 text-sm md:text-lg text-shuttle-gray-950 placeholder-shuttle-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-lime-400/50"
              />
            </div>
            <button
              type="submit"
              className="bg-electric-lime-400 text-shuttle-gray-950 font-medium py-3 px-6 rounded-full text-sm md:text-lg hover:bg-electric-lime-300 transition-colors whitespace-nowrap"
            >
              Search
            </button>
          </form>

          <div className="relative flex justify-center items-end pb-10">
            <div className="hidden md:flex absolute top-[22%] md:top-[166%] left-[10%] sm:left-[3%] md:left-[7%] bg-white rounded-xl shadow-xl p-4 z-30 w-44 sm:w-52 animate-float-slow">
              <p className="text-shuttle-gray-950 font-medium text-sm md:text-base">
                UI/UX Design
              </p>
              <p className="text-shuttle-gray-400 text-xs leading-[160%]">
                200 Courses • 1000+ Students
              </p>
            </div>

            <div className="hidden md:flex absolute top-[10%] md:top-[235%] right-[-4%] md:right-[5%] sm:right-[12%] bg-white rounded-xl shadow-xl p-4 z-30 w-40 sm:w-48 animate-float-medium">
              <p className="text-shuttle-gray-950 text-xs md:text-sm font-medium mb-1">
                Learning Progress
              </p>
              <p className="text-shuttle-gray-950 text-3xl md:text-[48px] font-SemiBold mb-2">
                55%
              </p>
              <div className="w-full bg-shuttle-gray-100 rounded-full h-2">
                <div
                  className="bg-electric-lime-400 h-2 rounded-full"
                  style={{ width: "55%" }}
                />
              </div>
            </div>

            <div className="absolute top-[10%] md:top-[680%] left-[60%] md:left-[2%] sm:left-[7%] bg-white rounded-xl shadow-xl p-4 z-30 w-38 sm:w-64.5 animate-float-fast">
              <p className="text-shuttle-gray-950 font-medium text-sm md:text-[16px] mb-0.5">
                Happy Students
              </p>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-sm font-normal text-shuttle-gray-950">
                  4.5
                </span>
                <span className="text-xs text-shuttle-gray-400">(240)</span>
                <svg
                  className="w-5 h-5 text-electric-lime-400"
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
                <span className="bg-electric-lime-400 text-gray-900 md:text-xs font-bold h-7 w-7 text-[10px] md:h-10 md:w-10 rounded-full flex justify-center items-center -ml-3">
                  2K+
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlueGridBackground>
  );
}
