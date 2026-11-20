export interface CakeItem {
  id: string;
  name: string;
  weight: string;
  price: number;
  image: string;
  imageAlt: string;
  featuredBadge?: string;
  note: string;
}

export type OccasionKey = 'birthday' | 'wedding' | 'celebration';

export interface OccasionShowcase {
  key: OccasionKey;
  label: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  formOccasion: 'Birthday' | 'Wedding' | 'Other';
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  context: string;
}

export interface BranchLocation {
  name: string;
  isFlagship?: boolean;
  address: string;
  phone?: string;
}

export const HERO_ASSETS = {
  image: '/src/assets/images/hero_signature_cake_1795182887594.jpg',
  imageAlt:
    'Jaipur Bakers signature chocolate hazelnut celebration cake with roasted hazelnuts and gold leaf on a cream pedestal',
};

export const MARQUEE_ITEMS: string[] = [
  'Classic Vanilla',
  'Hazelnut Mousse',
  'Dairy Milk Chocolate',
  'Hazelnut Almond Chocolate',
  'Belgium Chocolate',
];

export const BESTSELLER_CAKES: CakeItem[] = [
  {
    id: 'classic-vanilla',
    name: 'Classic Vanilla Cake',
    weight: '1 Pound',
    price: 350,
    image: '/src/assets/images/cake_classic_vanilla_1795182886479.jpg',
    imageAlt: 'Classic Vanilla Cake frosted with smooth ivory whipped cream swirls and white chocolate shavings',
    note: 'Light sponge layered with whipped vanilla cream',
  },
  {
    id: 'dairy-milk-chocolate',
    name: 'Dairy Milk Chocolate Cake',
    weight: '1 Pound',
    price: 800,
    image: '/src/assets/images/cake_dairy_milk_1795182886304.jpg',
    imageAlt: 'Dairy Milk Chocolate Cake with silky milk chocolate ganache drip and chocolate rosettes',
    note: 'Rich cocoa sponge with glossy milk chocolate ganache',
  },
  {
    id: 'hazelnut-almond-chocolate',
    name: 'Hazelnut Almond Chocolate Cake',
    weight: '1 Pound',
    price: 800,
    image: '/src/assets/images/cake_hazelnut_almond_1795182886515.jpg',
    imageAlt: 'Hazelnut Almond Chocolate Cake coated in toasted almond slivers and crushed hazelnuts',
    note: 'Toasted almonds, roasted hazelnuts & dark truffle',
  },
  {
    id: 'hazelnut-mousse',
    name: 'Hazelnut Mousse Cake',
    weight: '2 Pound',
    price: 1300,
    image: '/src/assets/images/cake_hazelnut_mousse_1795182887520.jpg',
    imageAlt: 'Two-pound Hazelnut Mousse Cake with velvet cocoa glaze, praline mousse layers, and roasted hazelnuts',
    featuredBadge: 'Most loved',
    note: 'Silky hazelnut praline mousse & cocoa glaze',
  },
];

export const OCCASIONS: OccasionShowcase[] = [
  {
    key: 'birthday',
    label: 'Birthday',
    headline: "The cake they'll remember.",
    description:
      'From first birthdays to milestone family dinners — custom flavours, playful themes, and clean cream finishes baked fresh the same morning.',
    image: '/src/assets/images/occasion_birthday_cake_1795182886931.jpg',
    imageAlt: 'Tall buttercream birthday cake with golden caramel drip and glowing slender gold candles',
    formOccasion: 'Birthday',
  },
  {
    key: 'wedding',
    label: 'Wedding',
    headline: 'The centrepiece of your big day.',
    description:
      'Multi-tier showstoppers crafted to match your mandap palette, floral styling, and guest count — delivered and set up across Jaipur.',
    image: '/src/assets/images/occasion_wedding_cake_1795182886992.jpg',
    imageAlt: 'Two-tier ivory buttercream wedding cake decorated with fresh blush roses and gold leaf accents',
    formOccasion: 'Wedding',
  },
  {
    key: 'celebration',
    label: 'Celebration',
    headline: 'Every win deserves cake.',
    description:
      'Retirements, anniversaries, housewarmings, and office milestones — rich Belgian-style chocolate, nut pralines, and fresh cream sponges.',
    image: '/src/assets/images/occasion_celebration_cake_1795182886751.jpg',
    imageAlt: 'Festive dark chocolate and pistachio celebration cake topped with crushed pistachios and rose petals',
    formOccasion: 'Other',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'smita-yadav',
    quote:
      'Ordered a retirement cake — the cream, the consistency, everything was perfect.',
    author: 'Smita Yadav',
    context: 'Custom Celebration Cake',
  },
];

export const JUSTDIAL_RATING = {
  score: '4.3★',
  platform: 'JustDial',
  countLabel: '2,134 ratings',
  summary: '4.3★ on JustDial · 2,134 ratings',
};

export const BRANCHES: BranchLocation[] = [
  {
    name: 'Jhotwara',
    isFlagship: true,
    address: 'Plot No. 4, DC Heights, near BP Petrol Pump',
  },
  {
    name: 'Manipal University',
    address: 'Near Nescafe Campus Cafe, Near GVK Toll Plaza, Jaipur 303007',
    phone: '+91 9602535455',
  },
  {
    name: 'Malviya Nagar',
    address: 'Shop 2, E-20, Girdhar Marg, Malviya Nagar, Jaipur 302017',
    phone: '+91 9088535455',
  },
  {
    name: 'Pink City',
    address: 'Plot No. 254-255, Near Kale Hanuman Mandir, Hawa Mahal Rd, Chandi Ki Taksal, Jaipur 302002',
    phone: '+91 9079535455',
  },
  {
    name: 'Vidyadhar Nagar',
    address: 'B1, Mall Road, Near Biyani Girls College, Sector-3, Vidyadhar Nagar 302039',
    phone: '+91 9065535455',
  },
  {
    name: 'C-Scheme',
    address: 'F-55, Jamnalal Bajaj Marg, Ashok Nagar, Jaipur 302007',
    phone: '+91 9071535455',
  },
  {
    name: 'Vaishali Nagar',
    address: 'Plot No. SB 1, 2, Ground Floor, Gandhi Path, Queens Rd, Jaipur 302021',
    phone: '+91 9978535455',
  },
  {
    name: 'Mansarovar',
    address: 'Shop No. 4, Devaram Plaza, Surajmal Circle, Muhana Mandi Road, Mansarovar, Jaipur 302020',
    phone: '+91 9073535455',
  },
  {
    name: 'Khatipura Road',
    address: 'Shop No. 5, Shardul Singh Market, Khatipura Road, Jhotwara, Jaipur 302012',
    phone: '+91 8872535455',
  },
  {
    name: 'Niwaru Road',
    address: 'Shop No. 11, Bhagwan Bahubali Nagar, Niwaru Road, Jaipur 302012',
    phone: '+91 8238535455',
  },
  {
    name: 'Boring Chauraha',
    address: 'Shop No. 7, Boring Chauraha, Jhotwara, Jaipur 302012',
    phone: '+91 8698535455',
  },
];

export const BAKERY_CONTACT = {
  brand: 'Jaipur Bakers',
  mark: 'jb',
  tagline: 'A name Jaipur has trusted for cakes and bakes for years.',
  email: 'info@jaipurbakers.com',
  phone: '+91 7710535455',
  flagshipAddress: 'Plot No. 4, DC Heights, near BP Petrol Pump, Jhotwara, Jaipur',
  hours: 'Open every day till 11:30 pm.',
};
