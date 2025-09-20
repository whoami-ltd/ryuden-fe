"use client";

import { useState } from "react";
import { GamesCarousel } from "./games-carousel";
import { GameShowcase, games } from "./game-showcase";

export function GamesSection() {
  const [selectedGameId, setSelectedGameId] = useState("valorant");

  const handleGameSelect = (gameId: string) => {
    setSelectedGameId(gameId);
  };

  return (
    <div className="w-full">
      {/* Games Carousel */}
      <GamesCarousel
        games={games}
        selectedGameId={selectedGameId}
        onGameSelect={handleGameSelect}
      />
      
      {/* Game Showcase */}
      <GameShowcase selectedGameId={selectedGameId} />
    </div>
  );
}
