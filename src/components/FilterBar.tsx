'use client';

import React from 'react';
import { SpaceMood, CostTier } from '../types';
import { Search, Sparkles, BookOpen, Coffee, Wind, Feather, EyeOff } from 'lucide-react';

interface FilterBarProps {
  selectedMood: SpaceMood | 'all';
  onSelectMood: (mood: SpaceMood | 'all') => void;
  selectedCost: CostTier | 'all';
  onSelectCost: (cost: CostTier | 'all') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCity: string;
  onSelectCity: (city: string) => void;
  availableCities: string[];
}

const MOODS: { id: SpaceMood | 'all'; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'All Sanctuaries', icon: <Sparkles className="w-3.5 h-3.5" /> },
  { id: 'read', label: 'Solo Reading', icon: <BookOpen className="w-3.5 h-3.5" /> },
  { id: 'reflect', label: 'Quiet Reflection', icon: <Wind className="w-3.5 h-3.5" /> },
  { id: 'talk', label: 'Slow Conversation', icon: <Coffee className="w-3.5 h-3.5" /> },
  { id: 'create', label: 'Creative Flow', icon: <Feather className="w-3.5 h-3.5" /> },
  { id: 'unplug', label: 'Digital Detox', icon: <EyeOff className="w-3.5 h-3.5" /> },
];

export default function FilterBar({
  selectedMood,
  onSelectMood,
  selectedCost,
  onSelectCost,
  searchQuery,
  onSearchChange,
  selectedCity,
  onSelectCity,
  availableCities,
}: FilterBarProps) {
  return (
    <div className="py-8 space-y-6">
      {/* Top Search & City selector */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        {/* Search input */}
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="Search by neighborhood, transit, or ambiance..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs sm:text-sm bg-white border border-paper-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-sanctuary-leaf focus:border-sanctuary-leaf shadow-sm transition-all"
          />
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
          <button
            onClick={() => onSelectCity('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              selectedCity === 'all'
                ? 'bg-paper-900 text-paper-50 shadow-sm'
                : 'bg-paper-100 text-stone-600 hover:bg-paper-200 border border-paper-300'
            }`}
          >
            All Cities
          </button>
          {availableCities.map((city) => (
            <button
              key={city}
              onClick={() => onSelectCity(city)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedCity === city
                  ? 'bg-paper-900 text-paper-50 shadow-sm'
                  : 'bg-paper-100 text-stone-600 hover:bg-paper-200 border border-paper-300'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Mood/Intent Horizontal Filter Chips */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-paper-200 pt-5">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold mr-1">
            Intent:
          </span>
          {MOODS.map((mood) => {
            const isActive = selectedMood === mood.id;
            return (
              <button
                key={mood.id}
                onClick={() => onSelectMood(mood.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-sanctuary-leaf text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:bg-paper-100 border border-stone-200'
                }`}
              >
                {mood.icon}
                <span>{mood.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cost Filter */}
        <div className="flex items-center gap-1 bg-paper-100 p-1 rounded-full border border-paper-200">
          <button
            onClick={() => onSelectCost('all')}
            className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
              selectedCost === 'all' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Any Cost
          </button>
          <button
            onClick={() => onSelectCost('free')}
            className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
              selectedCost === 'free' ? 'bg-sanctuary-leaf text-white shadow-xs' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            ₹0 Free Only
          </button>
          <button
            onClick={() => onSelectCost('nominal')}
            className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
              selectedCost === 'nominal' ? 'bg-stone-800 text-white shadow-xs' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            &lt; ₹50
          </button>
        </div>
      </div>
    </div>
  );
}
