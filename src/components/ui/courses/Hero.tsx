import BlueGridBackground from "@/components/common/BlueGridBackground";
import type { FormEvent } from "react";

type HeroProps = {
  query: string;
  setQuery: (value: string) => void;
  onSearch: (event: FormEvent<HTMLFormElement>) => void;
};

const Hero = ({ query, setQuery, onSearch }: HeroProps) => {
  return (
    <BlueGridBackground>
      <div className="h-90 flex flex-col justify-end items-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-poppins md:text-[36px] font-semibold tracking-[-0.04em] text-shuttle-gray-50">
            Find Your Next Course
          </h1>
        </div>

        <form
          onSubmit={onSearch}
          className="flex md:flex-row flex-col items-center justify-center max-w-xl mx-auto mb-12 md:mb-16"
        >
          <div className="relative flex-1 py-3 px-6 w-full md:w-115.25">
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
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              className="w-full bg-white rounded-full pl-12 pr-2 py-3.5 text-sm md:text-lg text-shuttle-gray-950 placeholder-shuttle-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-lime-400/50"
            />
          </div>
          <button
            type="submit"
            className="bg-electric-lime-400 text-shuttle-gray-950 font-medium py-3 px-6 rounded-full text-sm md:text-lg hover:bg-electric-lime-300 transition-colors whitespace-nowrap w-36.75"
          >
            Courses
          </button>
        </form>
      </div>
    </BlueGridBackground>
  );
};

export default Hero;
