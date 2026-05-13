/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Defines copyright text displayed in legal footer row.
 * @interface CopyrightProps
 * @property {string} copyright - Localized copyright statement.
 */
export interface CopyrightProps {
  copyright: string
}

/**
 * @description Defines image badges used in the Certified / Certifieds block.
 * @interface CertifiedProps
 * @property {{ url: string; id: number }[]} imagesUrl - Collection of certification image entries.
 * @property {string} imagesUrl.url - URL for each certification image.
 * @property {number} imagesUrl.id - Stable render key for each image.
 */
export interface CertifiedProps {
  imagesUrl: { url: string; id: number }[]
}

/**
 * @description Defines license rows shown in the Certifieds block.
 * @interface LicenseProps
 * @property {{ text: string; id: number }[]} license - Collection of license labels and values.
 * @property {string} license.text - Label or value text for each row.
 * @property {number} license.id - Stable render key for each row.
 */
export interface LicenseProps {
  license: { text: string; id: number }[]
}

/**
 * @description Defines the full Certifieds organism payload.
 * @interface CertifiedsProps
 * @property {string} title - Section title.
 * @property {string} description - Short description under the title.
 * @property {{ text: string; id: number }[]} license - License rows rendered as label/value items.
 * @property {string} license.text - Label or value text.
 * @property {number} license.id - Stable render key for each license row.
 * @property {{ url: string; id: number }[]} imagesUrl - Certification badges.
 * @property {string} imagesUrl.url - URL for each badge image.
 * @property {number} imagesUrl.id - Stable render key for each badge.
 * @property {string} mapsUrl - Google Maps embed URL.
 */
export interface CertifiedsProps {
  title: string
  description: string
  license: { text: string; id: number }[]
  imagesUrl: { url: string; id: number }[]
  mapsUrl: string
}

/**
 * @description Props for a single contact row rendered by Contact.
 * @interface ContactProps
 * @property {string} text - Visible label for the contact row.
 * @property {string} href - Destination URL (`mailto`, `tel`, maps, etc.).
 * @property {string} type - Semantic type label (Address, Phone, Email, etc.).
 * @property {string} icon - Icon key associated with this entry.
 * @property {number} id - Stable render key.
 */
export interface ContactProps {
  text: string
  href: string
  type: string
  icon: string
  id: number
}

/**
 * @description Defines the contacts card rendered by Contacts.
 * @interface ContactsProps
 * @property {string} url - Logo URL.
 * @property {object[]} contactInformation - Contact rows displayed in the card.
 * @property {string} contactInformation.text - Visible label for the contact row.
 * @property {string} contactInformation.href - Destination URL (`mailto`, `tel`, maps, etc.).
 * @property {string} contactInformation.type - Semantic type label (Address, Phone, Email, etc.).
 * @property {string} contactInformation.icon - Icon key associated with this entry.
 * @property {number} contactInformation.id - Stable render key.
 */
export interface ContactsProps {
  url: string
  contactInformation: {
    text: string
    href: string
    type: string
    icon: string
    id: number
  }[]
}

/**
 * @description Defines props for a single footer link rendered by Link.
 * @interface LinkProps
 * @property {string} text - Link label.
 * @property {string} href - Destination URL or anchor.
 * @property {number} id - Stable render key.
 * @property {string[]} highlight - Labels that should receive highlight styling.
 */
export interface LinkProps {
  text: string
  href: string
  id: number
  highlight: string[]
}

/**
 * @description Defines props for the Links molecule.
 * @interface LinksProps
 * @property {object[]} links - Link entries rendered in footer columns.
 * @property {string} links.text - Visible label of the footer link.
 * @property {string} links.href - Destination URL or anchor.
 * @property {number} links.id - Stable render key for list rendering.
 * @property {string[]} highlight - Labels that should receive highlight styling.
 */
export interface LinksProps {
  links: {
    text: string
    href: string
    id: number
  }[]
  highlight: string[]
}

/**
 * @description Defines props for the Networks molecule.
 * @interface NetworksProps
 * @property {object[]} networks - Social network entries rendered in the legal row.
 * @property {string} networks.href - Profile or channel URL.
 * @property {string} networks.icon - Icon key for the social platform.
 * @property {string} networks.name - Human-readable social network name.
 * @property {number} networks.id - Stable render key.
 */
export interface NetworksProps {
  networks: {
    href: string
    icon: string
    name: string
    id: number
  }[]
}

/**
 * @description Props for a single social network entry rendered by Network.
 * @interface NetworkProps
 * @property {string} href - Profile or channel URL.
 * @property {string} icon - Icon key for the social platform.
 * @property {string} name - Human-readable social network name.
 * @property {number} id - Stable render key.
 */
export interface NetworkProps {
  href: string
  icon: string
  name: string
  id: number
}

/**
 * @description Defines the full payload for OurTop.
 * @interface OurTopProps
 * @property {object} logo - Logo configuration.
 * @property {string} logo.url - Company logo URL.
 * @property {object[]} contactInformation - Contact rows.
 * @property {string} contactInformation.text - Visible label for the contact row.
 * @property {string} contactInformation.href - Destination URL.
 * @property {string} contactInformation.type - Semantic type label.
 * @property {string} contactInformation.icon - Icon key.
 * @property {number} contactInformation.id - Stable render key.
 * @property {object[]} links - Link entries.
 * @property {string} links.text - Link label.
 * @property {string} links.href - Link destination.
 * @property {number} links.id - Stable render key.
 * @property {string[]} highlight - Link labels to highlight.
 * @property {object} certifiedExperts - Certifieds configuration block.
 * @property {string} certifiedExperts.title - Section title.
 * @property {string} certifiedExperts.description - Short description under the title.
 * @property {object[]} certifiedExperts.license - License rows.
 * @property {string} certifiedExperts.license.text - Label or value text.
 * @property {number} certifiedExperts.license.id - Stable render key for each license row.
 * @property {object[]} certifiedExperts.imagesUrl - Certification badges.
 * @property {string} certifiedExperts.imagesUrl.url - URL for each badge image.
 * @property {number} certifiedExperts.imagesUrl.id - Stable render key for each badge.
 * @property {string} certifiedExperts.mapsUrl - Google Maps embed URL.
 */
export interface OurTopProps {
  logo: { url: string }
  contactInformation: {
    text: string
    href: string
    type: string
    icon: string
    id: number
  }[]
  links: {
    text: string
    href: string
    id: number
  }[]
  highlight: string[]
  certifiedExperts: {
    title: string
    description: string
    license: { text: string; id: number }[]
    imagesUrl: { url: string; id: number }[]
    mapsUrl: string
  }
}

/**
 * @description Defines props for OurBottom.
 * @interface OurBottomProps
 * @property {string} copyright - Copyright statement.
 * @property {object[]} networks - Social links rendered with bottom component.
 * @property {string} networks.href - Profile or channel URL.
 * @property {string} networks.icon - Icon key for the social platform.
 * @property {string} networks.name - Human-readable social network name.
 * @property {number} networks.id - Stable render key.
 */
export interface OurBottomProps {
  copyright: string
  networks: {
    href: string
    icon: string
    name: string
    id: number
  }[]
}
