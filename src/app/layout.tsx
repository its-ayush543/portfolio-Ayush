import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Ayush | Junior Analyst & Developer",
  description:
    "Junior Analyst focused on API testing and system validation for fintech platforms, with full-stack (Next.js, TypeScript) and machine learning experience.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Ayush | Junior Analyst & Developer",
    description:
      "Junior Analyst focused on API testing and system validation for fintech platforms, with full-stack (Next.js, TypeScript) and machine learning experience.",
    url: "https://ayush-devx.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  authors: [{ name: "Ayush", url: "https://ayush-devx.vercel.app/" }],
  keywords: [
    "Ayush",
    "Junior Analyst",
    "QA Analyst",
    "Software Testing",
    "API Testing",
    "Postman",
    "SQL",
    "Fintech",
    "React",
    "Next.js",
    "TypeScript",
    "Machine Learning",
  ],
  creator: "Ayush",
  publisher: "Ayush",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body
        className={`${outfit.className} w-screen min-h-screen m-0 p-0 overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
