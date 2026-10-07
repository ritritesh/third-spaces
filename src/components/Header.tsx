'use client';

import React from 'react';
import AmbientAudio from './AmbientAudio';
import { Compass, Plus, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenSerendipity: () => void;
  onOpenSubmit: () => void;
}

export default function Header({ onOpenSerendipity, onOpenSubmit }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper-50/85 border-b border-paper-200 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo and Concept */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-sanctuary-leaf text-white flex items-center justify-center font-serif text-sm font-semibold shadow-sm">
            3
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif tracking-widest uppercase text-sm sm:text-base font-bold text-paper-900">
                Third Spaces
              </span>
              <span className="text-[10px] uppercase tracking-wider bg-sanctuary-mist text-sanctuary-leaf px-2 py-0.5 rounded-full font-medium hidden sm:inline-block">
                Bhubaneswar Edition
              </span>
            </div>
            <p className="text-[11px] text-stone-500 font-light hidden md:block">
              Sanctuaries across Bhubaneswar to think, read, and converse without paying to exist.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <AmbientAudio />

          <button
            onClick={onOpenSerendipity}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-paper-100 hover:bg-paper-200 text-stone-800 border border-paper-300 transition-all hover:border-sanctuary-leaf"
            title="Random sanctuary suggestion in Bhubaneswar"
          >
            <Compass className="w-3.5 h-3.5 text-sanctuary-leaf animate-spin-slow" />
            <span className="hidden sm:inline">Surprise Me</span>
          </button>

          <button
            onClick={onOpenSubmit}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-sanctuary-leaf text-white hover:bg-emerald-900 transition-all shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Share a Space</span>
          </button>
        </div>
      </div>
    </header>
  );
}
