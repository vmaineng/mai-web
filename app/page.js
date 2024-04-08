import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Presentations from "./components/Presentations";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#35455D]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <Banner />
        <About />
        <Projects />
        <Presentations /> 
      </div>
      <Footer />
    </main>
  );
}
