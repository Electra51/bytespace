"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = pathname === "/login" || pathname === "/register";

  return (
    <>
      <Navbar />
      {children}
      {!isAuthRoute && <Footer />}
    </>
  );
}
