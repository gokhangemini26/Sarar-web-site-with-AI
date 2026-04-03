import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const teachers = localFont({
  src: [
    { path: "../../public/fonts/teachers-400.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/teachers-500.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/teachers-600.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/teachers-700.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/teachers-800.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-teachers",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Erkek, Kadın ve Ev tekstilinde Sarar Kalitesi - SARAR",
  description: "Sarar resmi web sitesi. Erkek, kadın ve ev tekstili koleksiyonlarını keşfedin.",
  icons: { icon: "/seo/sarar-fav-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr-TR" className={`h-full ${teachers.variable}`}>
      <body className="min-h-full bg-white text-[#373738]">
        {children}
      </body>
    </html>
  );
}
