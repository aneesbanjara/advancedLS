import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/home/carousel/Footer";
import CustomFloatButton from "@/components/floats/CustomFloatbutton";
import NavigationMenu from "@/components/Navigation/NavigationMenu";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://www.altplnepal.com"),
  title: "Advanced Lifescience Technologies",
  description: "Advanced Lifescience Technologies Pvt. Ltd.",
  alternates: {
    canonical: "https://www.altplnepal.com/",
  },
  icons: {
    icon: "/AdvancedLifescienceLogoPNG.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-961K8Q4466"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-961K8Q4466');
        `,
          }}
        />
      </head> */}
      <body className={`${lato.variable} font-sans antialiased`}>
        <Header />
        <header className="sticky top-0 z-50">
          <NavigationMenu />
        </header>
        {children}
        <CustomFloatButton />
        <Footer />
      </body>
    </html>
  );
}
