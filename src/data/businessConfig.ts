/**
 * Canadian Swimming Pool - Business Configuration & Data
 * Location: Ludhiana, Punjab, India
 * Phone: +91 94179 70015
 * 
 * All details can be edited directly here or through the Owner Settings interface.
 */

export interface PricingCard {
  id: string;
  name: string;
  duration: string;
  price: string;
  priceNote: string;
  peopleCovered: string;
  features: string[];
  terms: string;
  recommended?: boolean;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  confirmed: boolean;
}

export interface PoolInfo {
  id: string;
  title: string;
  tagline: string;
  audience: string;
  depth: string;
  timings: string;
  entryPrice: string;
  supervisionNote: string;
  image: string;
  features: string[];
}

export interface LessonInfo {
  id: string;
  title: string;
  targetGroup: string;
  timings: string;
  duration: string;
  fees: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'real' | 'family' | 'kids' | 'facilities';
  categoryLabel: string;
  image: string;
  caption: string;
  alt: string;
  isStockSample: boolean;
  isRealBusinessPhoto?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface RuleItem {
  id: string;
  title: string;
  description: string;
  severity: 'important' | 'guideline';
}

export interface BusinessConfig {
  name: string;
  legalName: string;
  category: string;
  address: string;
  shortAddress: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  mapsPlusCode: string;
  mapsSearchUrl: string;
  openingHoursListing: string;
  scheduleWeekly: {
    dayRange: string;
    morningSlot: string;
    eveningSlot: string;
    note: string;
  }[];
  heroHeadline: string;
  heroSubheading: string;
  pools: PoolInfo[];
  facilities: FacilityItem[];
  pricing: PricingCard[];
  lessons: LessonInfo[];
  gallery: GalleryItem[];
  safetyRules: RuleItem[];
  faqs: FAQItem[];
}

export const initialBusinessConfig: BusinessConfig = {
  name: 'Canadian Swimming Pool',
  legalName: 'Canadian Swimming Pool Family & Child Alag Pool',
  category: 'Swimming Pool & Aquatic Recreation',
  address:
    'Mahavir Part 2, GT Road Jassian, near Karol Bagh, near Sab Lok Medical, 61–62 Jassian Village Road, New Gurnam Nagar, Jassian, Heera Singh Nagar, Ludhiana, Punjab 141008, India',
  shortAddress: 'GT Road Jassian, near Karol Bagh & Sab Lok Medical, Ludhiana, Punjab 141008',
  phone: '+91 94179 70015',
  phoneRaw: '+919417970015',
  whatsappNumber: '919417970015',
  mapsPlusCode: 'WRX9+7W Ludhiana',
  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=CANADIAN+SWIMMING+POOL+FAMILY+%26+CHILD+ALAG+POOL+Ludhiana',
  openingHoursListing:
    'Listed as Closed; opens at 6:00 AM Saturday on business directory listing.',
  scheduleWeekly: [
    {
      dayRange: 'Monday – Friday',
      morningSlot: '6:00 AM – 11:00 AM (Subject to owner confirmation)',
      eveningSlot: '4:00 PM – 8:00 PM (Subject to owner confirmation)',
      note: 'Weekdays operate on scheduled seasonal slots. Call ahead to confirm.'
    },
    {
      dayRange: 'Saturday',
      morningSlot: 'Opens at 6:00 AM',
      eveningSlot: 'Open through Evening (Subject to owner confirmation)',
      note: 'Verified listing indicates 6:00 AM Saturday opening.'
    },
    {
      dayRange: 'Sunday',
      morningSlot: '6:00 AM – 12:00 PM (Subject to owner confirmation)',
      eveningSlot: '3:00 PM – 8:30 PM (Subject to owner confirmation)',
      note: 'High demand weekend slots. Prior phone confirmation advised.'
    }
  ],
  heroHeadline: 'Make a Splash at Canadian Swimming Pool',
  heroSubheading:
    'Enjoy swimming, family time, and refreshing moments in Ludhiana. Explore our separate family and children’s pool options.',
  pools: [
    {
      id: 'family-pool',
      title: 'Family Swimming Pool',
      tagline: 'Comfortable, spacious recreational water for families and adults',
      audience: 'Families, adults, recreational swimmers & accompanied older children',
      depth: 'Comfortable standard swimming depth (Owner to confirm exact gradient)',
      timings: 'Morning and evening public swimming sessions (Call to verify today’s slots)',
      entryPrice: 'Contact for Price (Owner to confirm entry rate)',
      supervisionNote: 'Safe family recreation environment. Proper swimwear required.',
      image: '/src/assets/images/real/canadian_pool_real_1_high.jpg',
      features: [
        'Dedicated recreational area separated from toddlers',
        'Clean freshwater system with routine filtration',
        'Poolside seating for family members resting between laps',
        'Gentle access steps with secure poolside railing'
      ]
    },
    {
      id: 'children-pool',
      title: 'Children’s Swimming Pool (Alag Pool)',
      tagline: 'Specially partitioned shallow pool for little swimmers and beginners',
      audience: 'Young children, beginners & toddlers accompanied by parents',
      depth: 'Safe shallow depth designed for young learners (Owner to confirm exact depth)',
      timings: 'Daytime and evening family slots (Confirm with pool management)',
      entryPrice: 'Contact for Price (Owner to confirm entry rate)',
      supervisionNote:
        'Children must be accompanied and supervised by a responsible adult at all times.',
      image: '/src/assets/images/real/canadian_pool_real_2_high.jpg',
      features: [
        'Separated partition (Alag Pool) preventing deep-water accidental entry',
        'Smooth low-rise steps for easy entry and exit by little swimmers',
        'Non-slip poolside perimeter border for extra footing safety',
        'Parent seating right along the perimeter for constant line-of-sight'
      ]
    }
  ],
  facilities: [
    {
      id: 'f1',
      title: 'Family Swimming Area',
      description: 'Dedicated spacious pool area designed for families, adults, and recreational swimming.',
      iconName: 'Users',
      confirmed: true
    },
    {
      id: 'f2',
      title: 'Children’s Separate Pool',
      description: 'Partitioned shallow splash area ensuring kids swim safely without mixing into deep zones.',
      iconName: 'Baby',
      confirmed: true
    },
    {
      id: 'f3',
      title: 'Changing Rooms',
      description: 'Dedicated private changing cubicles for male and female visitors before and after swimming.',
      iconName: 'DoorClosed',
      confirmed: true
    },
    {
      id: 'f4',
      title: 'Freshwater Showers',
      description: 'Clean pre-swim and post-swim rinse shower stalls for optimal hygiene.',
      iconName: 'ShowerHead',
      confirmed: true
    },
    {
      id: 'f5',
      title: 'Shaded Poolside Seating',
      description: 'Comfortable covered seating and loungers for resting, parents, and spectators.',
      iconName: 'Armchair',
      confirmed: true
    },
    {
      id: 'f6',
      title: 'Secure Storage Lockers',
      description: 'Lockers for safeguarding shoes, bags, and personal belongings during your swim.',
      iconName: 'ShieldCheck',
      confirmed: true
    },
    {
      id: 'f7',
      title: 'Clean Drinking Water',
      description: 'Hygienic drinking water facility accessible to all visitors.',
      iconName: 'Droplets',
      confirmed: true
    },
    {
      id: 'f8',
      title: 'Swimming Coaching Guidance',
      description: 'Learn swimming basics and water confidence with beginner guidance upon enquiry.',
      iconName: 'GraduationCap',
      confirmed: true
    },
    {
      id: 'f9',
      title: 'Vehicle Parking',
      description: 'Convenient space for two-wheelers and cars near the Jassian Village Road entrance.',
      iconName: 'Car',
      confirmed: true
    }
  ],
  pricing: [
    {
      id: 'single-visit',
      name: 'Single Visit Pass',
      duration: 'Per Swim Session (e.g. 1 hour / batch)',
      price: 'Contact for Price',
      priceNote: 'Rates to be confirmed directly with business owner',
      peopleCovered: '1 Person (Adult or Child)',
      features: [
        'Entry to designated pool (Family or Children’s)',
        'Access to freshwater shower stations',
        'Use of private changing rooms',
        'Poolside seating access'
      ],
      terms: 'Valid for single entry during public swim hours on date of issue.',
      recommended: false
    },
    {
      id: 'family-package',
      name: 'Family Package',
      duration: 'Single Visit Group Session',
      price: 'Contact for Price',
      priceNote: 'Discounted family bundles available upon enquiry',
      peopleCovered: 'Up to 4 Family Members (Parents + Children)',
      features: [
        'Combined access to Family Pool & Children’s Alag Pool',
        'Private changing room and shower access',
        'Perimeter seating for non-swimming family members',
        'Assistance for children entering the water'
      ],
      terms: 'Children must be supervised by an adult family member at all times.',
      recommended: true
    },
    {
      id: 'monthly-membership',
      name: 'Monthly Membership',
      duration: '30 Consecutive Days',
      price: 'Contact for Price',
      priceNote: 'Flexible monthly plans for regular morning/evening swimmers',
      peopleCovered: '1 Swimmer (Family plans available)',
      features: [
        'Regular daily swim slot during member operating hours',
        'Priority batch allocation during peak summer days',
        'Complimentary locker access (subject to availability)',
        'Shower and changing facility access each visit'
      ],
      terms: 'Non-transferable; pool maintenance scheduled days notified in advance.',
      recommended: false
    }
  ],
  lessons: [
    {
      id: 'lesson-beginner',
      title: 'Beginner Swimming Classes',
      targetGroup: 'Non-swimmers & Beginners of all ages',
      timings: 'Morning & Evening Batches (Call for current schedule)',
      duration: '15 to 30 Day Training Sessions',
      fees: 'Contact for Coaching Rates',
      description:
        'Focus on water confidence, breathing control, floating techniques, and foundational kicking in a supportive environment.'
    },
    {
      id: 'lesson-kids',
      title: 'Children’s Water Confidence',
      targetGroup: 'Kids ages 5 and above (Accompanied)',
      timings: 'Dedicated afternoon & evening batches',
      duration: 'Step-by-step progressive sessions',
      fees: 'Contact for Coaching Rates',
      description:
        'Gentle and fun introductory lessons in the shallow children’s pool emphasizing water safety, basic paddling, and fun water exercises.'
    },
    {
      id: 'lesson-adult',
      title: 'Adult Fitness & Stroke Refinement',
      targetGroup: 'Teens & Adults seeking exercise or lap improvement',
      timings: 'Early morning & late evening slots',
      duration: 'Flexible monthly or weekly batches',
      fees: 'Contact for Coaching Rates',
      description:
        'Refine freestyle, breaststroke, endurance, and breathing mechanics under experienced guidance for fitness and stamina.'
    }
  ],
  gallery: [
    {
      id: 'g-real-1',
      title: 'Canadian Swimming Pool — Actual Pool View',
      category: 'real',
      categoryLabel: 'Actual Facility Photo',
      image: '/src/assets/images/real/canadian_pool_real_1_high.jpg',
      caption: 'Official authentic photograph of Canadian Swimming Pool Family & Child Alag Pool in Ludhiana, Punjab.',
      alt: 'Real photograph of Canadian Swimming Pool in Ludhiana Punjab from Google Maps listing',
      isStockSample: false,
      isRealBusinessPhoto: true
    },
    {
      id: 'g-real-2',
      title: 'Poolside & Deck — Actual Location Photo',
      category: 'real',
      categoryLabel: 'Actual Facility Photo',
      image: '/src/assets/images/real/canadian_pool_real_2_high.jpg',
      caption: 'Authentic photo of the swimming pool deck at Canadian Swimming Pool, GT Road Jassian, Ludhiana.',
      alt: 'Actual pool photo of Canadian Swimming Pool Jassian Ludhiana',
      isStockSample: false,
      isRealBusinessPhoto: true
    },
    {
      id: 'g-real-hero',
      title: 'Canadian Swimming Pool — Broad Overview',
      category: 'real',
      categoryLabel: 'Actual Facility Photo',
      image: '/src/assets/images/real/canadian_pool_real_hero_landscape.jpg',
      caption: 'Landscape perspective of Canadian Swimming Pool in Ludhiana, Punjab.',
      alt: 'Landscape photograph of Canadian Swimming Pool in Ludhiana',
      isStockSample: false,
      isRealBusinessPhoto: true
    },
    {
      id: 'g1',
      title: 'Main Recreational Swimming Pool Concept',
      category: 'family',
      categoryLabel: 'Family Pool',
      image: '/src/assets/images/hero_canadian_pool_1791565175171.jpg',
      caption: 'Sparkling clear water with resort-style ambiance and spacious family recreation deck.',
      alt: 'Crystal clear swimming pool on a sunny day with loungers and clean water',
      isStockSample: true,
      isRealBusinessPhoto: false
    },
    {
      id: 'g2',
      title: 'Relaxing Family Pool Deck',
      category: 'family',
      categoryLabel: 'Family Pool',
      image: '/src/assets/images/family_pool_area_1791565188707.jpg',
      caption: 'Calm and clean family swimming area with poolside seating and natural sunlight.',
      alt: 'Family swimming pool with clean stone deck and modern poolside pavilion',
      isStockSample: true,
      isRealBusinessPhoto: false
    },
    {
      id: 'g3',
      title: 'Children’s Dedicated Splash & Learn Pool',
      category: 'kids',
      categoryLabel: 'Children Pool',
      image: '/src/assets/images/children_pool_area_1791565201475.jpg',
      caption: 'Partitioned shallow pool with gradual entry designed specially for kids and beginners.',
      alt: 'Shallow children pool with gradual entry steps and safety perimeter',
      isStockSample: true,
      isRealBusinessPhoto: false
    },
    {
      id: 'g4',
      title: 'Clean Shower & Changing Facilities',
      category: 'facilities',
      categoryLabel: 'Facilities',
      image: '/src/assets/images/poolside_facilities_1791565215817.jpg',
      caption: 'Hygienic outdoor rinse showers, locker access, and shaded poolside benches.',
      alt: 'Poolside changing facility, shower stations and clean resting benches',
      isStockSample: true,
      isRealBusinessPhoto: false
    }
  ],
  safetyRules: [
    {
      id: 'r1',
      title: 'Active Adult Supervision Required for Children',
      description:
        'Children must be supervised directly and continuously by a parent or responsible adult at all times, both inside the children’s pool and on the pool deck.',
      severity: 'important'
    },
    {
      id: 'r2',
      title: 'Mandatory Pre-Swim Rinse Shower',
      description:
        'All swimmers must rinse in the freshwater shower stalls before entering the water to maintain clean, hygienic pool conditions.',
      severity: 'important'
    },
    {
      id: 'r3',
      title: 'Appropriate Swimming Attire',
      description:
        'Clean synthetic swimwear (nylon, spandex, polyester) is required. Denim, cotton street clothes, or loose heavy garments are prohibited in the water.',
      severity: 'important'
    },
    {
      id: 'r4',
      title: 'Strictly No Diving in Shallow Areas',
      description:
        'Always enter the pool feet first. Diving or running on the wet pool deck is prohibited to prevent slips and accidental collisions.',
      severity: 'important'
    },
    {
      id: 'r5',
      title: 'Follow Pool Staff and Attendant Instructions',
      description:
        'Please follow instructions from pool attendants immediately. Any unsafe conduct or breach of guidelines may result in being asked to exit the premises.',
      severity: 'guideline'
    },
    {
      id: 'r6',
      title: 'No Glass, Food, or Chewing Gum in Water',
      description:
        'Food items, soft drink bottles, and glass containers are strictly prohibited near the pool edges to maintain sanitation and avoid injuries.',
      severity: 'guideline'
    },
    {
      id: 'r7',
      title: 'Respect Swimming Ability & Restricted Zones',
      description:
        'Non-swimmers must stay in shallow sections. In case of feeling unwell, fatigued, or observing distress, exit immediately and notify staff.',
      severity: 'guideline'
    }
  ],
  faqs: [
    {
      id: 'faq1',
      question: 'Where is Canadian Swimming Pool located?',
      answer:
        'Canadian Swimming Pool is located at Mahavir Part 2, GT Road Jassian, near Karol Bagh, near Sab Lok Medical, 61–62 Jassian Village Road, New Gurnam Nagar, Jassian, Heera Singh Nagar, Ludhiana, Punjab 141008, India. The Google Maps Plus Code is WRX9+7W Ludhiana.'
    },
    {
      id: 'faq2',
      question: 'Do you have a separate pool for children?',
      answer:
        'Yes! The pool specifically features a separate pool (Alag Pool) designed for children and beginners so young swimmers can enjoy shallow, comfortable water without mixing into the deeper family recreation zone.'
    },
    {
      id: 'faq3',
      question: 'What are the entry charges and ticket rates?',
      answer:
        'Exact ticket charges, single visit fees, and family package rates are confirmed directly by the business management based on season and session timings. Please call +91 94179 70015 or click the WhatsApp enquiry button for today’s current rates.'
    },
    {
      id: 'faq4',
      question: 'What are your opening hours and weekly timings?',
      answer:
        'According to the verified listing, the pool opens at 6:00 AM on Saturdays. Operating hours for weekdays and Sundays operate on seasonal morning and evening batches. We strongly recommend calling +91 94179 70015 to verify today’s operating schedule before your visit.'
    },
    {
      id: 'faq5',
      question: 'Do you offer swimming classes or coaching for beginners?',
      answer:
        'Yes, beginner coaching guidance and water confidence classes for children and adults are available. Batch schedules, coaching fees, and instructor availability should be confirmed directly by calling +91 94179 70015.'
    },
    {
      id: 'faq6',
      question: 'Are family packages or group rates available?',
      answer:
        'Family and group visits are warmly welcomed. For group admissions or family bundle rates, please call or WhatsApp +91 94179 70015 in advance so the management can arrange appropriate batch slots.'
    },
    {
      id: 'faq7',
      question: 'What should visitors bring along when visiting?',
      answer:
        'Visitors should bring appropriate synthetic swimming attire (swim shorts or swimsuits), clean towels, flip-flops/sliders for the deck, and swimming goggles if preferred. Children who are learning may bring certified arm floaties or kickboards.'
    },
    {
      id: 'faq8',
      question: 'Are advance bookings or slot reservations available?',
      answer:
        'You can enquire and check batch availability in advance via phone call (+91 94179 70015) or WhatsApp. Entry is handled directly at the counter upon arrival.'
    },
    {
      id: 'faq9',
      question: 'What supervision rules apply to children?',
      answer:
        'All children must be accompanied and supervised by a responsible adult parent or guardian at all times. Children are never permitted to enter the pool unattended, even in the shallow children’s pool.'
    }
  ]
};

// Local storage key for persistent owner edits in-browser
export const STORAGE_KEY = 'canadian_pool_business_config_v1';

export function getSavedBusinessConfig(): BusinessConfig {
  if (typeof window === 'undefined') return initialBusinessConfig;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialBusinessConfig;
    const parsed = JSON.parse(raw);
    return { ...initialBusinessConfig, ...parsed };
  } catch {
    return initialBusinessConfig;
  }
}

export function saveBusinessConfig(config: BusinessConfig): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error('Failed to save business config', e);
  }
}

export function resetBusinessConfig(): BusinessConfig {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
  return initialBusinessConfig;
}
