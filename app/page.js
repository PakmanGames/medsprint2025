import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Community from "@/components/Community";
import HowItWorks from "@/components/HowItWorks";
import Sponsors from "@/components/Sponsors";
import Judges from "@/components/Judges";
import Schedule from "@/components/Schedule";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <About />
        <Community />
        <HowItWorks />
        <Sponsors />
        <Judges />
        <Schedule />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}