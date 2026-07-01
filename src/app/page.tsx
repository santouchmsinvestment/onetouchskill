import About from "@/components/About";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import WhyUs from "@/components/Whyus";

export default function Home() {
  return (
   <main className="min-h-screen bg-deep-green">
     <Navigation />
     <Hero title="Welcome to OneTouch Skills Development Foundation"
      subtitle="Helping Hands, Changing Lives." />
       <About />
       <Services />
       <WhyUs/>
    </main>
  );
}
