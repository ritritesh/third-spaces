'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThirdSpace, SpaceCategory, SpaceMood, CostTier } from '../types';
import { X, Plus, Sparkles, CheckCircle2 } from 'lucide-react';

interface SubmitSpaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSpace: (newSpace: ThirdSpace) => void;
}

export default function SubmitSpaceModal({
  isOpen,
  onClose,
  onAddSpace,
}: SubmitSpaceModalProps) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState<SpaceCategory>('park');
  const [mood, setMood] = useState<SpaceMood>('read');
  const [costTier, setCostTier] = useState<CostTier>('free');
  const [costDetail, setCostDetail] = useState('₹0 (Free Public Space)');
  const [metroTransit, setMetroTransit] = useState('');
  const [thoughtPrompt, setThoughtPrompt] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !city || !thoughtPrompt) return;

    const newSpace: ThirdSpace = {
      id: `custom-${Date.now()}`,
      name,
      tagline: description.slice(0, 90) || 'A tranquil community sanctuary discovered by a local explorer.',
      category,
      moods: [mood, 'unplug'],
      costTier,
      costDetail: costDetail || (costTier === 'free' ? '₹0 Free' : 'Under ₹50'),
      city,
      neighborhood: neighborhood || city,
      address: address || `${neighborhood}, ${city}`,
      metroTransit: metroTransit || 'Local transit / walking proximity',
      bestTimeToVisit: 'Early morning or golden hour before dusk',
      thoughtPrompt,
      imageUrl:
        imageUrl ||
        'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80',
      description: description || 'A quiet, unhurried space to read, converse, or breathe away from commercial noise.',
      atmosphere: 'Peaceful, unhurried, welcoming.',
      amenities: {
        restrooms: true,
        drinkingWater: true,
        seating: true,
        treeCanopy: true,
        quietZone: true,
        womenSafeScore: 'Community Verified',
      },
      etiquette: [
        'Preserve the peace of fellow visitors',
        'Leave no garbage behind',
        'Keep phones on silent',
      ],
      coordinates: { lat: 20.5937, lng: 78.9629 },
    };

    onAddSpace(newSpace);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      // Reset form
      setName('');
      setCity('');
      setNeighborhood('');
      setThoughtPrompt('');
      setDescription('');
    }, 1800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-xl bg-paper-50 rounded-3xl p-6 sm:p-8 shadow-2xl border border-paper-300 z-10 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
              <h3 className="font-serif text-2xl text-stone-900">Sanctuary Added</h3>
              <p className="text-xs text-stone-600 max-w-xs mx-auto">
                Thank you for contributing a quiet haven. It is now live on your directory for other seekers.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-sanctuary-leaf">
                  Community Contribution
                </span>
                <h3 className="font-serif text-2xl text-stone-900 mt-1">
                  Share an Unexplored Haven
                </h3>
                <p className="text-xs text-stone-500 font-light mt-1">
                  Help fellow students and thinkers discover low-cost spaces to pause, read, and connect.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">
                    Name of the Place *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. State Archeology Garden, Banyan Steps..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-paper-300 bg-white text-stone-900 focus:outline-none focus:ring-1 focus:ring-sanctuary-leaf"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-stone-700 font-medium mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pune, Delhi, Bengaluru..."
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-paper-300 bg-white text-stone-900 focus:outline-none focus:ring-1 focus:ring-sanctuary-leaf"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-medium mb-1">
                      Neighborhood
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kothrud, Fort, Jayanagar..."
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-paper-300 bg-white text-stone-900 focus:outline-none focus:ring-1 focus:ring-sanctuary-leaf"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-stone-700 font-medium mb-1">
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as SpaceCategory)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-paper-300 bg-white text-stone-900 focus:outline-none focus:ring-1 focus:ring-sanctuary-leaf"
                    >
                      <option value="park">Public Park / Garden</option>
                      <option value="library">Public Library / Reading Room</option>
                      <option value="heritage">Heritage Site / Stepwell</option>
                      <option value="community">Community Cultural Center</option>
                      <option value="rooftop">Open Terrace / Lakeview</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-stone-700 font-medium mb-1">
                      Cost Tier
                    </label>
                    <select
                      value={costTier}
                      onChange={(e) => {
                        const tier = e.target.value as CostTier;
                        setCostTier(tier);
                        if (tier === 'free') setCostDetail('₹0 (Free Public Space)');
                        else setCostDetail('₹20 (Nominal Maintenance)');
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-paper-300 bg-white text-stone-900 focus:outline-none focus:ring-1 focus:ring-sanctuary-leaf"
                    >
                      <option value="free">100% Free (₹0)</option>
                      <option value="nominal">Nominal Entry (&lt; ₹50)</option>
                      <option value="affordable">Budget Friendly (&lt; ₹100)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">
                    Thought Prompt * (What thought came to you when you were here?)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Notice how the birds return to the banyan branches at dusk..."
                    value={thoughtPrompt}
                    onChange={(e) => setThoughtPrompt(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-paper-300 bg-white text-stone-900 focus:outline-none focus:ring-1 focus:ring-sanctuary-leaf italic font-serif"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">
                    Nearest Metro / Public Bus Access
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 5 min walk from Station Gate 3"
                    value={metroTransit}
                    onChange={(e) => setMetroTransit(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-paper-300 bg-white text-stone-900 focus:outline-none focus:ring-1 focus:ring-sanctuary-leaf"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">
                    Why do you love spending time here?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe the atmosphere, quiet corners, and what to bring..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-paper-300 bg-white text-stone-900 focus:outline-none focus:ring-1 focus:ring-sanctuary-leaf"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-stone-600 hover:text-stone-900 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-sanctuary-leaf text-white font-medium hover:bg-emerald-900 transition-all shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Publish Haven</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
