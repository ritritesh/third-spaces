import { ThirdSpace } from '../types';

export const INITIAL_SPACES: ThirdSpace[] = [
  {
    id: 'sunder-nursery-heritage',
    name: 'Sunder Nursery Arboretum',
    tagline: '16th-century Mughal heritage park with sunken lotus ponds and ancient peacocks',
    category: 'park',
    moods: ['read', 'reflect', 'talk', 'unplug'],
    costTier: 'nominal',
    costDetail: '₹50 entry fee',
    city: 'Delhi NCR',
    neighborhood: 'Nizamuddin',
    address: 'Bharat Scouts and Guides Marg, Nizamuddin, New Delhi',
    metroTransit: 'JLN Stadium Metro (Violet Line) - 10 min walk',
    bestTimeToVisit: 'Early morning (6:30 AM) or sunset golden hour (5:00 PM)',
    thoughtPrompt: 'Find a stone bench beneath the silk cotton tree. Sit still until the birds forget you are there.',
    imageUrl: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80',
    description: 'A 90-acre heritage park restored with over 300 tree species, gentle running waterways, and restored Persian pavilions. Unlike crowded urban malls, Sunder Nursery feels like stepping into a living painting.',
    atmosphere: 'Rustling acacia trees, fragrance of wet earth, stone arches, distant temple bells.',
    amenities: {
      restrooms: true,
      drinkingWater: true,
      seating: true,
      treeCanopy: true,
      quietZone: true,
      womenSafeScore: 'Very High (Guarded perimeter, families, and solo book lovers)'
    },
    etiquette: [
      'Carry your own water flask to minimize single-use plastic',
      'Keep portable speakers turned off; preserve the birdsong',
      'Step lightly around flowerbeds and historical masonry'
    ],
    coordinates: { lat: 28.5933, lng: 77.2443 }
  },
  {
    id: 'connemara-public-library',
    name: 'State Central Reading Room',
    tagline: 'High vaulted teak ceilings, whispering scholars, and hundred-year-old reference tables',
    category: 'library',
    moods: ['read', 'create', 'unplug'],
    costTier: 'free',
    costDetail: '₹0 (Free Public Entry with ID)',
    city: 'Chennai',
    neighborhood: 'Egmore',
    address: 'Pantheon Road, Egmore, Chennai',
    metroTransit: 'Egmore Metro Station - 500 meters',
    bestTimeToVisit: 'Weekday afternoons (1:30 PM - 4:00 PM)',
    thoughtPrompt: 'Touch the spine of an unread volume. How many minds have wandered through these pages before yours?',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    description: 'One of the four National Depository Libraries with Century-old Anglo-Italian architecture, marble floors, and stained glass windows that bathe quiet readers in filtered amber light.',
    atmosphere: 'Dust motes in sunlight beams, subtle scent of aged parchment, absolute reverence for quietude.',
    amenities: {
      restrooms: true,
      drinkingWater: true,
      seating: true,
      treeCanopy: false,
      quietZone: true,
      womenSafeScore: 'High (Strict institutional security and librarian supervision)'
    },
    etiquette: [
      'Put phones on silent mode before entering the reading atrium',
      'No snacks at the wooden reading desks',
      'Handle vintage folios with clean, dry hands'
    ],
    coordinates: { lat: 13.0732, lng: 80.2585 }
  },
  {
    id: 'agrasen-ki-baoli-sanctuary',
    name: 'The Stepped Well of Shadows',
    tagline: 'Ancient cooling stone steps cut deep into the bedrock away from vehicular traffic',
    category: 'heritage',
    moods: ['reflect', 'create'],
    costTier: 'free',
    costDetail: '₹0 (Free Entry)',
    city: 'Delhi NCR',
    neighborhood: 'Connaught Place outskirts',
    address: 'Hailey Road, near KG Marg, New Delhi',
    metroTransit: 'Barakhamba Road Metro - 7 min walk',
    bestTimeToVisit: 'Early morning between 7:00 AM - 9:00 AM before tour crowds',
    thoughtPrompt: 'Descend five steps. Feel the temperature drop by 3 degrees. How does silence feel when it is carved in stone?',
    imageUrl: 'https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=1200&q=80',
    description: 'A 60-meter long and 15-meter wide historical step well with 108 steep steps. It remains an uncanny micro-climatic sanctuary where the city roar drops into a gentle murmur.',
    atmosphere: 'Cool subterranean air, nesting pigeons in arched niches, red sandstone resonance.',
    amenities: {
      restrooms: false,
      drinkingWater: false,
      seating: true,
      treeCanopy: false,
      quietZone: true,
      womenSafeScore: 'Moderate (Best visited during morning daylight hours)'
    },
    etiquette: [
      'Watch your step on steep stone treads',
      'Do not carve inscriptions or deface antique stones',
      'Take only photographs, leave only footprints'
    ],
    coordinates: { lat: 28.6261, lng: 77.2250 }
  },
  {
    id: 'lalbagh-glass-house-perimeter',
    name: 'The Old Botanical Canopy',
    tagline: 'Centuries-old silk cotton trees, lotus ponds, and dawn mist walking trails',
    category: 'park',
    moods: ['read', 'reflect', 'talk', 'unplug'],
    costTier: 'nominal',
    costDetail: '₹30 entry (Free before 8:00 AM for walkers)',
    city: 'Bengaluru',
    neighborhood: 'Mavalli',
    address: 'Lalbagh Road, Mavalli, Bengaluru',
    metroTransit: 'Lalbagh Metro Station (Green Line) - Direct Gate 2 exit',
    bestTimeToVisit: 'Early dawn (6:00 AM - 8:00 AM) or gentle rainy afternoons',
    thoughtPrompt: 'Count how many distinct shades of green exist in one single glance.',
    imageUrl: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80',
    description: 'Home to some of the oldest rare tropical trees in the subcontinent, dating back over two hundred years. A sprawling haven where students read books on lawns and seniors share life stories.',
    atmosphere: 'Damp grass, chirping parakeets, morning mist hovering over the glasshouse lawns.',
    amenities: {
      restrooms: true,
      drinkingWater: true,
      seating: true,
      treeCanopy: true,
      quietZone: true,
      womenSafeScore: 'Very High (Constantly frequented by joggers, families, and security personnel)'
    },
    etiquette: [
      'Keep strictly to pedestrian walking paths and designated lawns',
      'Plucking medicinal leaves or flowers is strictly prohibited',
      'Carry your own hydration'
    ],
    coordinates: { lat: 12.9507, lng: 77.5848 }
  },
  {
    id: 'david-sassoon-verandah',
    name: 'David Sassoon Garden Courtyard',
    tagline: 'A hidden neo-gothic verandah oasis amidst the frantic rhythm of South Mumbai',
    category: 'library',
    moods: ['read', 'create', 'talk'],
    costTier: 'nominal',
    costDetail: '₹20 visitor day access / Free for members',
    city: 'Mumbai',
    neighborhood: 'Kala Ghoda',
    address: '152, Mahatma Gandhi Road, Kala Ghoda, Fort, Mumbai',
    metroTransit: 'Churchgate Station - 12 min walk / CSMT - 15 min walk',
    bestTimeToVisit: 'Late afternoon (3:30 PM - 6:00 PM)',
    thoughtPrompt: 'Close your eyes for 60 seconds. Can you separate the rustle of leaves from the distant taxi horns?',
    imageUrl: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    description: 'Surrounded by the art district of Kala Ghoda, this 1870 Victorian library features a secluded backyard garden with stone benches shaded by ancient Jackfruit and Ashoka trees.',
    atmosphere: 'Victorian arches, yellow basalt stone, breezy verandahs with deck chairs.',
    amenities: {
      restrooms: true,
      drinkingWater: true,
      seating: true,
      treeCanopy: true,
      quietZone: true,
      womenSafeScore: 'High (Quiet enclosed campus with gatekeeper)'
    },
    etiquette: [
      'Speak in low whispers in the rear courtyard',
      'Maintain clean tables; no wet beverage stains on antique teak',
      'Respect fellow writers and deep thinkers'
    ],
    coordinates: { lat: 18.9287, lng: 72.8315 }
  },
  {
    id: 'ravindra-bhavan-quadrangle',
    name: 'The Amphitheatre Steps & Art Courtyard',
    tagline: 'Terraced open-air steps where playwrights, painters, and thinkers congregate',
    category: 'community',
    moods: ['create', 'talk', 'reflect'],
    costTier: 'free',
    costDetail: '₹0 (Open Public Arts Complex)',
    city: 'Bhopal',
    neighborhood: 'Shyamla Hills',
    address: 'Shyamla Hills, Upper Lake View Road, Bhopal',
    metroTransit: 'Direct local electric bus connectivity',
    bestTimeToVisit: 'Sunset (5:30 PM) facing the lake breeze',
    thoughtPrompt: 'Sit on the highest stone terrace. Watch the sky turn indigo and let your mind wander without an agenda.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    description: 'An open cultural space designed to merge with surrounding topography. It features open brick courtyards, ceramic art displays, and stone terraces where students sketch, discuss literature, or watch dusk fall over the lake.',
    atmosphere: 'Lake breeze, open sky, rustic exposed brick, quiet hum of artistic curiosity.',
    amenities: {
      restrooms: true,
      drinkingWater: true,
      seating: true,
      treeCanopy: true,
      quietZone: false,
      womenSafeScore: 'High (Vibrant civic presence, college students, and theatre artists)'
    },
    etiquette: [
      'Open for free discussions; respect communal cleanliness',
      'Do not block corridors during ongoing rehearsals',
      'Support local community cultural events'
    ],
    coordinates: { lat: 23.2384, lng: 77.3910 }
  }
];
