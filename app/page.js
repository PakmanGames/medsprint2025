import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}