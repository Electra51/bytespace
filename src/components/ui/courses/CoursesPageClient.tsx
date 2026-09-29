"use client";

import CourseList from "@/components/ui/courses/CourseList";
import Hero from "@/components/ui/courses/Hero";
import { courses, tags } from "@/data";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState, type FormEvent } from "react";

const categoryOptions = [{ id: "all", name: "All" }, ...tags];

export default function CoursesPageClient() {
  const router = useRouter();
  const params = useSearchParams();
  const initialQuery = params?.get("query") ?? "";
  const initialCategory = params?.get("category") ?? "all";
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === "all" || activeCategory === "featured"
          ? true
          : course.category === activeCategory;

      const matchesQuery =
        !normalizedQuery ||
        [
          course.title,
          course.instructor,
          course.category,
          course.level,
          course.duration,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextParams = new URLSearchParams();

    if (query.trim()) nextParams.set("query", query.trim());
    if (activeCategory && activeCategory !== "all") {
      nextParams.set("category", activeCategory);
    }

    const queryString = nextParams.toString();
    router.push(queryString ? `/courses?${queryString}` : "/courses");
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    const nextParams = new URLSearchParams();

    if (query.trim()) nextParams.set("query", query.trim());
    if (categoryId && categoryId !== "all") {
      nextParams.set("category", categoryId);
    }

    const queryString = nextParams.toString();
    router.push(queryString ? `/courses?${queryString}` : "/courses");
  };

  return (
    <div>
      <Hero query={query} setQuery={setQuery} onSearch={handleSearch} />
      <CourseList
        query={query}
        filteredCourses={filteredCourses}
        categoryOptions={categoryOptions}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
    </div>
  );
}
