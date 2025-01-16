import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Community from "@/components/Community";
import Sponsors from "@/components/Sponsors";
import Judges from "@/components/Judges";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <About />
        <Community />
        <Sponsors />
        <Judges />
      </main>
      <Footer />
    </div>
  );
}