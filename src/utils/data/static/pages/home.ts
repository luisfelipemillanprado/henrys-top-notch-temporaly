/**
 * @description Returns an object containing assets of the home page.
 * @private
 * @constant {object} homeAssets - An object containing assets of the home page.
 * @property {object} hero - Contains data for the hero section.
 * @property {array} certifieds - An array of objects representing certified logos.
 * @property {object} whoWeAre - Contains data for the who we are section.
 * @property {object} process - Contains data for the process section.
 * @property {object} services - Contains data for the services section.
 * @property {object} whyChooseUs - Contains data for the why choose us section.
 * @property {object} reviews - Contains data for the reviews section.
 * @property {object} contact - Contains data for the contact section.
 * @return {object} Returns an object containing static data for the home page.
 */
export const homeAssets = {
  hero: {
    sectionId: 'hero',
    headingId: 'home-hero-title',
    primaryCtaHref: '#contact',
    secondaryCtaHref: '/services',
    gallery: [
      { url: '/images/gallery/gallery1.webp', id: 1 },
      { url: '/images/gallery/gallery2.webp', id: 2 },
      { url: '/images/gallery/gallery3.webp', id: 3 },
      { url: '/images/gallery/gallery4.webp', id: 4 },
      { url: '/images/gallery/gallery5.webp', id: 5 },
      { url: '/images/gallery/gallery6.webp', id: 6 },
    ],
  },
  certifieds: [
    { url: '/images/certifieds/certified1.webp', id: 7 },
    { url: '/images/certifieds/certified2.webp', id: 8 },
    { url: '/images/certifieds/certified3.webp', id: 9 },
    { url: '/images/certifieds/certified4.webp', id: 10 },
    { url: '/images/certifieds/certified5.webp', id: 11 },
    { url: '/images/certifieds/certified6.webp', id: 12 },
    { url: '/images/certifieds/certified7.webp', id: 13 },
    { url: '/images/certifieds/certified8.webp', id: 14 },
  ],
  whoWeAre: {
    sectionId: 'who-we-are',
    headingId: 'home-who-we-are-title',
    image: '/images/who-we-are/who-we-are.webp',
    primaryCtaHref: '/who-we-are',
    benefits: [
      { key: 'justOnTime', id: 15 },
      { key: 'support247', id: 16 },
      { key: 'affordableHvacSolutions', id: 17 },
      { key: 'energyEfficientSystems', id: 18 },
      { key: 'expertInstallationRepair', id: 19 },
      { key: 'comfortForHomesBusinesses', id: 20 },
    ],
  },
  process: {
    sectionId: 'process',
    headingId: 'home-process-title',
    image: '/images/process/process1.webp',
    primaryCtaHref: '/process',
    features: [
      { key: 'energyEfficientSystems', href: '/process', icon: 'emergency', id: 21 },
      { key: 'expertInstallationRepair', href: '/process', icon: 'experts', id: 22 },
      { key: 'comfortForHomesBusinesses', href: '/process', icon: 'comfort', id: 23 },
      { key: 'personalizedCustomerCare', href: '/process', icon: 'customer', id: 24 },
    ],
    steps: [
      { key: 'bookYourService', url: '/images/process/process2.webp', id: 25 },
      { key: 'weArriveOnTime', url: '/images/process/process3.webp', id: 26 },
      { key: 'affordablePricing', url: '/images/process/process4.webp', id: 27 },
      { key: 'satisfactionGuaranteed', url: '/images/process/process5.webp', id: 28 },
    ],
  },
  services: {
    sectionId: 'services',
    headingId: 'home-services-title',
    primaryCtaHref: '/services',
    offers: [
      {
        key: 'maintenance',
        url: '/images/services/service1.webp',
        stars: [{ id: 29 }, { id: 30 }, { id: 31 }, { id: 32 }, { id: 33 }],
        benefits: [
          { key: 'freeEstimate', id: 34 },
          { key: 'fullWarranty', id: 35 },
          { key: 'precisionTuneUp', id: 36 },
          { key: 'safetyInspections', id: 37 },
          { key: 'efficiencyTesting', id: 38 },
        ],
        secondaryCtaHref: '/services',
        id: 39,
      },
      {
        key: 'repair',
        url: '/images/services/service2.webp',
        stars: [{ id: 40 }, { id: 41 }, { id: 42 }, { id: 43 }, { id: 44 }],
        benefits: [
          { key: 'freeEstimate', id: 45 },
          { key: 'fullWarranty', id: 46 },
          { key: 'serviceGuarantee', id: 47 },
          { key: 'emergencyService', id: 48 },
          { key: 'upfrontPricing', id: 49 },
        ],
        secondaryCtaHref: '/services',
        id: 50,
      },
      {
        key: 'installation',
        url: '/images/services/service3.webp',
        stars: [{ id: 51 }, { id: 52 }, { id: 53 }, { id: 54 }, { id: 55 }],
        benefits: [
          { key: 'freeEstimate', id: 56 },
          { key: 'fullWarranty', id: 57 },
          { key: 'precisionCapacity', id: 58 },
          { key: 'energyOptimized', id: 59 },
          { key: 'certifiedInstall', id: 60 },
        ],
        secondaryCtaHref: '/services',
        id: 61,
      },
      {
        key: 'acInstallation',
        url: '/images/services/service4.webp',
        stars: [{ id: 62 }, { id: 63 }, { id: 64 }, { id: 65 }, { id: 66 }],
        benefits: [
          { key: 'freeEstimate', id: 67 },
          { key: 'fullWarranty', id: 68 },
          { key: 'energyEfficiency', id: 69 },
          { key: 'smartIntegration', id: 70 },
          { key: 'certifiedInstall', id: 71 },
        ],
        secondaryCtaHref: '/services',
        id: 72,
      },
    ],
  },
  whyChooseUs: {
    sectionId: 'why-choose-us',
    headingId: 'home-why-choose-us-title',
    image: '/images/why-choose-us/why-choose-us.webp',
    primaryCtaHref: '/why-choose-us',
    reasons: [
      { key: 'trustedIndustryExperts', id: 73 },
      { key: 'fastReliableService', id: 74 },
      { key: 'fairTransparentPricing', id: 75 },
      { key: 'satisfactionYouCanTrust', id: 76 },
    ],
  },
  reviews: {
    sectionId: 'reviews',
    headingId: 'home-reviews-title',
    primaryCtaHref: '/reviews',
    image: '/images/reviews/review1.webp',
    comments: [
      {
        key: 'willBurnett',
        url: '/images/reviews/review2.webp',
        stars: [{ id: 77 }, { id: 78 }, { id: 79 }, { id: 80 }, { id: 81 }],
        id: 82,
      },
      {
        key: 'ginCowan',
        url: '/images/reviews/review3.webp',
        stars: [{ id: 83 }, { id: 84 }, { id: 85 }, { id: 86 }, { id: 87 }],
        id: 88,
      },
      {
        key: 'judyBarbour',
        url: '/images/reviews/review4.webp',
        stars: [{ id: 89 }, { id: 90 }, { id: 91 }, { id: 92 }, { id: 93 }],
        id: 94,
      },
      {
        key: 'rosieContreras',
        url: '/images/reviews/review5.webp',
        stars: [{ id: 95 }, { id: 96 }, { id: 97 }, { id: 98 }, { id: 99 }],
        id: 100,
      },
      {
        key: 'donnaWhite',
        url: '/images/reviews/review6.webp',
        stars: [{ id: 101 }, { id: 102 }, { id: 103 }, { id: 104 }, { id: 105 }],
        id: 106,
      },
      {
        key: 'marvinReyna',
        url: '/images/reviews/review7.webp',
        stars: [{ id: 107 }, { id: 108 }, { id: 109 }, { id: 110 }, { id: 111 }],
        id: 112,
      },
      {
        key: 'abbyMarcotte',
        url: '/images/reviews/review8.webp',
        stars: [{ id: 113 }, { id: 114 }, { id: 115 }, { id: 116 }, { id: 117 }],
        id: 118,
      },
      {
        key: 'vikkiCruz',
        url: '/images/reviews/review9.webp',
        stars: [{ id: 119 }, { id: 120 }, { id: 121 }, { id: 122 }, { id: 123 }],
        id: 124,
      },
      {
        key: 'sarahAlvarez',
        url: '/images/reviews/review10.webp',
        stars: [{ id: 125 }, { id: 126 }, { id: 127 }, { id: 128 }, { id: 129 }],
        id: 130,
      },
    ],
  },
  contact: {
    sectionId: 'contact',
    headingId: 'home-contact-title',
    image: '/images/contact/contact.webp',
    primaryCtaHref: '#contact',
  },
} as const
