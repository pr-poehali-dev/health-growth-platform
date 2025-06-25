import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AIChat from "@/components/AIChat";
import Community from "@/components/Community";
import Calendar from "@/components/Calendar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <AIChat />
      <Community />
      <Calendar />
    </div>
  );
};

export default Index;
