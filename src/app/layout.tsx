import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Poppins — from Google Fonts
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Satoshi — local font (from Fontshare)
const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/satoshi/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace | Learn, Create & Grow",
  description:
    "Discover courses, build new skills, and learn from expert creators with ByteSpace.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-satoshi">{children}</body>
    </html>
  );
}
