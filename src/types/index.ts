export type SpaceMood = 'read' | 'reflect' | 'talk' | 'create' | 'unplug';

export type SpaceCategory = 'park' | 'library' | 'heritage' | 'community' | 'rooftop' | 'culture';

export type CostTier = 'free' | 'nominal' | 'affordable';

export interface ThirdSpace {
  id: string;
  name: string;
  tagline: string;
  category: SpaceCategory;
  moods: SpaceMood[];
  costTier: CostTier;
  costDetail: string; // e.g., "₹0 (Free Entry)" or "₹10 (Maintenance token)"
  city: string;
  neighborhood: string;
  address: string;
  metroTransit: string;
  bestTimeToVisit: string;
  thoughtPrompt: string; // The mindful prompt to encourage reflection
  imageUrl: string;
  description: string;
  atmosphere: string; // Qualitative notes like "Ancient banyan shade, stone benches, soft wind"
  amenities: {
    restrooms: boolean;
    drinkingWater: boolean;
    seating: boolean;
    treeCanopy: boolean;
    quietZone: boolean;
    womenSafeScore: string; // e.g. "High (Staffed & Well-lit until 7 PM)"
  };
  etiquette: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}
