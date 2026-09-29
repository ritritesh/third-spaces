'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThirdSpace } from '../types';
import { Compass, Sparkles, X, ArrowRight, RefreshCw } from 'lucide-react';

interface SerendipityModalProps {
  isOpen: boolean;
  onClose: () => void;
  spaces: ThirdSpace[];
  onSelectSpace: (space: ThirdSpace) => void;
}

export default function SerendipityModal({
  isOpen,
  onClose,
  spaces,
  onSelectSpace,
}: SerendipityModalProps) {
  const [selected, setSelected] = useState<ThirdSpace | null>(null);
  const [isMeditating, setIsMeditating] = useState(true);

  const rollSanctuary = () => {
    setIsMeditating(true);
    const randomIndex = Math.floor(Math.random() * spaces.length);
    setTimeout(() => {
      setSelected(spaces[randomIndex]);
      setIsMeditating(false);
    }, 1800);
  };

  useEffect(() => {
    if (isOpen) {
      rollSanctuary();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg bg-paper-50 rounded-3xl p-6 sm:p-8 shadow-2xl border border-paper-300 z-10 text-center"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>

          {isMeditating ? (
            <div className="py-12 space-y-6">
              {/* Breathing circle animation */}
              <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 rounded-full bg-sanctuary-sand/60"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-16 h-16 rounded-full bg-sanctuary-leaf text-white flex items-center justify-center shadow-lg"
                >
                  <Compass className="w-7 h-7 animate-spin-slow" />
                </motion.div>
              </div>

              <div>
                <h3 className="font-serif text-xl text-stone-800">
                  Take a slow, deep breath...
                </h3>
                <p className="mt-2 text-xs text-stone-500 font-light">
                  Finding a peaceful sanctuary in the city for your mind.
                </p>
              </div>
            </div>
          ) : (
            selected && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-5 text-left"
              >
                <div className="flex items-center justify-between text-xs text-stone-500 border-b border-paper-200 pb-3">
                  <span className="font-serif italic text-sanctuary-leaf font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Serendipity Recommendation
                  </span>
                  <span>{selected.costDetail}</span>
                </div>

                <div className="relative h-44 rounded-2xl overflow-hidden">
                  <img
                    src={selected.imageUrl}
                    alt={selected.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="font-serif text-xl font-normal leading-tight">
                      {selected.name}
                    </h3>
                    <p className="text-xs text-stone-200 mt-0.5">
                      {selected.neighborhood}, {selected.city}
                    </p>
                  </div>
                </div>

                {/* Prompt */}
                <div className="bg-paper-100 rounded-xl p-3.5 border border-paper-200">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-400">
                    Your reflection for today:
                  </span>
                  <p className="font-serif italic text-xs text-stone-800 mt-1">
                    &ldquo;{selected.thoughtPrompt}&rdquo;
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={rollSanctuary}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-medium bg-paper-100 hover:bg-paper-200 text-stone-700 border border-paper-300 transition-all"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Try Another</span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onSelectSpace(selected);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-sanctuary-leaf text-white hover:bg-emerald-900 transition-all shadow-sm"
                  >
                    <span>View Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
