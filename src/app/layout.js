import "./globals.css";
import Footer from "@/components/Footer";
import { Poppins, Lora } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Get A WebSite</title>
      </head>
      <body className={`${poppins.variable} ${lora.variable} antialiased`}>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
