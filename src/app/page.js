import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Marq from "@/components/Marq";

export default function Home() {
  return (
    <div className="h-[95.9vh] w-screen bg-[#f7ffe7]">
      <main className="">
        <Marq
          text={"Grow Your Business Online"}
          text1={"Stand Out in the Digital World"}
          text2={"Websites That Work for You"}
        />

        <Head />
        <Banner />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
