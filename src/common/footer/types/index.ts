/* ------------------------------------------------- INTERFACES-ITEMS ---------------------------------------------------------- */

/**
 * @description Represents a main link item in the footer.
 * @export
 * @interface MainLinkItem
 * @property {string} text - The display text for the footer link.
 * @property {string} href - The URL the footer link points to.
 * @property {number} id - The unique identifier for the footer link item.
 */
export interface MainLinkItem {
  text: string
  href: string
  id: number
}

/**
 * @description Represents a legal statement item in the footer.
 * @export
 * @interface ContactInformationItem
 * @property {string} text - The display text for the contact information item.
 * @property {string} href - The URL the contact information item points to.
 * @property {string} type - The type of contact information (e.g., 'email', 'phone').
 * @property {string} icon - The icon associated with the contact information item.
 * @property {number} id - The unique identifier for the contact information item.
 */
export interface ContactInformationItem {
  text: string
  href: string
  type: string
  icon: string
  id: number
}

/**
 * @description Represents a social network item in the footer section.
 * @export
 * @interface SocialNetworkItem
 * @property {string} href - The URL the social network item points to.
 * @property {string} icon - The icon associated with the social network item.
 * @property {string} name - The name of the social network.
 * @property {number} id - The unique identifier for the social network item.
 */
export interface SocialNetworkItem {
  href: string
  icon: string
  name: string
  id: number
}

/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Represents the copyright information to be displayed in the footer.
 * @export
 * @interface CopyrightProps
 * @property {string} copyright - Text representing the copyright information.
 */
export interface CopyrightProps {
  copyright: string
}

/**
 * @description Represents the information for certified experts in the footer.
 * @export
 * @interface CertifiedProps
 * @property {{ url: string; id: number }[]} imagesUrl - An array of objects containing the URL and ID for the images.
 * @property {string} imagesUrl.url - The URL for each image to be displayed in the certified experts section.
 * @property {number} imagesUrl.id - The unique identifier for each image in the certified experts section.
 */
export interface CertifiedProps {
  imagesUrl: { url: string; id: number }[]
}

/**
 * @description Represents the license information to be displayed in the footer.
 * @export
 * @interface LicenseProps
 * @property {{ text: string; id: number }[]} license - An array of objects containing the text and ID for the license.
 * @property {string} license.text - The text for each license.
 * @property {number} license.id - The unique identifier for each license.
 */
export interface LicenseProps {
  license: { text: string; id: number }[]
}

/**
 * @description Represents the certified experts section in the footer.
 * @export
 * @interface CertifiedExpertsProps
 * @property {string} title - The title for the certified experts section.
 * @property {string} description - A brief description of the certified experts.
 * @property {{ text: string; id: number }[]} license - An array of objects containing the text and ID for the licenses.
 * @property {string} license.text - The text for each license.
 * @property {number} license.id - The unique identifier for each license.
 * @property {{ url: string; id: number }[]} imagesUrl - An array of objects containing the URL and ID for the images.
 * @property {string} imagesUrl.url - The URL for each image to be displayed in the certified experts section.
 * @property {number} imagesUrl.id - The unique identifier for each image in the certified experts section.
 * @property {string} mapsUrl - The URL for the embedded Google Maps location to be displayed in the footer.
 */
export interface CompanyCertifiedExpertsProps {
  title: string
  description: string
  license: { text: string; id: number }[]
  imagesUrl: { url: string; id: number }[]
  mapsUrl: string
}

/**
 * @description Represents the company contact information to be displayed in the footer.
 * @export
 * @interface CompanyContactInformationProps
 * @property {string} url - The URL for the company logo image.
 * @property {ContactInformationItem[]} contactInformation - An array of contact information items to be displayed in the footer.
 * @property {ContactInformationItem[]} contactInformation.text - The display text for the contact information item.
 * @property {ContactInformationItem[]} contactInformation.href - The URL the contact information item points to.
 * @property {ContactInformationItem[]} contactInformation.type - The type of contact information (e.g., 'email', 'phone').
 * @property {ContactInformationItem[]} contactInformation.icon - The icon associated with the contact information item.
 * @property {ContactInformationItem[]} contactInformation.id - The unique identifier for the contact information item.
 */
