import en from './en';
import fr from './fr';
import de from './de';

export const dictionaries = { en, fr, de };
export type Lang = keyof typeof dictionaries;
export const defaultLang: Lang = 'en';
export const supportedLangs: Lang[] = ['en', 'fr', 'de'];

export function getDictionary(lang: string) {
  const l = lang as Lang;
  return dictionaries[l] ?? dictionaries.en;
}
