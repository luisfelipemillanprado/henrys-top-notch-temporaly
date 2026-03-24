/**
 * @description This module exports an object containing static data for various sections of the home page.
 * @private
 * @function homeData
 * @property {object} hero - Contains data for the hero section, including title, description, CTAs, and others.
 * @property {object} hero.title - The main heading text displayed in the hero section.
 * @property {object} hero.description - A brief description supporting the hero title.
 * @property {object} hero.primaryCta - Contains text and href for the primary call-to-action button in the hero section.
 * @property {object} hero.primaryCta.text - The text displayed on the primary call-to-action button.
 * @property {object} hero.primaryCta.href - The URL that the primary call-to-action button links to.
 * @property {object} hero.secondaryCta - Contains text and href for the secondary call-to-action button in the hero section.
 * @property {object} hero.secondaryCta.text - The text displayed on the secondary call-to-action button.
 * @property {object} hero.secondaryCta.href - The URL that the secondary call-to-action button links to.
 * @property {array} hero.highlight - An array of strings representing highlighted text in the hero section.
 * @property {array} hero.gallery - An array of objects representing images in the hero gallery, each with a URL and ID.
 * @property {string} hero.gallery.url - The URL of the gallery image.
 * @property {number} hero.gallery.id - The unique identifier for the gallery image.
 * @property {array} trustedAndCertified - An array of objects representing trusted certifications, each with a URL, href, and ID.
 * @property {string} trustedAndCertified.url - The URL of the trusted certification image.
 * @property {string} trustedAndCertified.href - The URL that the trusted certification image links to.
 * @property {number} trustedAndCertified.id - The unique identifier for the trusted certification.
 * @property {object} whoWeAre - Contains data for the "Who We Are" section.
 * @property {string} whoWeAre.eyebrow - The eyebrow text for the "Who We Are" section.
 * @property {string} whoWeAre.title - The main title for the "Who We Are" section.
 * @property {string} whoWeAre.description - A brief description for the "Who We Are" section.
 * @property {object} whoWeAre.primaryCta - Contains text and href for the primary call-to-action button in the "Who We Are" section.
 * @property {string} whoWeAre.primaryCta.text - The text displayed on the primary call-to-action button in the "Who We Are" section.
 * @property {string} whoWeAre.primaryCta.href - The URL that the primary call-to-action button in the "Who We Are" section links to.
 * @property {string} whoWeAre.image - The URL of the image displayed in the "Who We Are" section.
 * @property {array} whoWeAre.benefits - An array of objects representing benefits listed in the "Who We Are" section.
 * @property {string} whoWeAre.benefits.text - The text describing a specific benefit in the "Who We Are" section.
 * @property {number} whoWeAre.benefits.id - The unique identifier for the benefit in the "Who We Are" section.
 * @property {object} bookingProcess - Contains data for the booking process section, including features and steps.
 * @property {string} bookingProcess.eyebrow - The eyebrow text for the booking process section.
 * @property {string} bookingProcess.title - The main title for the booking process section.
 * @property {string} bookingProcess.description - A brief description for the booking process section.
 * @property {string} bookingProcess.image - The URL of the image displayed in the booking process section.
 * @property {array} bookingProcess.features - An array of objects representing features listed in the booking process section.
 * @property {string} bookingProcess.features.icon - The name of the icon representing a specific feature in the booking process section.
 * @property {string} bookingProcess.features.title - The title describing a specific feature in the booking process section.
 * @property {string} bookingProcess.features.description - A brief description of a specific feature in the booking process section.
 * @property {number} bookingProcess.features.id - The unique identifier for the feature in the booking process section.
 * @property {array} bookingProcess.steps - An array of objects representing steps listed in the booking process section.
 * @property {string} bookingProcess.steps.url - The URL of the image representing a specific step in the booking process section.
 * @property {string} bookingProcess.steps.title - The title describing a specific step in the booking process section.
 * @property {string} bookingProcess.steps.description - A brief description of a specific step in the booking process section.
 * @property {number} bookingProcess.steps.id - The unique identifier for the step in the booking process section.
 * @return {object} An object containing static data for various sections of the home page.
 */
