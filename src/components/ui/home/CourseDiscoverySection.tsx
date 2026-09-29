"use client";

import CategoryChip from "@/components/common/CategoryChip";
import CourseCard from "@/components/common/CourseCard";
import { categories, courses, INITIAL_CHIPS } from "@/data";
import { useMemo, useState } from "react";

export default function CourseDiscoverySection() {
  const [activeCategory, setActiveCategory] = useState<string>("featured");
  const [showAllCategories, setShowAllCategories] = useState(false);

  const visibleCategories = showAllCategories
    ? categories
    : categories.slice(0, INITIAL_CHIPS);

  const filteredCourses = useMemo(() => {
    if (activeCategory === "featured") {
      return courses.filter((course) => course.isFeatured);
    }
    return courses.filter((course) => course.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-16 md:py-18 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-[2.8rem] font-semibold font-poppins text-shuttle-gray-950 leading-[120%] mb-4">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="text-shuttle-gray-400 text-sm sm:text-base leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 md:gap-4 mb-12 md:mb-19.25 max-w-6xl mx-auto">
          {visibleCategories.map((category) => (
            <CategoryChip
              key={category.id}
              name={category.name}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}

          {/* More / Less Button */}
          {categories.length > INITIAL_CHIPS && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-persian-blue-800 hover:bg-shuttle-gray-50 transition-colors cursor-pointer"
            >
              {showAllCategories ? "− Less" : "+ More"}
            </button>
          )}
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-11">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-shuttle-gray-400 text-lg">
              No courses found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
