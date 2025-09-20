import { Search, User, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-300/40 bg-white/95 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* App Name */}
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tight text-gray-800">
              <Link href="/">RyudenHub</Link>
            </span>
          </div>

          {/* Games Search */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="search"
                placeholder="Search games..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 transition-all duration-300 hover:border-gray-400"
              />
            </div>
          </div>

          {/* Sign In */}
          <div className="flex items-center space-x-6">
            <Button variant="outline" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span className="text-sm font-medium">Connect</span>
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
