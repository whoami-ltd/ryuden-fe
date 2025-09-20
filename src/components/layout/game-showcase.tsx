import { Play, Star, Users, Target, Zap, Brain, Bookmark, Share2, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Game {
  id: string;
  name: string;
  rating: number;
  genre: string;
  description: string;
  backgroundImage: string;
  testimonials: {
    count: number;
    description: string;
  };
  community: {
    count: number;
    description: string;
  };
  features: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
}

const valorant: Game = {
  id: "valorant",
  name: "VALORANT",
  rating: 8.8,
  genre: "Tactical FPS",
  description:
    "A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities. Outplay, outthink, and outmaneuver your opponents in intense competitive matches.",
  backgroundImage:
    "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-4f0cdb8f0cb0d06ea289ed24b28819b7",
  testimonials: {
    count: 1247,
    description: "Players love our AI coaching"
  },
  community: {
    count: 89,
    description: "Active discussions"
  },
  features: [
    {
      title: "AI Coaching",
      description:
        "Real-time analysis of your gameplay with instant tips to improve your aim, positioning, and strategy.",
      icon: Brain,
    },
    {
      title: "Match Details",
      description:
        "Track all your matches with detailed statistics, performance metrics, and improvement insights.",
      icon: Target,
    },
    {
      title: "Stats",
      description:
        "Comprehensive analytics of your performance across agents, maps, and game modes.",
      icon: Zap,
    },
    {
      title: "Player Notes",
      description:
        "Save information about teammates, add to blacklist, or highlight good players for future reference.",
      icon: Users,
    },
    {
      title: "In-game Content",
      description:
        "Access skins, agents, maps, and other game content with detailed information and guides.",
      icon: Play,
    },
  ],
};

const eldenRing: Game = {
  id: "elden-ring",
  name: "ELDEN RING",
  rating: 9.5,
  genre: "Action RPG",
  description:
    "A vast fantasy world where you'll encounter fearsome enemies, forge your own path, and become the Elden Lord. Experience the ultimate in action RPG gameplay.",
  backgroundImage: "https://i.redd.it/pglcvsehiyjc1.jpeg",
  testimonials: {
    count: 2156,
    description: "Gamers trust our guides"
  },
  community: {
    count: 156,
    description: "Helpful community"
  },
  features: [
    {
      title: "Interactive Map",
      description:
        "Explore detailed maps with callouts, strategies, and tactical positions.",
      icon: Target,
    },
    {
      title: "Builds",
      description:
        "Optimize agent loadouts and weapon combinations for maximum effectiveness.",
      icon: Brain,
    },
    {
      title: "Lore",
      description:
        "Dive deep into Valorant's rich universe and character backstories.",
      icon: Users,
    },
    {
      title: "Items",
      description:
        "Master weapon stats, skins, and equipment for competitive advantage.",
      icon: Zap,
    },
    {
      title: "Quests",
      description:
        "Complete daily challenges and missions to unlock rewards and progress.",
      icon: Play,
    },
  ],
};

// Additional games for the carousel
const cyberpunk2077: Game = {
  id: "cyberpunk-2077",
  name: "CYBERPUNK 2077",
  rating: 8.2,
  genre: "Action RPG",
  description:
    "An open-world, action-adventure story set in the megalopolis of Night City, where you play as V, a mercenary outlaw going after a one-of-a-kind implant.",
  backgroundImage: "https://4kwallpapers.com/images/walls/thumbs_2t/20154.jpg",
  testimonials: {
    count: 1890,
    description: "Rave reviews from players"
  },
  community: {
    count: 124,
    description: "Expert discussions"
  },
  features: [
    {
      title: "Character Builds",
      description: "Optimize your V with different skill trees and cyberware combinations.",
      icon: Brain,
    },
    {
      title: "Night City Map",
      description: "Explore the vast open world with detailed locations and secrets.",
      icon: Target,
    },
    {
      title: "Story Choices",
      description: "Make impactful decisions that shape your story and ending.",
      icon: Users,
    },
    {
      title: "Combat Systems",
      description: "Master hacking, stealth, and combat mechanics.",
      icon: Zap,
    },
    {
      title: "Side Quests",
      description: "Discover rich side stories and characters throughout Night City.",
      icon: Play,
    },
  ],
};

const callOfDuty: Game = {
  id: "call-of-duty",
  name: "CALL OF DUTY",
  rating: 8.7,
  genre: "First-Person Shooter",
  description:
    "The world's premier first-person shooter franchise featuring intense multiplayer combat, cinematic campaigns, and competitive esports gameplay.",
  backgroundImage: "https://cdn.wallpapersafari.com/39/9/gYCWAU.jpg",
  testimonials: {
    count: 2891,
    description: "Pro players recommend us"
  },
  community: {
    count: 203,
    description: "Strategy discussions"
  },
  features: [
    {
      title: "Weapon Loadouts",
      description: "Master weapon attachments, perks, and killstreaks for optimal performance.",
      icon: Brain,
    },
    {
      title: "Map Strategies",
      description: "Learn spawn points, power positions, and tactical routes on each map.",
      icon: Target,
    },
    {
      title: "Team Coordination",
      description: "Coordinate with squadmates for objective control and team tactics.",
      icon: Users,
    },
    {
      title: "Ranked Play",
      description: "Climb the competitive ladder in CDL and ranked multiplayer.",
      icon: Zap,
    },
    {
      title: "Campaign Mode",
      description: "Experience cinematic single-player campaigns with immersive storytelling.",
      icon: Play,
    },
  ],
};

const leagueOfLegends: Game = {
  id: "league-of-legends",
  name: "LEAGUE OF LEGENDS",
  rating: 9.1,
  genre: "MOBA",
  description:
    "A multiplayer online battle arena game where teams of champions compete to destroy the enemy's Nexus while defending their own.",
  backgroundImage: "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-47eb328eac5ddd63ebd096ded7d0d5ab",
  testimonials: {
    count: 3456,
    description: "Top-rated by community"
  },
  community: {
    count: 289,
    description: "Active meta discussions"
  },
  features: [
    {
      title: "Champion Mastery",
      description: "Learn optimal builds, runes, and playstyles for each champion.",
      icon: Brain,
    },
    {
      title: "Map Control",
      description: "Master vision control, objective timing, and macro strategy.",
      icon: Target,
    },
    {
      title: "Team Composition",
      description: "Understand champion synergies and team fighting strategies.",
      icon: Users,
    },
    {
      title: "Ranked Climbing",
      description: "Advanced tactics for climbing the ranked ladder.",
      icon: Zap,
    },
    {
      title: "Meta Analysis",
      description: "Stay updated with the latest meta and patch changes.",
      icon: Play,
    },
  ],
};

const counterStrike: Game = {
  id: "counter-strike",
  name: "COUNTER-STRIKE 2",
  rating: 9.3,
  genre: "Tactical FPS",
  description:
    "The world's premier competitive FPS, featuring precise gunplay, tactical gameplay, and intense team-based matches.",
  backgroundImage: "https://preview.redd.it/counter-strike-2-wallpaper-1920x1080-v0-wfnfuq0b8jpa1.png?auto=webp&s=576a6b1f3114776d993cd91b8ad0354f15ab5de0",
  testimonials: {
    count: 4123,
    description: "Esports pros trust us"
  },
  community: {
    count: 345,
    description: "Tactical discussions"
  },
  features: [
    {
      title: "Aim Training",
      description: "Improve your aim with targeted exercises and drills.",
      icon: Brain,
    },
    {
      title: "Map Strategies",
      description: "Learn callouts, angles, and tactical positions on each map.",
      icon: Target,
    },
    {
      title: "Economy Management",
      description: "Master the buy system and team economy strategies.",
      icon: Users,
    },
    {
      title: "Grenade Lineups",
      description: "Perfect your utility usage with precise grenade throws.",
      icon: Zap,
    },
    {
      title: "Competitive Play",
      description: "Advanced strategies for ranked and tournament play.",
      icon: Play,
    },
  ],
};

// Export games array for the carousel
export const games = [valorant, eldenRing, cyberpunk2077, callOfDuty, leagueOfLegends, counterStrike];

function GameCard({ game }: { game: Game }) {
  return (
    <article className="w-full">
      {/* Featured Image */}
      <div className="relative h-96 w-full overflow-hidden mb-8">
        <Image
          src={game.backgroundImage}
          alt={game.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Article Content */}
      <div>
        {/* Article Header */}
        <header className="mb-8">
          {/* Game Genre Badge */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-ui font-medium rounded-full">
              {game.genre}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            {game.name}
          </h1>

          {/* Article Meta */}
          <div className="flex items-center gap-6 text-sm text-gray-600 mb-8 font-ui">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(game.rating / 2)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold text-gray-900">{game.rating}/10</span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-xl font-body leading-relaxed mb-8">
            {game.description}
          </p>

          {/* Features Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-display text-gray-900 mb-6">
              Key Features & Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {game.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-ui font-semibold text-gray-900 truncate">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Article Footer */}
        <footer className="pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Heart className="h-5 w-5 text-red-500" />
                <div>
                  <span className="text-sm font-semibold text-gray-900">{game.testimonials.count.toLocaleString()}</span>
                  <p className="text-xs text-gray-500">{game.testimonials.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MessageCircle className="h-5 w-5 text-blue-500" />
                <div>
                  <span className="text-sm font-semibold text-gray-900">{game.community.count.toLocaleString()}</span>
                  <p className="text-xs text-gray-500">{game.community.description}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Bookmark className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="primary" size="lg">
                <Zap className="h-4 w-4 mr-2" />
                Get Started
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}

interface GameShowcaseProps {
  selectedGameId?: string;
}

export function GameShowcase({ selectedGameId = "valorant" }: GameShowcaseProps) {
  const selectedGame = games.find(game => game.id === selectedGameId) || valorant;

  return (
    <section className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Selected Game Article */}
        <div className="space-y-16">
          <GameCard game={selectedGame} />
        </div>

        {/* Additional Content */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-display text-gray-900 mb-6">
            More Gaming Content Coming Soon
          </h3>
          <p className="text-gray-600 mb-8 font-body text-lg">
            We&apos;re constantly adding new game guides, AI coaching features, and community tools.
          </p>
          <Button variant="primary" size="xl">
            <Zap className="h-5 w-5 mr-3" />
            Explore All Games
          </Button>
        </div>
      </div>
    </section>
  );
}
