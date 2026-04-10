import { Providers } from '@/app/[locale]/providers'
import { Footer } from '@/common/footer/components/organisms/Footer'
import { NavigationBar } from '@/common/navigation-bar/components/organisms/NavigationBar'
import { layoutData } from '@/utils/data/static/en-US/layout'
import { Toast } from '@heroui/react'
import clsx from 'clsx'
import { Metadata } from 'next'
import { Poppins, Reenie_Beanie } from 'next/font/google'
import '../globals.css'

/**
 * @description Loads the Poppins font with specified weights and subsets for use in the application.
 * @constant
 * @type {ReturnType<typeof Poppins>}
 * @property {string} variable - The CSS variable name for the font.
 * @property {string[]} weight - The font weights to include (200–900).
 * @property {string[]} subsets - The language subsets to include (e.g., 'latin').
 * @property {string} display - The font display strategy ('swap').
 */
const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
})
/**
 * @description Loads the Reenie_Beanie font with specified weights and subsets for use in the application.
 * @constant
 * @type {ReturnType<typeof Reenie_Beanie>}
 * @property {string} variable - The CSS variable name for the font.
 * @property {string[]} weight - The font weights to include (400).
 * @property {string[]} subsets - The language subsets to include (e.g., 'latin').
 * @property {string} display - The font display strategy ('swap').
 */
const reenieBeanie = Reenie_Beanie({
  variable: '--font-reenie-beanie',
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

/**
 * @description Metadata object for the application, defining the title and description for SEO and browser display.
 * @constant
 * @interface Metadata
 * @property {string} title - The title of the application, displayed in the browser tab and search engine results.
 * @property {string} description - A brief description of the application, used for SEO and search engine snippets.
 */
export const metadata: Metadata = layoutData.metadata

/**
 * @description RootLayout component that wraps the entire application with global providers,
 * navigation, footer, and a floating WhatsApp button. It also applies global fonts and styles.
 * @public
 * @param {object} props - The props object containing the children to be rendered within the layout.
 * @param {React.ReactNode} props.children - The React node(s) to be rendered within the layout.
 * @returns {JSX.Element} The rendered RootLayout component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      suppressHydrationWarning
      lang={'en-US'}
      className={clsx(reenieBeanie.variable, poppins.className, poppins.variable)}
    >
      <body className={clsx('relative')}>
        <Providers
          themeProps={{
            attribute: 'class',
            defaultTheme: 'light',
            themes: ['dark', 'light'],
          }}
        >
          <NavigationBar navigationBar={layoutData.navigationBar} />
          {children}
          <Footer footer={layoutData.footer} />
          <Toast.Provider placement={'bottom end'} />
        </Providers>
      </body>
    </html>
  )
}