export interface CompanyContactInformationProps {
  url: string
  contactInformation: ContactInformationItem[]
}

/**
 * @description Represents a compound link item in the footer.
 * @export
 * @interface MainLinkProps
 * @property {string} text - The display text for the footer link.
 * @property {string} href - The URL the footer link points to.
 * @property {number} id - The unique identifier for the footer link item.
 * @property {string[]} highlight - An array of strings representing links that should be highlighted.
 */
export interface MainLinkProps {
  text: string
  href: string
  id: number
  highlight: string[]
}

/**
 * @description Represents the main links section in the footer.
 * @export
 * @interface MainLinksProps
 * @property {MainLinkItem[]} links - An array of footer link items to be displayed in the footer.
 * @property {MainLinkItem[]} links.text - The display text for the footer link.
 * @property {MainLinkItem[]} links.href - The URL the footer link points to.
 * @property {MainLinkItem[]} links.id - The unique identifier for the footer link item.
 * @property {string[]} highlight - An array of strings representing links that should be highlighted.
 */
export interface MainLinksProps {
  links: MainLinkItem[]
  highlight: string[]
}

/**
 * @description Represents the social network items to be displayed in the footer.
 * @export
 * @interface SocialNetworksProps
 * @property {SocialNetworkItem[]} socialNetworks - An array of social network items to be displayed in the footer.
 * @property {SocialNetworkItem[]} socialNetworks.href - The URL the social network item points to.
 * @property {SocialNetworkItem[]} socialNetworks.icon - The icon associated with the social network item.
 * @property {SocialNetworkItem[]} socialNetworks.name - The name of the social network.
 * @property {SocialNetworkItem[]} socialNetworks.id - The unique identifier for the social network item.
 */
export interface SocialNetworksProps {
  socialNetworks: SocialNetworkItem[]
}

/**
 * @description Represents the company about information.
 * @export
 * @interface OurCompanyContactInformationProps
 * @property {object} logo - The properties for the company logo displayed in the footer.
 * @property {string} logo.url - The URL for the company logo image.
 * @property {ContactInformationItem[]} contactInformation - An array of contact information items to be displayed in the footer.
 * @property {ContactInformationItem[]} contactInformation.text - The display text for the company contact information.
 * @property {ContactInformationItem[]} contactInformation.type - The type of contact information (e.g., 'email', 'phone').
 * @property {ContactInformationItem[]} contactInformation.icon - The icon associated with the company contact information item.
 * @property {ContactInformationItem[]} contactInformation.id - The unique identifier for the company contact information item.
 * @property {MainLinkItem[]} links - An array of footer link items to be displayed in the footer.
 * @property {MainLinkItem[]} links.text - The display text for the footer link.
 * @property {MainLinkItem[]} links.href - The URL the footer link points to.
 * @property {MainLinkItem[]} links.id - The unique identifier for the footer link item.
 * @property {string[]} highlight - An array of strings representing links that should be highlighted.
 * @property {CompanyCertifiedExpertsProps} certifiedExperts - The properties for the certified experts section in the footer.
 * @property {CompanyCertifiedExpertsProps} certifiedExperts.title - The title for the certified experts section.
 * @property {CompanyCertifiedExpertsProps} certifiedExperts.description - A brief description of the certified experts.
 * @property {CompanyCertifiedExpertsProps} certifiedExperts.license - An array of objects containing the text and ID for the licenses.
 * @property {CompanyCertifiedExpertsProps} certifiedExperts.license.text - The text representing the license information.
 * @property {CompanyCertifiedExpertsProps} certifiedExperts.license.id - The unique identifier for the license information.
 * @property {CompanyCertifiedExpertsProps} certifiedExperts.imagesUrl - An array of objects containing the URL and ID for the images.
 * @property {CompanyCertifiedExpertsProps} certifiedExperts.imagesUrl.url - The URL for the image to be displayed in the certified.
 * @property {CompanyCertifiedExpertsProps} certifiedExperts.imagesUrl.id - The unique identifier for the image in the certified.
 * @property {CompanyCertifiedExpertsProps} certifiedExperts.mapsUrl - The URL for the embedded Google Maps location to be displayed.
 */
