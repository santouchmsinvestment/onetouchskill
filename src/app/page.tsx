import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
   <main className="min-h-screen bg-deep-green">
     <Navigation />
     <Hero title="Welcome to OneTouch Skills Development Foundation"
      subtitle="Helping Hands, Changing Lives." />
       
    </main>
  );
}
