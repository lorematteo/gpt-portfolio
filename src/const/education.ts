import { Education } from '@/models/main';

const EFREI_PARIS: Education = {
  title: 'Master of Science in Computer Science',
  description: 'Paris, France | 2022 - 2025',
  image: '/images/educations/efrei-logo.png',
  courses: [
    'Data Structure',
    'Machine Learning',
    'Algorithm and Analysis',
    'Software Systems Architecture',
  ],
};

const SAINT_REMI: Education = {
  title: 'Concours commun des instituts nationaux polytechniques',
  description: 'Roubaix, France | 2019 - 2022',
  image: '/images/educations/saint-remi-logo.png',
  courses: ['Discrete Mathematics', 'Advanced Calculus', 'Quantum Physics'],
};

export const EDUCATIONS = {
  'efrei-paris': EFREI_PARIS,
  'saint-remi': SAINT_REMI,
};
