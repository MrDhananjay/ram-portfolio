import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary selection:bg-accent selection:text-black">
      <Header />
      <Hero />
      <Projects />
      <ContactSection />
      <Footer />
    </main>
  );
}
