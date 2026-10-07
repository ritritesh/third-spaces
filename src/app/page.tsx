'use client';

import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FilterBar from '../components/FilterBar';
import SpaceCard from '../components/SpaceCard';
import SpaceDetailModal from '../components/SpaceDetailModal';
import SerendipityModal from '../components/SerendipityModal';
import SubmitSpaceModal from '../components/SubmitSpaceModal';
import { INITIAL_SPACES } from '../data/spaces';
import { ThirdSpace, SpaceMood, SpaceCategory, CostTier } from '../types';
import { Compass, Sparkles, Heart, Trees, BookOpen, Coffee, Feather } from 'lucide-react';

export default function Home() {
  const [spaces, setSpaces] = useState<ThirdSpace[]>(INITIAL_SPACES);
  const [selectedCategory, setSelectedCategory] = useState<SpaceCategory | 'all'>('all');
  const [selectedMood, setSelectedMood] = useState<SpaceMood | 'all'>('all');
  const [selectedCost, setSelectedCost] = useState<CostTier | 'all'>('all');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [activeSpaceModal, setActiveSpaceModal] = useState<ThirdSpace | null>(null);
  const [isSerendipityOpen, setIsSerendipityOpen] = useState(false);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);

  // Available unique neighborhoods in Bhubaneswar
  const availableNeighborhoods = useMemo(() => {
    return Array.from(new Set(spaces.map((s) => s.neighborhood)));
  }, [spaces]);

  // Filtered spaces
  const filteredSpaces = useMemo(() => {
    return spaces.filter((space) => {
      // Category filter (Park, Library, Cultural Space)
      if (selectedCategory !== 'all' && space.category !== selectedCategory) {
        return false;
      }

      // Mood filter
      if (selectedMood !== 'all' && !space.moods.includes(selectedMood)) {
        return false;
      }

      // Cost filter
      if (selectedCost !== 'all') {
        if (selectedCost === 'free' && space.costTier !== 'free') return false;
        if (selectedCost === 'nominal' && space.costTier === 'affordable') return false;
      }

      // Neighborhood / Locality filter
      if (selectedNeighborhood !== 'all' && space.neighborhood !== selectedNeighborhood) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = space.name.toLowerCase().includes(q);
        const matchesNeighborhood = space.neighborhood.toLowerCase().includes(q);
        const matchesTransit = space.metroTransit.toLowerCase().includes(q);
        const matchesAtmosphere = space.atmosphere.toLowerCase().includes(q);
        const matchesPrompt = space.thoughtPrompt.toLowerCase().includes(q);
        const matchesCategory = space.category.toLowerCase().includes(q);
        const matchesFeatures = space.features?.some((f) => f.toLowerCase().includes(q));
        return (
          matchesName ||
          matchesNeighborhood ||
          matchesTransit ||
          matchesAtmosphere ||
          matchesPrompt ||
          matchesCategory ||
          matchesFeatures
        );
      }

      return true;
    });
  }, [spaces, selectedCategory, selectedMood, selectedCost, selectedNeighborhood, searchQuery]);

  const handleAddSpace = (newSpace: ThirdSpace) => {
    setSpaces((prev) => [newSpace, ...prev]);
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedMood !== 'all' ||
    selectedCost !== 'all' ||
    selectedNeighborhood !== 'all' ||
    searchQuery.trim() !== '';

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedMood('all');
    setSelectedCost('all');
    setSelectedNeighborhood('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navigation Bar */}
      <Header
        onOpenSerendipity={() => setIsSerendipityOpen(true)}
        onOpenSubmit={() => setIsSubmitOpen(true)}
      />

      <main className="flex-1">
        {/* Poetic Hero Section */}
        <Hero
          totalSpaces={spaces.length}
          onOpenSerendipity={() => setIsSerendipityOpen(true)}
        />

        {/* Main Content Explorer */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          {/* Filters */}
          <FilterBar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedMood={selectedMood}
            onSelectMood={setSelectedMood}
            selectedCost={selectedCost}
            onSelectCost={setSelectedCost}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedNeighborhood={selectedNeighborhood}
            onSelectNeighborhood={setSelectedNeighborhood}
            availableNeighborhoods={availableNeighborhoods}
          />

          {/* Results Count & Subtitle */}
          <div className="flex items-center justify-between py-2 mb-6 text-xs text-stone-500 border-b border-paper-200">
            <span>
              Showing <strong className="text-stone-800">{filteredSpaces.length}</strong>{' '}
              {filteredSpaces.length === 1 ? 'peaceful spot' : 'peaceful spots'} in Bhubaneswar
            </span>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="text-sanctuary-leaf hover:underline font-medium"
              >
                Reset all filters
              </button>
            )}
          </div>

          {/* Spaces Grid */}
          {filteredSpaces.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredSpaces.map((space, idx) => (
                <SpaceCard
                  key={space.id}
                  space={space}
                  index={idx}
                  onSelect={(s) => setActiveSpaceModal(s)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/70 rounded-3xl border border-dashed border-paper-300 p-8 space-y-4">
              <Compass className="w-10 h-10 text-stone-400 mx-auto" />
              <h3 className="font-serif text-xl text-stone-800">No sanctuaries match this exact combination</h3>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Try loosening your filters, or share an unexplored haven in Bhubaneswar with fellow seekers.
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 rounded-full text-xs font-medium bg-paper-100 hover:bg-paper-200 text-stone-700 border border-stone-300"
                >
                  Clear Filters
                </button>
                <button
                  onClick={() => setIsSubmitOpen(true)}
                  className="px-4 py-2 rounded-full text-xs font-medium bg-sanctuary-leaf text-white hover:bg-emerald-900"
                >
                  Share A Bhubaneswar Spot
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Mindful Editorial Footer */}
      <footer className="border-t border-paper-200 bg-paper-100/80 py-12 text-stone-600 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-serif text-base text-stone-900 font-semibold mb-2">
              Third Spaces · Bhubaneswar (ତୃତୀୟ ସ୍ଥଳ)
            </div>
            <p className="text-stone-500 leading-relaxed font-light">
              An open-source directory dedicated to preserving and championing free public life in Bhubaneswar. Built for students, thinkers, and seekers who believe contemplation shouldn&apos;t require an admission fee.
            </p>
          </div>

          <div>
            <div className="font-serif text-sm text-stone-900 font-semibold mb-2">
              The Sanctuary Code
            </div>
            <ul className="space-y-1.5 text-stone-500">
              <li>• Leave each stone, tree, and bench as you found it.</li>
              <li>• Preserve natural silence; wear earphones if listening to audio.</li>
              <li>• Welcome the stranger; share the shade.</li>
            </ul>
          </div>

          <div>
            <div className="font-serif text-sm text-stone-900 font-semibold mb-2">
              B.Tech Capstone & Directory
            </div>
            <p className="text-stone-500 leading-relaxed font-light mb-3">
              Built with Next.js, Tailwind CSS, Framer Motion, and Web Audio API. Curated specifically for Bhubaneswar.
            </p>
            <button
              onClick={() => setIsSubmitOpen(true)}
              className="inline-flex items-center gap-1.5 text-sanctuary-leaf font-medium hover:underline"
            >
              <Feather className="w-3.5 h-3.5" />
              <span>Contribute a hidden Bhubaneswar haven →</span>
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 mt-8 border-t border-paper-200/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-2">
          <span>&copy; {new Date().getFullYear()} Third Spaces Bhubaneswar · All public havens belong to the people</span>
          <span>Designed with stillness in mind</span>
        </div>
      </footer>

      {/* Modals */}
      <SpaceDetailModal
        space={activeSpaceModal}
        onClose={() => setActiveSpaceModal(null)}
      />

      <SerendipityModal
        isOpen={isSerendipityOpen}
        onClose={() => setIsSerendipityOpen(false)}
        spaces={spaces}
        onSelectSpace={(s) => setActiveSpaceModal(s)}
      />

      <SubmitSpaceModal
        isOpen={isSubmitOpen}
        onClose={() => setIsSubmitOpen(false)}
        onAddSpace={handleAddSpace}
      />
    </div>
  );
}
