'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ThirdSpace } from '../types';
import { MapPin, Navigation, Compass, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

interface SpaceCardProps {
  space: ThirdSpace;
  onSelect: (space: ThirdSpace) => void;
  index: number;
}

export default function SpaceCard({ space, onSelect, index }: SpaceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      onClick={() => onSelect(space)}
      className="group cursor-pointer bg-white rounded-2xl border border-paper-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Mindful Thought Prompt Header */}
        <div className="bg-paper-100/90 border-b border-paper-200 px-4 py-2.5 flex items-start gap-2">
          <span className="text-amber-700 text-xs mt-0.5">✦</span>
          <p className="text-[12px] font-serif italic text-stone-700 line-clamp-1 group-hover:text-sanctuary-leaf transition-colors">
            &ldquo;{space.thoughtPrompt}&rdquo;
          </p>
        </div>

        {/* Space Image & Cost Pill */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-100">
          <img
            src={space.imageUrl}
            alt={space.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

          {/* Cost Badge */}
          <div className="absolute top-3 left-3 bg-paper-50/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-paper-900 border border-stone-200 shadow-xs flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-sanctuary-leaf"></span>
            {space.costDetail}
          </div>

          {/* Category Pill */}
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium text-white uppercase tracking-wider">
            {space.category === 'culture' ? 'Cultural Space' : space.category}
          </div>

          {/* City & Neighborhood on bottom of image */}
          <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs">
              <MapPin className="w-3.5 h-3.5 text-sanctuary-sand shrink-0" />
              <span className="font-medium truncate drop-shadow-sm">
                {space.neighborhood}, {space.city}
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5">
          <h3 className="font-serif text-lg sm:text-xl font-normal text-stone-900 group-hover:text-sanctuary-leaf transition-colors leading-snug">
            {space.name}
          </h3>

          <p className="mt-1.5 text-xs text-stone-600 line-clamp-2 font-light leading-relaxed">
            {space.tagline}
          </p>

          {/* Features Pills (Outdoor, 24/7 Access, Open Seating, etc.) */}
          {space.features && space.features.length > 0 && (
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {space.features.map((feature) => (
                <span
                  key={feature}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200/80"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          {/* Transit Proximity */}
          <div className="mt-3 flex items-center gap-1.5 text-[11px] text-stone-500 bg-paper-50 px-2.5 py-1.5 rounded-lg border border-paper-200">
            <Navigation className="w-3 h-3 text-sanctuary-sage shrink-0" />
            <span className="truncate">{space.metroTransit}</span>
          </div>

          {/* Mood / Intent tags */}
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {space.moods.map((m) => (
              <span
                key={m}
                className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-paper-100 text-stone-500 font-medium"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-4 py-3 bg-paper-50/70 border-t border-paper-200 flex items-center justify-between text-xs text-stone-500">
        <span className="font-serif italic text-stone-500">
          {space.amenities.quietZone ? 'Quiet zone observed' : 'Community atmosphere'}
        </span>
        <span className="text-sanctuary-leaf font-medium group-hover:underline flex items-center gap-1 text-[11px]">
          Enter Haven →
        </span>
      </div>
    </motion.div>
  );
}
