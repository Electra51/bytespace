import CourseCard from "@/components/common/CourseCard";
import type { Course } from "@/types";

type CourseListProps = {
  query: string;
  filteredCourses: Course[];
  categoryOptions: Array<{ id: string; name: string }>;
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
};

const CourseList = ({
  query,
  filteredCourses,
  categoryOptions,
  activeCategory,
  onCategoryClick,
}: CourseListProps) => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-6 md:py-10 mt-13">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 text-sm text-shuttle-gray-500">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-shuttle-gray-200 px-3 py-1.5 font-medium text-shuttle-gray-700 hover:bg-shuttle-gray-50"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.9616 2H12.9616L7.9516 8.3L2.9616 2ZM0.211604 1.61C2.2316 4.2 5.9616 9 5.9616 9V15C5.9616 15.55 6.4116 16 6.9616 16H8.9616C9.5116 16 9.9616 15.55 9.9616 15V9C9.9616 9 13.6816 4.2 15.7016 1.61C16.2116 0.95 15.7416 0 14.9116 0L1.0016 0C0.171604 0 -0.298396 0.95 0.211604 1.61Z"
                fill="#242528"
              />
            </svg>
            Filter
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-shuttle-gray-200 px-3 py-1.5 font-medium text-shuttle-gray-700 hover:bg-shuttle-gray-50"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0L15 0V16H12V0ZM0 10H3V16H0L0 10ZM6 5H9V16H6V5Z"
                fill="#242528"
              />
            </svg>
            Level
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-shuttle-gray-200 px-3 py-1.5 font-medium text-shuttle-gray-700 hover:bg-shuttle-gray-50"
          >
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0L3.5 9H14.5L9 0ZM9 3.84L10.93 7H7.06L9 3.84ZM14.5 11C12.01 11 10 13.01 10 15.5C10 17.99 12.01 20 14.5 20C16.99 20 19 17.99 19 15.5C19 13.01 16.99 11 14.5 11ZM14.5 18C13.12 18 12 16.88 12 15.5C12 14.12 13.12 13 14.5 13C15.88 13 17 14.12 17 15.5C17 16.88 15.88 18 14.5 18ZM0 19.5H8V11.5H0L0 19.5ZM2 13.5H6V17.5H2V13.5Z"
                fill="#242528"
              />
            </svg>
            Category
          </button>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-shuttle-gray-200 px-3 py-1.5 font-medium text-shuttle-gray-700 hover:bg-shuttle-gray-50"
        >
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12H6V10H0L0 12ZM0 0L0 2H18V0L0 0ZM0 7H12V5H0L0 7Z"
              fill="#242528"
            />
          </svg>
          Most relevant
        </button>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-start gap-3">
        {categoryOptions.slice(0, 12).map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryClick(category.id)}
            className={`rounded-[20px] px-3 py-1.5 text-sm transition-colors ${
              activeCategory === category.id
                ? "bg-electric-lime-400 text-shuttle-gray-950"
                : "bg-shuttle-gray-50 text-shuttle-gray-700 hover:bg-shuttle-gray-50"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mt-10 rounded-t-4xl bg-white px-4 pb-10 pt-8 text-shuttle-gray-950 md:px-1">
        <div className="mb-8 flex items-center gap-2 text-sm text-shuttle-gray-500">
          <span className="font-medium text-shuttle-gray-950">
            Showing results
          </span>
          {query ? (
            <>
              <span>for</span>
              <span className="rounded-full bg-shuttle-gray-100 px-2 py-1 font-medium text-shuttle-gray-800">
                {query}
              </span>
            </>
          ) : null}
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-shuttle-gray-300 py-16 text-center">
            <p className="text-lg font-medium text-shuttle-gray-600">
              No courses found for your search.
            </p>
            <p className="mt-2 text-sm text-shuttle-gray-500">
              Try a different keyword or category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseList;
