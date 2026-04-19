import type { Locale, TranslationKeys } from './types'
import { zhCN } from './locales/zh-CN'
import { enUS } from './locales/en-US'

const translations: Record<Locale, TranslationKeys> = {
  'zh-CN': zhCN,
  'en-US': enUS,
}

const defaultLocale: Locale = 'zh-CN'

let currentLocale: Locale = defaultLocale

export function setLocale(locale: Locale) {
  currentLocale = locale
}

export function getLocale(): Locale {
  return currentLocale
}

export function t<K extends keyof TranslationKeys>(key: K): TranslationKeys[K] {
  return translations[currentLocale][key] ?? translations[defaultLocale][key]
}

export function translate(path: string, params: Record<string, string> = {}): string {
  const keys = path.split('.')
  let result: any = translations[currentLocale]

  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key]
    } else {
      result = translations[defaultLocale]
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k]
        } else {
          return path
        }
      }
    }
  }

  if (typeof result === 'string') {
    let translated = result
    for (const [key, value] of Object.entries(params)) {
      translated = translated.replace(new RegExp(`{${key}}`, 'g'), value)
    }
    return translated
  }

  return path
}
