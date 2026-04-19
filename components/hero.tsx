"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#F8F5F0] flex flex-col items-center justify-center px-4 py-20"
    >
      {/* 3-column grid: left images | text | right images */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center gap-6 md:gap-10">

        {/* LEFT — 2 artworks stacked */}
        <div className="hidden md:flex flex-col gap-5 items-end">
          <div className="w-44 h-52 rounded-2xl overflow-hidden shadow-xl rotate-[-4deg] hover:rotate-0 transition-transform duration-300">
            <Image
              src="/hero-artwork-1.jpg"
              alt="Artwork 1"
              width={176}
              height={208}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-40 h-48 rounded-2xl overflow-hidden shadow-xl rotate-[3deg] hover:rotate-0 transition-transform duration-300">
            <Image
              src="/hero-artwork-2.jpg"
              alt="Artwork 2"
              width={160}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CENTER — text content */}
        <div className="flex flex-col items-center text-center gap-5">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Turn Your Memories into{" "}
            <span className="text-orange-500">Timeless Handcrafted Art</span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-md leading-relaxed">
            Art that speaks to your soul.
            <br />
            Handmade pencil and charcoal portraits crafted with emotion.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Link
              href="https://wa.me/919363131475?text=Hi%2C%20I%20would%20like%20to%20order%20a%20portrait."
              target="_blank"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-full shadow-md transition-colors duration-200"
            >
              Order on WhatsApp
            </Link>
            <Link
              href="#gallery"
              className="border border-gray-300 hover:border-gray-500 text-gray-700 font-semibold px-7 py-3 rounded-full transition-colors duration-200"
            >
              View Gallery
            </Link>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>Rated 4.0 by Happy Clients</span>
          </div>
        </div>

        {/* RIGHT — 2 artworks stacked */}
        <div className="hidden md:flex flex-col gap-5 items-start">
          <div className="w-44 h-52 rounded-2xl overflow-hidden shadow-xl rotate-[5deg] hover:rotate-0 transition-transform duration-300">
            <Image
              src="/hero-artwork-3.jpg"
              alt="Artwork 3"
              width={176}
              height={208}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-40 h-48 rounded-2xl overflow-hidden shadow-xl rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
            <Image
              src="/hero-artwork-4.jpg"
              alt="Artwork 4"
              width={160}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile: show 2 artworks in a row below text */}
      <div className="flex md:hidden gap-4 mt-8 justify-center">
        <div className="w-36 h-44 rounded-xl overflow-hidden shadow-lg rotate-[-3deg]">
          <Image
            src="/hero-artwork-1.jpg"
            alt="Artwork 1"
            width={144}
            height={176}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-36 h-44 rounded-xl overflow-hidden shadow-lg rotate-[3deg]">
          <Image
            src="/hero-artwork-3.jpg"
            alt="Artwork 3"
            width={144}
            height={176}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
