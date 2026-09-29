import CoursesPageClient from "@/components/ui/courses/CoursesPageClient";
import { Suspense } from "react";

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <CoursesPageClient />
    </Suspense>
  );
}
