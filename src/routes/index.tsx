import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Trainers } from "@/components/site/Trainers";
import { Transformations } from "@/components/site/Transformations";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { BMI } from "@/components/site/BMI";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ferro Fitness Erode | Premium Gym & Personal Training" },
      { name: "description", content: "Ferro Fitness Erode — Premium gym with expert trainers, personal training, weight loss & muscle gain programs. Book your free trial today." },
      { property: "og:title", content: "Ferro Fitness Erode | Premium Gym" },
      { property: "og:description", content: "Erode's premium fitness destination. World-class equipment, certified trainers, real results." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Trainers />
        <Transformations />
        <Pricing />
        <Testimonials />
        <BMI />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
