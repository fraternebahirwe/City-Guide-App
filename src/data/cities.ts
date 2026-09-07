export interface City {
  id: string;
  name: string;
  country: string;
  flag: string;
  image: string;
  description: string;
  currency: string;
  timezone: string;
  attractions: string[];
  popularFood: string[];
}

export const CITIES: City[] = [
  {
    id: 'ny',
    name: 'New York',
    country: 'United States',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80',
    description: 'The city that never sleeps, famous for its iconic skyline, Broadway, and vibrant culture.',
    currency: 'USD ($)',
    timezone: 'UTC-4 (EDT)',
    attractions: ['Statue of Liberty', 'Central Park', 'Empire State Building', 'Times Square'],
    popularFood: ['New York Style Pizza', 'Bagels with Lox', 'Pastrami Sandwich']
  },
  {
    id: 'sf',
    name: 'San Francisco',
    country: 'United States',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
    description: 'Known for the Golden Gate Bridge, cable cars, tech innovation, and steep rolling hills.',
    currency: 'USD ($)',
    timezone: 'UTC-7 (PDT)',
    attractions: ['Golden Gate Bridge', 'Alcatraz Island', 'Fisherman’s Wharf', 'Lombard Street'],
    popularFood: ['Clam Chowder in Sourdough', 'Dungeness Crab', 'Ghirardelli Chocolate']
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    flag: '🇯🇵',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
    description: 'A bustling metropolis blending futuristic skyscrapers with historic temples and rich traditions.',
    currency: 'JPY (¥)',
    timezone: 'UTC+9 (JST)',
    attractions: ['Shinjuku Crossing', 'Senso-ji Temple', 'Tokyo Skytree', 'Meiji Shrine'],
    popularFood: ['Ramen', 'Sushi', 'Tempura', 'Matcha Sweets']
  },
  {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    flag: '🇬🇧',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    description: 'A historic capital rich in royal history, world-class museums, and diverse architecture.',
    currency: 'GBP (£)',
    timezone: 'UTC+1 (BST)',
    attractions: ['Big Ben', 'Tower of London', 'London Eye', 'British Museum'],
    popularFood: ['Fish and Chips', 'Full English Breakfast', 'Afternoon Tea']
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    flag: '🇫🇷',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    description: 'The global capital of art, fashion, gastronomy, and romance.',
    currency: 'EUR (€)',
    timezone: 'UTC+2 (CEST)',
    attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Arc de Triomphe'],
    popularFood: ['Croissants', 'Macarons', 'Escargots', 'Crêpes']
  }
];
