/* ------------------------------------------------- INTERFACES-ITEMS ---------------------------------------------------------- */

/**
 * @description Defines a single link item rendered in footer link groups.
 * @interface MainLinkItem
 * @property {string} text - Visible label of the footer link.
 * @property {string} href - Destination URL or anchor.
 * @property {number} id - Stable render key for list rendering.
 */
export interface MainLinkItem {
  text: string
  href: string
  id: number
}

/**
 * @description Defines one contact-information item in the footer.
 * @interface ContactInformationItem
 * @property {string} text - Visible label for the contact row.
 * @property {string} href - Destination URL (`mailto`, `tel`, maps, etc.).
 * @property {string} type - Semantic type label (Address, Phone, Email, etc.).
 * @property {string} icon - Icon key associated with this entry.
 * @property {number} id - Stable render key.
 */
export interface ContactInformationItem {
  text: string
  href: string
  type: string
  icon: string
  id: number
}

/**
 * @description Defines one social network link in the footer.
 * @interface SocialNetworkItem
 * @property {string} href - Profile or channel URL.
 * @property {string} icon - Icon key for the social platform.
 * @property {string} name - Human-readable social network name.
 * @property {number} id - Stable render key.
 */
export interface SocialNetworkItem {
  href: string
  icon: string
  name: string
  id: number
}

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
 * @description Defines image badges used in the certified-experts block.
 * @interface CertifiedProps
 * @property {{ url: string; id: number }[]} imagesUrl - Collection of certification image entries.
 * @property {string} imagesUrl.url - URL for each certification image.
 * @property {number} imagesUrl.id - Stable render key for each image.
 */
export interface CertifiedProps {
  imagesUrl: { url: string; id: number }[]
}

/**
 * @description Defines license rows shown in the certified-experts block.
 * @interface LicenseProps
 * @property {{ text: string; id: number }[]} license - Collection of license labels and values.
 * @property {string} license.text - Label or value text for each row.
 * @property {number} license.id - Stable render key for each row.
 */
export interface LicenseProps {
  license: { text: string; id: number }[]
}

/**
 * @description Defines the complete certified-experts area rendered in the footer.
 * @interface CompanyCertifiedExpertsProps
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
export interface CompanyCertifiedExpertsProps {
  title: string
  description: string
  license: { text: string; id: number }[]
  imagesUrl: { url: string; id: number }[]
  mapsUrl: string
}

/**
 * @description Defines the company-info card rendered at the top of the footer.
 * @interface CompanyContactInformationProps
 * @property {string} url - Company logo URL.
 * @property {ContactInformationItem[]} contactInformation - Contact rows displayed in the card.
 */
export interface CompanyContactInformationProps {
  url: string
  contactInformation: ContactInformationItem[]
}

/**
 * @description Defines props for a single footer link element.
 * @interface MainLinkProps
 * @property {string} text - Link label.
 * @property {string} href - Destination URL or anchor.
 * @property {number} id - Stable render key.
 * @property {string[]} highlight - Labels that should receive highlight styling.
 */
export interface MainLinkProps {
  text: string
  href: string
  id: number
  highlight: string[]
}

/**
 * @description Defines props for grouped footer links.
 * @interface MainLinksProps
 * @property {MainLinkItem[]} links - Link entries rendered in footer columns.
 * @property {string[]} highlight - Labels that should receive highlight styling.
 */
export interface MainLinksProps {
  links: MainLinkItem[]
  highlight: string[]
}

/**
 * @description Defines props for footer social links.
 * @interface SocialNetworksProps
 * @property {SocialNetworkItem[]} socialNetworks - Social network entries rendered in the legal row.
 */
export interface SocialNetworksProps {
  socialNetworks: SocialNetworkItem[]
}

/**
 * @description Defines the full payload for the company-information footer organism.
 * @interface OurCompanyContactInformationProps
 * @property {object} logo - Logo configuration.
 * @property {string} logo.url - Company logo URL.
 * @property {ContactInformationItem[]} contactInformation - Contact rows.
 * @property {MainLinkItem[]} links - Footer link entries.
 * @property {string[]} highlight - Link labels to highlight.
 * @property {CompanyCertifiedExpertsProps} certifiedExperts - Certified-experts configuration block.
 */
export interface OurCompanyContactInformationProps {
  logo: { url: string }
  contactInformation: ContactInformationItem[]
  links: MainLinkItem[]
  highlight: string[]
  certifiedExperts: CompanyCertifiedExpertsProps
}

/**
 * @description Defines props for the legal-information footer row.
 * @interface LegalInformationProps
 * @property {string} copyright - Copyright statement.
 * @property {SocialNetworkItem[]} socialNetworks - Social links rendered with legal information.
 */
export interface LegalInformationProps {
  copyright: string
  socialNetworks: SocialNetworkItem[]
}

/* ------------------------------------------------- INTERFACE-ROOT ---------------------------------------------------------- */

/**
 * @description Root contract for passing footer data as a single object.
 * @interface FooterItemProps
 * @property {object} footer - Footer data payload.
 * @property {object} footer.logo - Logo configuration.
 * @property {string} footer.logo.url - Company logo URL.
 * @property {string} footer.copyright - Copyright statement.
 * @property {ContactInformationItem[]} footer.contactInformation - Contact rows.
 * @property {MainLinkItem[]} footer.links - Footer links.
 * @property {string[]} footer.highlight - Link labels to highlight.
 * @property {CompanyCertifiedExpertsProps} footer.certifiedExperts - Certified-experts configuration.
 * @property {SocialNetworkItem[]} footer.socialNetworks - Social network links.
 */
export interface FooterProps {
  footer: {
    logo: { url: string }
    copyright: string
    contactInformation: ContactInformationItem[]
    links: MainLinkItem[]
    highlight: string[]
    certifiedExperts: CompanyCertifiedExpertsProps
    socialNetworks: SocialNetworkItem[]
  }
}