export interface OurCompanyContactInformationProps {
  logo: { url: string }
  contactInformation: ContactInformationItem[]
  links: MainLinkItem[]
  highlight: string[]
  certifiedExperts: CompanyCertifiedExpertsProps
}

/**
 * @description: Represents the legal information section in the footer.
 * @export
 * @interface LegalInformationProps
 * @property {string} copyright - The copyright information to be displayed in the footer.
 * @property {SocialNetworkItem[]} socialNetworks - An array of social network items to be displayed in the footer.
 * @property {SocialNetworkItem[]} socialNetworks.href - The URL the social network item points to.
 * @property {SocialNetworkItem[]} socialNetworks.icon - The icon associated with the social network item.
 * @property {SocialNetworkItem[]} socialNetworks.name - The name of the social network.
 * @property {SocialNetworkItem[]} socialNetworks.id - The unique identifier for the social network item.
 */
export interface LegalInformationProps {
  copyright: string
  socialNetworks: SocialNetworkItem[]
}

/* ------------------------------------------------- INTERFACE-ROOT ---------------------------------------------------------- */

/**
 * @description Represents the properties for the footer component.
 * @export
 * @interface FooterItemProps
 * @property {object} footer - An object containing all the necessary information to render the footer component.
 * @property {object} footer.logo - The properties for the company logo displayed in the footer.
 * @property {string} footer.logo.url - The URL for the company logo image.
 * @property {string} footer.copyright - The copyright information to be displayed in the footer.
 * @property {ContactInformationItem[]} footer.contactInformation - An array of contact information items to be displayed in the footer.
 * @property {ContactInformationItem[]} footer.contactInformation.text - The display text for the company contact information.
 * @property {ContactInformationItem[]} footer.contactInformation.type - The type of contact information (e.g., 'email', 'phone').
 * @property {ContactInformationItem[]} footer.contactInformation.icon - The icon associated with the company contact information item.
 * @property {ContactInformationItem[]} footer.contactInformation.id - The unique identifier for the company contact information item.
 * @property {MainLinkItem[]} footer.links - An array of footer link items to be displayed in the footer.
 * @property {MainLinkItem[]} footer.links.text - The display text for the footer link.
 * @property {MainLinkItem[]} footer.links.href - The URL the footer link points to.
 * @property {MainLinkItem[]} footer.links.id - The unique identifier for the footer link item.
 * @property {string[]} footer.highlight - An array of strings representing highlighted text or keywords to be emphasized in the footer.
 * @property {CompanyCertifiedExpertsProps} footer.certifiedExperts - The properties for the certified experts section in the footer.
 * @property {CompanyCertifiedExpertsProps} footer.certifiedExperts.title - The title for the certified experts section.
 * @property {CompanyCertifiedExpertsProps} footer.certifiedExperts.description - A brief description of the certified experts.
 * @property {CompanyCertifiedExpertsProps} footer.certifiedExperts.license - An array of objects containing the text and ID for the licenses.
 * @property {CompanyCertifiedExpertsProps} footer.certifiedExperts.license.text - The text representing the license information.
 * @property {CompanyCertifiedExpertsProps} footer.certifiedExperts.license.id - The unique identifier for the license information.
 * @property {CompanyCertifiedExpertsProps} footer.certifiedExperts.imagesUrl - An array of objects containing the URL and ID for the images.
 * @property {CompanyCertifiedExpertsProps} footer.certifiedExperts.imagesUrl.url - The URL for the image to be displayed in the certified.
 * @property {CompanyCertifiedExpertsProps} footer.certifiedExperts.imagesUrl.id - The unique identifier for the image in the certified.
 * @property {CompanyCertifiedExpertsProps} footer.certifiedExperts.mapsUrl - The URL for the embedded Google Maps location to be displayed.
 * @property {SocialNetworkItem[]} footer.socialNetworks - An array of social network items to be displayed in the footer.
 * @property {SocialNetworkItem[]} footer.socialNetworks.href - The URL the social network item points to.
 * @property {SocialNetworkItem[]} footer.socialNetworks.icon - The icon associated with the social network item.
 * @property {SocialNetworkItem[]} footer.socialNetworks.name - The name of the social network.
 * @property {SocialNetworkItem[]} footer.socialNetworks.id - The unique identifier for the social network item.
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
