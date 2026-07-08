import "./globals.css";
import { Crimson_Pro, DM_Sans, JetBrains_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ReactQueryClientProvider } from "@/utils/react-query";

const chakra = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-chakra",
});

const noto = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto",
});

const share = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-share",
});

export const metadata = {
  title: "Wesley Wu's Portfolio",
  description:
    "A website showcasing Wesley Wu's experiences, projects, and skills.",
  icons: {
    icon: "/favicon.ico",
  },
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`${chakra.variable} ${noto.variable} ${share.variable}`}
    >
      <body className="font-noto min-h-screen bg-[linear-gradient(to_bottom,#1a1040_0%,#080818_4%,#080818_85%,#1a1040_100%)] text-white antialiased">
        <NavBar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
