import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/layout/hero-section";
import { GamesSection } from "@/components/layout/games-section";

export default function Home() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
      <Header />
      <main className="h-full w-full">
        <HeroSection />
        <GamesSection />
      </main>
    </div>
  );
}
