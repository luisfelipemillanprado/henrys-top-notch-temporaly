/**
 * @description This module exports an object containing assets of the home page.
 * @private
 * @function homeAssets
 * @property {object} hero - Contains data for the hero section.
 * @property {array} trustedAndCertified - An array of objects representing trusted and certified logos with URLs and IDs.
 * @property {object} whoWeAre - Contains data for the "Who We Are" section.
 * @property {object} bookingProcess - Contains data for the booking process section.
 * @property {object} professionalServices - Contains data for the professional services section.
 * @property {object} whyChooseUs - Contains data for the "Why Choose Us" section.
 * @property {object} customerTestimonials - Contains data for the customer testimonials section.
 * @property {object} contactUs - Contains data for the contact us section, including form configuration and notifications.
 * @return {object} An object containing static data for various sections of the home page.
 */
export const homeAssets = {
  hero: {
    sectionId: 'hero',
    headingId: 'home-hero-title',
    primaryCtaHref: '#contact-us',
    secondaryCtaHref: '/services',
    gallery: [
      { url: '/images/main-galleries/main-gallery1.webp', id: 1 },
      { url: '/images/main-galleries/main-gallery2.webp', id: 2 },
      { url: '/images/main-galleries/main-gallery3.webp', id: 3 },
      { url: '/images/main-galleries/main-gallery4.webp', id: 4 },
      { url: '/images/main-galleries/main-gallery5.webp', id: 5 },
      { url: '/images/main-galleries/main-gallery6.webp', id: 6 },
    ],
  },
  trustedAndCertified: [
    { url: '/images/trusted-certified/trusted-certified7.webp', id: 7 },
    { url: '/images/trusted-certified/trusted-certified6.webp', id: 8 },
    { url: '/images/trusted-certified/trusted-certified8.webp', id: 9 },
    { url: '/images/trusted-certified/trusted-certified4.webp', id: 10 },
    { url: '/images/trusted-certified/trusted-certified1.webp', id: 11 },
    { url: '/images/trusted-certified/trusted-certified5.webp', id: 12 },
    { url: '/images/trusted-certified/trusted-certified3.webp', id: 13 },
    { url: '/images/trusted-certified/trusted-certified2.webp', id: 14 },
  ],
  whoWeAre: {
    sectionId: 'about-us',
    headingId: 'home-about-us-title',
    image: '/images/about-company/about-company.webp',
    primaryCtaHref: '/about-us',
    benefits: [
      { key: 'justOnTime', id: 15 },
      { key: 'support247', id: 16 },
      { key: 'affordableHvacSolutions', id: 17 },
      { key: 'energyEfficientSystems', id: 18 },
      { key: 'expertInstallationRepair', id: 19 },
      { key: 'comfortForHomesBusinesses', id: 20 },
    ],
  },
  bookingProcess: {
    sectionId: 'process',
    headingId: 'home-process-title',
    image: '/images/booking-process/booking-process1.webp',
    primaryCtaHref: '/about-us',
    features: [
      { key: 'energyEfficientSystems', href: '/about-us', icon: 'emergency', id: 21 },
      { key: 'expertInstallationRepair', href: '/about-us', icon: 'experts', id: 22 },
      { key: 'comfortForHomesBusinesses', href: '/about-us', icon: 'comfort', id: 23 },
      { key: 'personalizedCustomerCare', href: '/about-us', icon: 'customer', id: 24 },
    ],
    steps: [
      { key: 'bookYourService', url: '/images/booking-process/booking-process2.webp', id: 25 },
      { key: 'weArriveOnTime', url: '/images/booking-process/booking-process3.webp', id: 26 },
      { key: 'affordablePricing', url: '/images/booking-process/booking-process4.webp', id: 27 },
      { key: 'satisfactionGuaranteed', url: '/images/booking-process/booking-process5.webp', id: 28 },
    ],
  },
  professionalServices: {
    sectionId: 'services',
    headingId: 'home-services-title',
    primaryCtaHref: '/services',
    services: [
      {
        key: 'maintenance',
        url: '/images/professional-services/professional-services1.webp',
        stars: [{ id: 29 }, { id: 30 }, { id: 31 }, { id: 32 }, { id: 33 }],
        benefits: [
          { key: 'freeEstimate', id: 34 },
          { key: 'allWarranty', id: 35 },
          { key: 'seasonalTuneUp', id: 36 },
          { key: 'filterChange', id: 37 },
          { key: 'energySavings', id: 38 },
        ],
        secondaryCtaHref: '/services',
        id: 39,
      },
      {
        key: 'repair',
        url: '/images/professional-services/professional-services2.webp',
        stars: [{ id: 40 }, { id: 41 }, { id: 42 }, { id: 43 }, { id: 44 }],
        benefits: [
          { key: 'freeEstimate', id: 45 },
          { key: 'allWarranty', id: 46 },
          { key: 'sameDayRepair', id: 47 },
          { key: 'emergencyService', id: 48 },
          { key: 'quickDiagnosis', id: 49 },
        ],
        secondaryCtaHref: '/services',
        id: 50,
      },
      {
        key: 'installation',
        url: '/images/professional-services/professional-services3.webp',
        stars: [{ id: 51 }, { id: 52 }, { id: 53 }, { id: 54 }, { id: 55 }],
        benefits: [
          { key: 'freeEstimate', id: 56 },
          { key: 'allWarranty', id: 57 },
          { key: 'properSizing', id: 58 },
          { key: 'efficientUnits', id: 59 },
          { key: 'expertInstall', id: 60 },
        ],
        secondaryCtaHref: '/services',
        id: 61,
      },
      {
        key: 'acInstallation',
        url: '/images/professional-services/professional-services4.webp',
        stars: [{ id: 62 }, { id: 63 }, { id: 64 }, { id: 65 }, { id: 66 }],
        benefits: [
          { key: 'freeEstimate', id: 67 },
          { key: 'allWarranty', id: 68 },
          { key: 'highEfficiency', id: 69 },
          { key: 'smartSetup', id: 70 },
          { key: 'betterAirflow', id: 71 },
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
    primaryCtaHref: '/about-us',
    reasons: [
      { key: 'trustedIndustryExperts', id: 73 },
      { key: 'fastReliableService', id: 74 },
      { key: 'fairTransparentPricing', id: 75 },
      { key: 'satisfactionYouCanTrust', id: 76 },
    ],
  },
  customerTestimonials: {
    sectionId: 'testimonials',
    headingId: 'home-testimonials-title',
    primaryCtaHref: 'https://maps.app.goo.gl/PJM12ME267TwtviD7',
    image: '/images/customer-testimonials/customer-testimonials.webp',
    testimonials: [
      {
        key: 'willBurnett',
        url: '/images/customer-testimonials/customer/customer1.webp',
        stars: [{ id: 77 }, { id: 78 }, { id: 79 }, { id: 80 }, { id: 81 }],
        id: 82,
      },
      {
        key: 'ginCowan',
        url: '/images/customer-testimonials/customer/customer2.webp',
        stars: [{ id: 83 }, { id: 84 }, { id: 85 }, { id: 86 }, { id: 87 }],
        id: 88,
      },
      {
        key: 'judyBarbour',
        url: '/images/customer-testimonials/customer/customer3.webp',
        stars: [{ id: 89 }, { id: 90 }, { id: 91 }, { id: 92 }, { id: 93 }],
        id: 94,
      },
      {
        key: 'rosieContreras',
        url: '/images/customer-testimonials/customer/customer4.webp',
        stars: [{ id: 95 }, { id: 96 }, { id: 97 }, { id: 98 }, { id: 99 }],
        id: 100,
      },
      {
        key: 'donnaWhite',
        url: '/images/customer-testimonials/customer/customer5.webp',
        stars: [{ id: 101 }, { id: 102 }, { id: 103 }, { id: 104 }, { id: 105 }],
        id: 106,
      },
      {
        key: 'marvinReyna',
        url: '/images/customer-testimonials/customer/customer6.webp',
        stars: [{ id: 107 }, { id: 108 }, { id: 109 }, { id: 110 }, { id: 111 }],
        id: 112,
      },
      {
        key: 'abbyMarcotte',
        url: '/images/customer-testimonials/customer/customer7.webp',
        stars: [{ id: 113 }, { id: 114 }, { id: 115 }, { id: 116 }, { id: 117 }],
        id: 118,
      },
      {
        key: 'vikkiCruz',
        url: '/images/customer-testimonials/customer/customer8.webp',
        stars: [{ id: 119 }, { id: 120 }, { id: 121 }, { id: 122 }, { id: 123 }],
        id: 124,
      },
      {
        key: 'sarahAlvarez',
        url: '/images/customer-testimonials/customer/customer9.webp',
        stars: [{ id: 125 }, { id: 126 }, { id: 127 }, { id: 128 }, { id: 129 }],
        id: 130,
      },
    ],
  },
  contactUs: {
    sectionId: 'contact-us',
    headingId: 'home-contact-us-title',
    image: '/images/contact-us/contact-us.webp',
    primaryCtaHref: '#contact-us',
  },
} as const
