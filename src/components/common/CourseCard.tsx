import { Course } from "@/types";
import Image from "next/image";

interface CourseCardProps {
  course: Course;
}

const studentAvatars = [
  { id: "1", img: "/images/home-image/man1.png" },
  { id: "2", img: "/images/home-image/man2.png" },
  { id: "3", img: "/images/home-image/man3.png" },
  { id: "4", img: "/images/home-image/man4.png" },
];

export default function CourseCard({ course }: CourseCardProps) {
  const displayCount = Math.min(4, course.studentCount);

  return (
    <div className="group border border-shuttle-gray-200 rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:h-96 w-full p-4">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={course.thumbnail}
          alt={course.title}
          width={341}
          height={195}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
        />

        <div className="absolute bottom-4.5 left-3 right-3 flex flex-wrap gap-4">
          <span className="bg-[#F6F6F699] backdrop-blur-sm text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-medium text-black-700">
            {course.lessons} Lessons
          </span>
          <span className="bg-[#F6F6F699] backdrop-blur-sm text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-medium text-black-700">
            {course.duration}
          </span>
          <span className="bg-[#F6F6F699] backdrop-blur-sm text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-medium text-black-700">
            {course.comments} Comments
          </span>
        </div>
      </div>

      <div className="py-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-black font-semibold text-sm sm:text-xl leading-[120%]  font-poppins line-clamp-1 flex-1">
            {course.title}
          </h3>
          <div className="flex items-center shrink-0">
            <span className="text-sm md:text-lg font-normal text-black-700">
              {course.rating}
            </span>
            <svg
              className="w-5 h-5 text-shuttle-gray-200"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        <p className="text-black-700 text-xs mb-3">
          by{" "}
          <span className="text-persian-blue-800 font-normal leading-[160%]">
            {course.instructor}
          </span>
        </p>

        <div className="flex items-center justify-start mb-4 md:gap-3">
          <span className="inline-flex items-center gap-1.5 bg-shuttle-gray-50 text-shuttle-gray-700 text-xs px-3 py-1.5 rounded-full font-medium">
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            {course.level}
          </span>

          <div className="flex items-center">
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {studentAvatars.map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-white flex items-center justify-center`}
                  >
                    <Image
                      src={avatar?.img}
                      alt=""
                      height={32}
                      width={32}
                      className="rounded-full h-auto w-auto"
                    />
                  </div>
                ))}
              </div>
              <span className="bg-electric-lime-400 text-shuttle-gray-950 text-xs font-medium h-7 w-7 md:h-9 md:w-9 rounded-full flex justify-center items-center -ml-3">
                26+
              </span>
            </div>
          </div>
        </div>

        <p className="text-persian-blue-800 font-semibold text-base md:text-xl">
          ${course.price}
          <span className="text-black-700 text-[13px] font-normal leading-[160%]">
            /{course.priceType}
          </span>
        </p>
      </div>
    </div>
  );
}
