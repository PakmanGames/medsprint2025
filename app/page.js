import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Community from "@/components/Community";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <About />
        <Community />
      </main>
      <Footer />
    </div>
  );
}