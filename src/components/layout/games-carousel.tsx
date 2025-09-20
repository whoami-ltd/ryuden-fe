import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Game {
  id: string;
  name: string;
  genre: string;
  backgroundImage: string;
  rating: number;
}

interface GamesCarouselProps {
  games: Game[];
  selectedGameId: string;
  onGameSelect: (gameId: string) => void;
}

export function GamesCarousel({ games, selectedGameId, onGameSelect }: GamesCarouselProps) {
  return (
    <div className="w-full bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        {/* Carousel Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-display text-gray-900">
            Featured Games
          </h2>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {games.map((game) => (
            <Button
              key={game.id}
              onClick={() => onGameSelect(game.id)}
              variant="ghost"
              className={`group relative overflow-hidden rounded-lg transition-all duration-300 p-0 h-auto ${
                selectedGameId === game.id
                  ? 'ring-2 ring-blue-500 ring-offset-2'
                  : 'hover:scale-105 hover:shadow-lg'
              }`}
            >
              {/* Game Image */}
              <div className="aspect-[3/4] w-full relative">
                <Image
                  src={game.backgroundImage}
                  alt={game.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Game Info Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-3">
                <div className="text-white">
                  <h3 className={`font-ui font-semibold text-sm mb-1 ${
                    selectedGameId === game.id ? 'text-blue-100' : ''
                  }`}>
                    {game.name}
                  </h3>
                  <p className="text-xs opacity-90">{game.genre}</p>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full">
                <span className="text-xs font-ui font-medium">{game.rating}/10</span>
              </div>
            </Button>
          ))}
        </div>

        {/* Selected Game Indicator */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600 font-ui">
            {games.find(game => game.id === selectedGameId)?.name} • {games.length} games available
          </span>
        </div>
      </div>
    </div>
  );
}
