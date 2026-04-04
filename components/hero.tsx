'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [floatingCards, setFloatingCards] = useState<number[]>([0, 1, 2, 3]);

  const artworkImages = [
    '/hero-artwork-1.jpg',
    '/hero-artwork-2.jpg',
    '/hero-artwork-3.jpg',
    '/hero-artwork-4.jpg',
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background floating cards */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingCards.map((idx) => (
          <div
            key={idx}
            className="absolute animate-float"
            style={{
              left: `${20 + idx * 18}%`,
              top: `${30 + (idx % 2) * 20}%`,
              animation: `float ${4 + idx}s ease-in-out infinite`,
              animationDelay: `${idx * 0.5}s`,
            }}
          >
            <div className="group relative w-32 h-40 md:w-40 md:h-52 rounded-2xl overflow-hidden soft-shadow-md hover:soft-shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <Image
                src={artworkImages[idx]}
                alt={`Artwork ${idx + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/0 group-hover:to-black/10 transition-all" />
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div className="space-y-6 md:space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-balance">
            Turn Your Memories into Timeless Handcrafted Art
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Art that speaks to your soul.<br className="hidden md:block" />
            Handmade pencil and charcoal portraits crafted with emotion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/919363131475?text=${encodeURIComponent('Hi, I would like to order a portrait. Here is my photo and details.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 md:px-10 md:py-4 bg-primary text-primary-foreground rounded-full font-light hover:bg-accent transition-all duration-300 hover:shadow-lg"
            >
              Order on WhatsApp
            </a>
            <a
              href="#gallery"
              className="px-8 py-3 md:px-10 md:py-4 border-2 border-foreground/20 text-foreground rounded-full font-light hover:border-foreground hover:bg-white/50 transition-all duration-300"
            >
              View Gallery
            </a>
          </div>

          {/* Trust line */}
          <div className="pt-6 md:pt-8">
            <p className="text-sm md:text-base text-foreground/60">
              ⭐ Rated 4.0 by Happy Clients
            </p>
          </div>
        </div>
      </div>

      {/* Floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(-2deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
