import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Risk from "./components/Risk";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="top" className="bg-bg text-ink font-body min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Risk />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
