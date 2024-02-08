import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
    <div class="container mx-auto px-12 py-4">
    <Banner />
    </div>
    </main>
  );
}
