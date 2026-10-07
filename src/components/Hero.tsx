'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Coffee, BookOpen } from 'lucide-react';

interface HeroProps {
  totalSpaces: number;
  onOpenSerendipity: () => void;
}

export default function Hero({ totalSpaces, onOpenSerendipity }: HeroProps) {
  return (
    <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-14 border-b border-paper-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Subtle Concept Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-serif italic text-stone-600 bg-paper-100 border border-paper-300 mb-6"
        >
          <MapPin className="w-3.5 h-3.5 text-sanctuary-leaf" />
          <span>Bhubaneswar Sanctuary Guide • 1st: Home • 2nd: Work/College • 3rd: The Public Sanctuary</span>
        </motion.div>

        {/* Poetic Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-paper-950 font-normal tracking-tight leading-[1.15]"
        >
          In a city that asks you to spend to exist, here are places in Bhubaneswar where you can{' '}
          <span className="italic font-serif text-sanctuary-leaf underline decoration-sanctuary-sand underline-offset-8">
            simply be
          </span>
          .
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-stone-600 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Curated low-cost and zero-cost havens across Bhubaneswar—ancient lake ghats, botanical lakeside trails, quiet state library reading halls, bamboo groves, and breezy heritage hilltops designed for contemplation and connection.
        </motion.p>

        {/* Action bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-500"
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-paper-100/70 rounded-md border border-paper-200">
            <span className="font-semibold text-sanctuary-leaf">₹0</span>
            <span>Always Free or Nominal</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-paper-100/70 rounded-md border border-paper-200">
            <BookOpen className="w-3.5 h-3.5 text-sanctuary-terracotta" />
            <span>{totalSpaces} Bhubaneswar Sanctuaries</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-paper-100/70 rounded-md border border-paper-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Zero Commercial Pressure</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
