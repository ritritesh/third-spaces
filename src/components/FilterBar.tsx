'use client';

import React from 'react';
import { SpaceMood, SpaceCategory, CostTier } from '../types';
import { Search, Sparkles, BookOpen, Coffee, Wind, Feather, EyeOff, MapPin, Trees, Building2, Palette } from 'lucide-react';

interface FilterBarProps {
  selectedCategory: SpaceCategory | 'all';
  onSelectCategory: (category: SpaceCategory | 'all') => void;
  selectedMood: SpaceMood | 'all';
  onSelectMood: (mood: SpaceMood | 'all') => void;
  selectedCost: CostTier | 'all';
  onSelectCost: (cost: CostTier | 'all') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedNeighborhood: string;
  onSelectNeighborhood: (neighborhood: string) => void;
  availableNeighborhoods: string[];
}

const CATEGORIES: { id: SpaceCategory | 'all'; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'All Spaces', icon: <Sparkles className="w-3.5 h-3.5" /> },
  { id: 'park', label: 'Parks & Gardens', icon: <Trees className="w-3.5 h-3.5" /> },
  { id: 'library', label: 'Libraries', icon: <BookOpen className="w-3.5 h-3.5" /> },
  { id: 'culture', label: 'Cultural Spaces', icon: <Palette className="w-3.5 h-3.5" /> },
];

const MOODS: { id: SpaceMood | 'all'; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'All Moods', icon: <Sparkles className="w-3.5 h-3.5" /> },
  { id: 'read', label: 'Solo Reading', icon: <BookOpen className="w-3.5 h-3.5" /> },
  { id: 'reflect', label: 'Quiet Reflection', icon: <Wind className="w-3.5 h-3.5" /> },
  { id: 'talk', label: 'Slow Conversation', icon: <Coffee className="w-3.5 h-3.5" /> },
  { id: 'create', label: 'Creative Flow', icon: <Feather className="w-3.5 h-3.5" /> },
  { id: 'unplug', label: 'Digital Detox', icon: <EyeOff className="w-3.5 h-3.5" /> },
];

export default function FilterBar({
  selectedCategory,
  onSelectCategory,
  selectedMood,
  onSelectMood,
  selectedCost,
  onSelectCost,
  searchQuery,
  onSearchChange,
  selectedNeighborhood,
  onSelectNeighborhood,
  availableNeighborhoods,
}: FilterBarProps) {
  return (
    <div className="py-8 space-y-5">
      {/* Search Bar + City Badge & Type Selector */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Search input with City Badge */}
        <div className="flex items-center gap-2 w-full md:max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search library, park, 24/7 access, neighborhood..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs sm:text-sm bg-white border border-paper-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-sanctuary-leaf focus:border-sanctuary-leaf shadow-2xs transition-all"
            />
          </div>

          <div
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-emerald-50 text-sanctuary-leaf border border-emerald-200/80 text-xs font-medium whitespace-nowrap shadow-2xs"
            title="All sanctuaries curated in Bhubaneswar"
          >
            <MapPin className="w-3.5 h-3.5 text-sanctuary-leaf shrink-0" />
            <span>Bhubaneswar</span>
          </div>
        </div>

        {/* Category Pills: All Spaces / Parks / Libraries / Cultural Spaces */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-sanctuary-leaf text-white shadow-sm'
                    : 'bg-paper-100 text-stone-600 hover:bg-paper-200 border border-paper-300'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Neighborhood / Locality Filter Horizontal Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-t border-paper-200/80 pt-4">
        <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold mr-1.5 shrink-0">
          Area:
        </span>
        <button
          onClick={() => onSelectNeighborhood('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
            selectedNeighborhood === 'all'
              ? 'bg-paper-900 text-paper-50 shadow-sm'
              : 'bg-white text-stone-600 hover:bg-paper-100 border border-paper-300'
          }`}
        >
          All Localities
        </button>
        {availableNeighborhoods.map((neighborhood) => (
          <button
            key={neighborhood}
            onClick={() => onSelectNeighborhood(neighborhood)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              selectedNeighborhood === neighborhood
                ? 'bg-paper-900 text-paper-50 shadow-sm'
                : 'bg-white text-stone-600 hover:bg-paper-100 border border-paper-300'
            }`}
          >
            {neighborhood}
          </button>
        ))}
      </div>

      {/* Mood/Intent & Cost Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-paper-200/80 pt-4">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold mr-1">
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
                    ? 'bg-stone-800 text-white shadow-sm'
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
              selectedCost === 'all' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Any Cost
          </button>
          <button
            onClick={() => onSelectCost('free')}
            className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
              selectedCost === 'free' ? 'bg-sanctuary-leaf text-white shadow-2xs' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            ₹0 Free
          </button>
          <button
            onClick={() => onSelectCost('nominal')}
            className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
              selectedCost === 'nominal' ? 'bg-stone-800 text-white shadow-2xs' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Nominal Fee
          </button>
        </div>
      </div>
    </div>
  );
}
