import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matheus Fideles — Software Engineer",
  description:
    "Matheus Fideles is a Backend Software Engineer building scalable, reliable systems with Java and Spring Boot.",
  metadataBase: new URL("https://matheusfideles.dev"),
  openGraph: {
    title: "Matheus Fideles — Software Engineer",
    description:
      "Backend Software Engineer building scalable, reliable systems with Java and Spring Boot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
