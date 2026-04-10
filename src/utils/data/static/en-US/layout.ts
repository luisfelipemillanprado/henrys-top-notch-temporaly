/**
 * @description This module exports an object containing data for the root layout.
 * @private
 * @function layoutAssets
 * @property {object} navigationBar - An object containing data for the navigation bar.
 * @property {object} contactForm - An object containing data for the contact form.
 * @property {object} footer - An object containing data for the footer.
 * @return {object} An object containing navigation bar, contact form, and footer data.
 */
export const layoutData = {
  navigationBar: {
    logo: { url: '/images/logo-company/logo-company.webp' },
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
  contactForm: {
    fields: [
      { key: 'name', type: 'text', icon: 'user' },
      { key: 'email', type: 'email', icon: 'email' },
      { key: 'phone', type: 'tel', icon: 'phone' },
    ],
    problemDescription: { key: 'problemDescription', charactersLimit: 400 },
  },
  footer: {
    logo: { url: '/images/logo-company/logo-company.webp' },
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
      { text: 'All About Us', href: '/', id: 29 },
      { text: 'Home', href: '/', id: 24 },
      { text: 'All Areas', href: '/', id: 25 },
      { text: 'Our Blogs', href: '/', id: 26 },
      { text: 'All Reviews', href: '/', id: 27 },
      { text: 'Our Process', href: '/', id: 28 },
      { text: 'Special Offers', href: '/', id: 30 },
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
      title: 'Licensed & Certified HVAC Experts.',
      description: `At Henry's Top Notch A/C & Heating Company, we take pride in having a team of highly trained HVAC professionals.`,
      license: [
        { text: 'CONTRACTOR LICENSE:', id: 68 },
        { text: 'TACL B29190', id: 69 },
      ],
      imagesUrl: [
        { url: '/images/trusted-certified/trusted-certified4.webp', id: 66 },
        { url: '/images/trusted-certified/trusted-certified8.webp', id: 68 },
        { url: '/images/trusted-certified/trusted-certified6.webp', id: 67 },
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
}
