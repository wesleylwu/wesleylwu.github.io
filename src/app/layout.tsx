import "./globals.css";
import { Chakra_Petch, Noto_Sans_HK, Share_Tech_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ReactQueryClientProvider } from "@/utils/react-query";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra",
});

const noto = Noto_Sans_HK({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto",
});

const share = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-share",
});

export const metadata = {
  title: "Wesley Wu's Portfolio",
  description:
    "A website showcasing Wesley Wu's experiences, projects, and skills.",
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
      <body className="font-noto antialiased">
        <NavBar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
