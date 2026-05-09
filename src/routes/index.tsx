import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Services } from "@/components/site/Services";
import { Rentals } from "@/components/site/Rentals";
import { Process } from "@/components/site/Process";
import { Portfolio } from "@/components/site/Portfolio";
import { About } from "@/components/site/About";
import { Area } from "@/components/site/Area";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Rentals />
        <Process />
        <Portfolio />
        <About />
        <Area />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
