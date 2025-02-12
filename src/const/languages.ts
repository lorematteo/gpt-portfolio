import { Language } from '@/models/main';

const FRENCH: Language = {
  title: 'French',
  level: 'Native',
  image: '/images/flags/french.webp',
};

const ENGLISH: Language = {
  title: 'English',
  level: 'Fluent',
  image: '/images/flags/english.webp',
};

const SPANISH: Language = {
  title: 'Spanish',
  level: 'Basic',
  image: '/images/flags/spanish.webp',
};

export const LANGUAGES = [FRENCH, ENGLISH, SPANISH];
