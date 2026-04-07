import formats from '@/i18n/request'
import { routing } from '@/i18n/routing'
import messages from './messages/en.json'

/**
 * This module is used to declare the types for the app config, which is used by next-intl
 * to provide type safety for the locale and messages.
 */
declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number]
    Messages: typeof messages
    Formats: typeof formats
  }
}
