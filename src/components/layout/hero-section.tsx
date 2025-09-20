"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            We&apos;re building the gaming hub
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              we always wished existed
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stop jumping between different apps and websites. Everything you
            need for any game is right here, in one place.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" asChild>
            <a href="/about">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
