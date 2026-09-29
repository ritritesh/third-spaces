'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThirdSpace } from '../types';
import {
  X,
  MapPin,
  Clock,
  Navigation,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Trees,
  Compass,
  Volume2
} from 'lucide-react';

interface SpaceDetailModalProps {
  space: ThirdSpace | null;
  onClose: () => void;
}

export default function SpaceDetailModal({ space, onClose }: SpaceDetailModalProps) {
  if (!space) return null;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${space.name} ${space.address}`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm">
        {/* Backdrop click to close */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-paper-50 rounded-2xl sm:rounded-3xl shadow-2xl border border-paper-300 overflow-hidden z-10 my-8 max-h-[92vh] flex flex-col"
        >
          {/* Header Image */}
          <div className="relative h-64 sm:h-72 w-full bg-stone-900 shrink-0">
            <img
              src={space.imageUrl}
              alt={space.name}
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/30" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all backdrop-blur-md"
              title="Close sanctuary modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badges on Image */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-paper-50/95 text-stone-900 shadow-sm border border-stone-200">
                {space.costDetail}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/50 text-white backdrop-blur-md uppercase tracking-wider">
                {space.category}
              </span>
            </div>

            {/* Title & Location on Image Bottom */}
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal leading-tight drop-shadow-md">
                {space.name}
              </h2>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-stone-200 mt-1">
                <MapPin className="w-4 h-4 text-sanctuary-sand shrink-0" />
                <span>{space.address}</span>
              </div>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
            {/* Thought Prompt Banner */}
            <div className="bg-sanctuary-mist/70 border border-sanctuary-sage/20 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
              <span className="text-xl text-sanctuary-leaf">✦</span>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-sanctuary-leaf">
                  Reflection Prompt For Your Visit
                </span>
                <p className="mt-1 font-serif italic text-base sm:text-lg text-stone-800 leading-snug">
                  &ldquo;{space.thoughtPrompt}&rdquo;
                </p>
              </div>
            </div>

            {/* Description & Atmosphere */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-400">About this haven</h4>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed font-light">
                {space.description}
              </p>
              <div className="mt-3 p-3 bg-paper-100 rounded-xl border border-paper-200 text-xs text-stone-600 italic font-serif">
                <span className="font-sans font-semibold not-italic text-stone-700 mr-1.5">Atmosphere:</span>
                {space.atmosphere}
              </div>
            </div>

            {/* Transit and Best Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-3.5 bg-white rounded-xl border border-paper-200 flex items-start gap-3">
                <Navigation className="w-4 h-4 text-sanctuary-leaf shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">Public Transit</div>
                  <div className="text-xs text-stone-700 font-medium mt-0.5">{space.metroTransit}</div>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-paper-200 flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">Best Time To Visit</div>
                  <div className="text-xs text-stone-700 font-medium mt-0.5">{space.bestTimeToVisit}</div>
                </div>
              </div>
            </div>

            {/* Amenities & Practical Reality (Crucial for students and visitors) */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-400 mb-2.5">
                Practical Amenities
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                <div className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                  space.amenities.restrooms ? 'bg-white border-paper-200 text-stone-700' : 'bg-stone-50 border-stone-200 text-stone-400'
                }`}>
                  <CheckCircle2 className={`w-3.5 h-3.5 ${space.amenities.restrooms ? 'text-emerald-600' : 'text-stone-300'}`} />
                  <span>Clean Washrooms</span>
                </div>

                <div className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                  space.amenities.drinkingWater ? 'bg-white border-paper-200 text-stone-700' : 'bg-stone-50 border-stone-200 text-stone-400'
                }`}>
                  <CheckCircle2 className={`w-3.5 h-3.5 ${space.amenities.drinkingWater ? 'text-emerald-600' : 'text-stone-300'}`} />
                  <span>Drinking Water</span>
                </div>

                <div className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                  space.amenities.treeCanopy ? 'bg-white border-paper-200 text-stone-700' : 'bg-stone-50 border-stone-200 text-stone-400'
                }`}>
                  <Trees className={`w-3.5 h-3.5 ${space.amenities.treeCanopy ? 'text-emerald-600' : 'text-stone-300'}`} />
                  <span>Tree Canopy / Shade</span>
                </div>

                <div className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                  space.amenities.seating ? 'bg-white border-paper-200 text-stone-700' : 'bg-stone-50 border-stone-200 text-stone-400'
                }`}>
                  <CheckCircle2 className={`w-3.5 h-3.5 ${space.amenities.seating ? 'text-emerald-600' : 'text-stone-300'}`} />
                  <span>Free Public Benches</span>
                </div>

                <div className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                  space.amenities.quietZone ? 'bg-white border-paper-200 text-stone-700' : 'bg-stone-50 border-stone-200 text-stone-400'
                }`}>
                  <Volume2 className={`w-3.5 h-3.5 ${space.amenities.quietZone ? 'text-emerald-600' : 'text-stone-300'}`} />
                  <span>Quiet Reading Vibe</span>
                </div>

                <div className="p-2.5 rounded-lg border bg-white border-paper-200 text-stone-700 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-sanctuary-leaf" />
                  <span className="truncate">{space.amenities.womenSafeScore.split(' ')[0]} Safety</span>
                </div>
              </div>
            </div>

            {/* Sanctuary Etiquette & Leave No Trace */}
            <div className="bg-amber-50/50 border border-amber-200/60 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Sanctuary Etiquette</span>
              </div>
              <ul className="mt-2 space-y-1 text-xs text-stone-600">
                {space.etiquette.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-700 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-5 bg-paper-100 border-t border-paper-200 flex items-center justify-between gap-3 shrink-0">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
            >
              Back to List
            </button>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-sanctuary-leaf text-white hover:bg-emerald-900 transition-all shadow-sm"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
