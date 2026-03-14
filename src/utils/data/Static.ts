/**
 * @description This file contains static data for the application.
 * @public
 * @return {object} An object containing static data for various sections of the application.
 */
export const staticData = {
  home: {
    gallery: [
      { url: '/images/home/main-galleries/main-gallery1.webp', id: 1 },
      { url: '/images/home/main-galleries/main-gallery2.webp', id: 2 },
      { url: '/images/home/main-galleries/main-gallery3.webp', id: 3 },
      { url: '/images/home/main-galleries/main-gallery4.webp', id: 4 },
      { url: '/images/home/main-galleries/main-gallery5.webp', id: 5 },
      { url: '/images/home/main-galleries/main-gallery6.webp', id: 6 },
    ],
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
  },
  navigationBar: {
    logo: { url: '/images/home/logo-company/logo-company.webp' },
    getStartedButton: { text: 'Get Started', href: '#contactus' },
    links: [
      { text: 'Home', href: '/', icon: 'home', id: 15 },
      { text: 'About Us', href: '#about-us', icon: 'about-us', id: 16 },
      { text: 'Services', href: '#services', icon: 'services', id: 17 },
      { text: 'Areas', href: '#areas', icon: 'areas', id: 18 },
      { text: 'Process', href: '#process', icon: 'process', id: 19 },
      { text: 'Reviews', href: '#reviews', icon: 'reviews', id: 20 },
      { text: 'Offers', href: '#offers', icon: 'offers', id: 21 },
      { text: 'Blogs', href: '#blogs', icon: 'blogs', id: 22 },
    ],
  },
  titles: {
    main: 'Enjoy All Your Premium Heating System Services',
    secondary: [
      'Explore Our Professional Services.',
      'Crafting Excellence Through Process.',
      'We Work For Clients Around The World.',
      'Shaping Success Through Every Project.',
      'Customer Experiences & Testimonials.',
      'Customer Frequently Asked Questions.',
      'Ready To Elevate Your Firm? Take The Next Step With Us!',
    ],
  },
  sectionDescription: {
    main: 'We offer advanced heating and cooling solutions that improve indoor comfort increase efficiency enhance air quality ensure reliable performance and maintain consistent climate control. From expert HVAC installations to repairs maintenance and system upgrades our expertise helps homes and businesses stay comfortable.',
    secondary: [
      'Our solutions optimize operations, strengthen collaboration, and consistently deliver measurable results. Each implementation is carefully designed to reduce complexity, increase impact, and effectively support your evolving strategic business objectives while ensuring long-term sustainability and measurable organizational performance.',
      'Our process streamlines workflows, enhances collaboration, and consistently achieves measurable outcomes. Each stage is meticulously designed to reduce complexity, strengthen efficiency, and fully align with your strategic business objectives while driving sustainable performance, operational clarity, and lasting enterprise growth.',
      'Our global expansion reflects our unwavering commitment to delivering innovative, high-quality solutions and services that enable businesses worldwide to grow, collaborate, and prosper beyond diverse geographical boundaries across international markets sustainably.',
      'Our portfolio highlights solutions that elevate performance, enhance collaboration, and deliver measurable impact. Each project is carefully crafted to simplify challenges, increase efficiency, and effectively support your strategic business goals while strengthening operational alignment and driving sustainable long-term enterprise growth.',
      'Our customers share their genuine experiences, highlighting our unwavering commitment to exceptional service, reliable solutions, and measurable results. Their testimonials offer meaningful insight into the quality and trust that define our work while reinforcing credibility, strengthening reputation, and demonstrating satisfaction.',
      'Do you have questions or require further information about our services? Review our extensive FAQs for prompt clarification or communicate directly with our expert support team. We remain consistently accessible to deliver detailed technical guidance and confidently support you throughout the entire engagement process comprehensively.',
      'Innovative software for startups, optimizing processes, improving productivity, and facilitating management with reliable and scalable tools that drive success.',
    ],
  },
  callToAction: {
    reusableButton: {
      text: ['Our Services', 'More Details', 'More Projects', 'All Comments', 'Ask Us Now'],
      href: ['/services', '/process', '/projects', '/reviews', '/frequently-asked-questions'],
    },
    getStartedButton: { text: ['Get Started'], href: ['#contactus'] },
    actionHighlight: { firstText: 'Let’s start your', secondText: 'appointment here!' },
  },
  footer: {
    logo: { url: '/images/home/logo-company/logo-company.webp' },
    copyright: `Copyright & design by \u00A9 ${new Date().getFullYear()} Remiux LLC. All rights reserved.`,
    contactInformation: [
      {
        text: 'Houston, Texas, USA',
        href: 'https://maps.google.com/?q=Houston,TX,USA',
        type: 'Address',
        icon: 'location',
        id: 62,
      },
      {
        text: '+1 (281) 442-7230',
        href: 'tel:+12814427230',
        type: 'Phone',
        icon: 'phone',
        id: 64,
      },
      {
        text: 'Mon - Sat (24 hours)',
        href: '#',
        type: 'Schedule',
        icon: 'clock',
        id: 65,
      },
      {
        text: 'henrystopnotchair@live.com',
        href: 'mailto:henrystopnotchair@live.com',
        type: 'Email',
        icon: 'email',
        id: 63,
      },
    ],
    links: [
      // Quick Links
      { text: 'Quick Links', href: '#', id: 23 },
      { text: 'Home', href: '/', id: 24 },
      { text: 'About Us', href: '/', id: 25 },
      { text: 'All Areas', href: '/', id: 26 },
      { text: 'Our Process', href: '/', id: 27 },
      { text: 'Reviews', href: '/', id: 28 },
      { text: 'Special Offers', href: '/', id: 29 },
      { text: 'Blogs', href: '/', id: 30 },
      // Our Services
      { text: 'Our Services', href: '#', id: 31 },
      { text: 'HVAC System Maintenance', href: '/', id: 32 },
      { text: 'HVAC System Installation', href: '/', id: 33 },
      { text: 'HVAC System Repair', href: '/', id: 34 },
      { text: 'Air Quality Solutions', href: '/', id: 35 },
      { text: 'AC Installation', href: '/', id: 36 },
      { text: 'Breathe Easy Bundle', href: '/', id: 37 },
      { text: 'Cool Comfort Deal', href: '/', id: 38 },
    ],
    highlight: ['Quick Links', 'Our Services'],
    certifiedExperts: {
      title: 'Licensed & Certified HVAC Experts',
      description: `At Henry's Top Notch A/C & Heating Company, we take pride in having a team of highly trained HVAC professionals.`,
      license: [
        { text: 'CONTRACTOR LICENSE:', id: 68 },
        { text: 'TACL B29190', id: 69 },
      ],
      imagesUrl: [
        { url: '/images/home/trusted-certified/trusted-certified4.webp', id: 66 },
        { url: '/images/home/trusted-certified/trusted-certified6.webp', id: 67 },
      ],
      mapsUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.6068672945!2d-95.350747!3d29.875609599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b778421d4375%3A0xeb2ba56539e71463!2s2228%20William%20Tell%20St%2C%20Houston%2C%20TX%2077093%2C%20EE.%20UU.!5e0!3m2!1ses!2smx!4v1773350497868!5m2!1ses!2smx',
    },
    socialNetworks: [
      {
        href: 'https://facebook.com/profile.php?id=61586744246927',
        icon: 'facebook',
        name: 'Facebook',
        id: 49,
      },
      {
        href: 'https://twitter.com/remiuxsoft',
        icon: 'twitter',
        name: 'Twitter',
        id: 44,
      },
      {
        href: 'https://youtube.com/remiuxsoft',
        icon: 'youtube',
        name: 'YouTube',
        id: 46,
      },
      {
        href: 'https://instagram.com/remiuxsoft',
        icon: 'instagram',
        name: 'Instagram',
        id: 45,
      },
    ],
  },
  contactUs: {
    href: `https://wa.me/${process.env.WHATSAPP_CONTACT_NUMBER}?text=${encodeURIComponent(process.env.WHATSAPP_CONTACT_MESSAGE ?? '')}`,
  },
}