export const homeData = {
  hero: {
    title: 'Enjoy All Your Premium Heating System Services',
    description:
      'We offer advanced heating and cooling solutions that improve indoor comfort increase efficiency enhance air quality ensure reliable performance and maintain consistent climate control. From expert HVAC installations to repairs maintenance and system upgrades our expertise helps homes and businesses stay comfortable.',
    primaryCta: {
      text: 'Get Started',
      href: '#contact-us',
    },
    secondaryCta: {
      text: 'Our Services',
      href: '/services',
    },
    highlight: ['Let’s start your', 'appointment here!'],
    gallery: [
      { url: '/images/home/main-galleries/main-gallery1.webp', id: 1 },
      { url: '/images/home/main-galleries/main-gallery2.webp', id: 2 },
      { url: '/images/home/main-galleries/main-gallery3.webp', id: 3 },
      { url: '/images/home/main-galleries/main-gallery4.webp', id: 4 },
      { url: '/images/home/main-galleries/main-gallery5.webp', id: 5 },
      { url: '/images/home/main-galleries/main-gallery6.webp', id: 6 },
    ],
  },
  trustedAndCertified: [
    {
      url: '/images/home/trusted-certified/trusted-certified7.webp',
      href: 'https://bcert.me/syfzztge',
      id: 7,
    },
    {
      url: '/images/home/trusted-certified/trusted-certified6.webp',
      href: '/',
      id: 8,
    },
    {
      url: '/images/home/trusted-certified/trusted-certified8.webp',
      href: 'https://bcert.me/sujfjotr',
      id: 9,
    },
    {
      url: '/images/home/trusted-certified/trusted-certified4.webp',
      href: 'https://www.bbb.org/us/tx/houston/profile/residential-air-conditioning-contractors/ace-comfort-air-conditioning-heating-0915-90044634',
      id: 10,
    },
    {
      url: '/images/home/trusted-certified/trusted-certified1.webp',
      href: 'https://www.facebook.com/HenrysTopNotch?mibextid=ZbWKwL',
      id: 11,
    },
    {
      url: '/images/home/trusted-certified/trusted-certified5.webp',
      href: '/',
      id: 12,
    },
    {
      url: '/images/home/trusted-certified/trusted-certified3.webp',
      href: 'https://maps.app.goo.gl/7U3YQJ93nK9Ms2999',
      id: 13,
    },
    {
      url: '/images/home/trusted-certified/trusted-certified2.webp',
      href: 'https://www.yelp.com/biz/henrys-top-notch-air-conditioning-and-heating-houston-2',
      id: 14,
    },
  ],
  whoWeAre: {
    eyebrow: 'ABOUT COMPANY',
    title: 'Efficient Heating And Cooling Systems.',
    description:
      'At Henry’s Top Notch Air Conditioning & Heating Co, we are a family-owned and operated business dedicated to keeping homes and businesses comfortable. With 21 years of HVAC experience, our trusted team delivers reliable heating and cooling solutions with honest service, quality workmanship, and dependable results year-round.',
    primaryCta: {
      text: 'Learn More',
      href: '/about-us',
    },
    image: '/images/home/about-company/about-company.webp',
    benefits: [
      { text: 'Just On Time.', id: 15 },
      { text: '24-7 Support.', id: 16 },
      { text: 'Affordable HVAC Solutions.', id: 17 },
      { text: 'Energy-Efficient Systems.', id: 18 },
      { text: 'Expert Installation & Repair.', id: 19 },
      { text: 'Comfort for Homes & Businesses.', id: 20 },
    ],
  },
  bookingProcess: {
    eyebrow: 'BOOKING PROCESS',
    title: 'Our Simple And Fast Booking Process.',
    description:
      'At Henry’s Top Notch Air Conditioning & Heating Co, our simple booking process is designed to make getting started easy and stress-free. We focus on convenience, flexibility, and reliability, ensuring every step feels smooth. Our goal is to provide a seamless experience that helps you quickly connect with trusted HVAC professionals.',
    image: '/images/home/booking-process/booking-process1.webp',
    features: [
      {
        icon: 'emergency',
        title: 'Energy-Efficient Systems.',
        description:
          'High efficiency HVAC systems reduce energy consumption while maintaining stable, optimal, and consistent indoor comfort levels.',
        id: 21,
      },
      {
        icon: 'experts',
        title: 'Expert Installation & Repair.',
        description:
          'Our HVAC technicians perform precise installations and reliable repairs, ensuring optimal system performance always consistently.',
        id: 22,
      },
      {
        icon: 'comfort',
        title: 'Comfort For Homes & Businesses.',
        description:
          'Advanced climate control solutions keep residential and commercial spaces perfectly comfortable throughout every season year round.',
        id: 23,
      },
    ],
    steps: [
      {
        url: '/images/home/booking-process/booking-process2.webp',
        title: 'Book Your Service.',
        description:
          'Schedule your service easily by choosing a convenient date and time that fits your availability perfectly every time without hassle or delays quickly and efficiently',
        id: 24,
      },
      {
        url: '/images/home/booking-process/booking-process3.webp',
        title: 'We Arrive On Time.',
        description:
          'Receive punctual service from our technicians who respect your schedule and deliver reliable HVAC solutions every visit consistently and always professionally.',
        id: 25,
      },
      {
        url: '/images/home/booking-process/booking-process4.webp',
        title: 'Affordable Pricing.',
        description:
          'Enjoy transparent and affordable pricing with no hidden fees, giving you complete confidence and clear expectations before any service begins smoothly today.',
        id: 26,
      },
      {
        url: '/images/home/booking-process/booking-process5.webp',
        title: 'Satisfaction Guaranteed.',
        description:
          'Your satisfaction is guaranteed through reliable service and consistent results that meet your expectations perfectly every time without stress or delays always.',
        id: 27,
      },
    ],
  },
  professionalServices: {
    eyebrow: 'All OUR SERVICES',
    title: 'Access Expert HVAC Services Today.',
    description:
      'Explore our full range of HVAC services designed to meet your comfort needs year-round. Our experienced team provides reliable heating and cooling solutions, focusing on efficiency, performance, and long-term results, ensuring your home or business stays comfortable, safe, and operating smoothly in every season with consistent quality.',
    primaryCta: {
      text: 'Learn More',
      href: '/about-us',
    },
    services: [
      {
        url: '/images/home/booking-process/booking-process5.webp',
        title: 'AC Installation.',
        description: '',
        secondaryCta: {
          text: 'BOOK NOW',
          href: '/services',
        },
        id: 28,
      },
      {
        url: '/images/home/booking-process/booking-process5.webp',
        title: 'HVAC System Maintenance.',
        description: '',
        secondaryCta: {
          text: 'BOOK NOW',
          href: '/services',
        },
        id: 29,
      },
      {
        url: '/images/home/booking-process/booking-process5.webp',
        title: 'HVAC System Installation.',
        description: '',
        secondaryCta: {
          text: 'BOOK NOW',
          href: '/services',
        },
        id: 30,
      },
      {
        url: '/images/home/booking-process/booking-process5.webp',
        title: 'HVAC System Repair.',
        description: '',
        secondaryCta: {
          text: 'BOOK NOW',
          href: '/services',
        },
        id: 31,
      },
      {
        url: '/images/home/booking-process/booking-process5.webp',
        title: 'Air Quality Solutions.',
        description: '',
        secondaryCta: {
          text: 'BOOK NOW',
          href: '/services',
        },
        id: 32,
      },
      {},
    ],
  },
}
