/**
 * @description This module exports an object containing data for the root layout.
 * @private
 * @function layoutData
 * @property {object} metadata - An object containing metadata for the application.
 * @return {object} An object containing translatable metadata, Open Graph, Twitter Card, and JSON-LD data.
 */
export const layoutData = {
  metadata: {
    title: {
      default: "Henry's Top Notch A/C & Heating | HVAC Services For Homes & Businesses",
      template: "%s | Henry's Top Notch A/C & Heating",
    },
    description:
      'Professional A/C and heating services for homes and businesses. We specialize in HVAC installation, repair, and maintenance, delivering reliable comfort, energy efficiency, and trusted service you can count on year-round.',
    keywords: [
      'HVAC services',
      'air conditioning repair',
      'AC installation',
      'heating services',
      'furnace repair',
      'HVAC maintenance',
      'commercial HVAC',
      'residential HVAC',
      'air conditioning service',
      'heating and cooling',
      'licensed HVAC contractors',
      'energy efficient HVAC',
    ],
    metadataBase: new URL('https://henrystopnotch.com'),
    alternates: {
      canonical: 'https://henrystopnotch.com/',
    },
  },
}
