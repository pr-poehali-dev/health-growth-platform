import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import AIChat from "@/components/AIChat";
import Community from "@/components/Community";
import Calendar from "@/components/Calendar";

function App() {
  return (
    <div className="min-h-screen bg-wellness-neutral font-lato">
      <Hero />
      <Features />
      <Services />
      <AIChat />
      <Community />
      <Calendar />
    </div>
  );
}

export default App;
