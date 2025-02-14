import { Project } from '@/models/main';

const F1_NFT_CARD_PACKS: Project = {
  title: 'F1 NFT Card Packs',
  description:
    'Mint, collect, and trade animated NFT car parts on a cutting-edge Ethereum-powered platform.',
  image: '/images/projects/f1-logo.png',
  url: 'https://f1-card-packs-nft.vercel.app/',
};

const PRATICO: Project = {
  title: 'Pratico, Edtech Startup',
  description: 'The all-in-one solution that turns every live session into an engaging experience.',
  image: '/images/projects/pratico-logo.jpg',
  url: 'https://www.pratico.live/',
};

const MATFLIX: Project = {
  title: 'Matflix',
  description:
    'A fully responsive clone of Netflix website built using NextJS, Tailwind, Prisma and Vercel.',
  image: '/images/projects/matflix-logo.png',
  url: 'https://mymatflix.vercel.app/',
};

const PREPA_STAR: Project = {
  title: 'Prépa Star, iOS App',
  description: 'A platform that helps students prepare for competitive exams.',
  image: '/images/projects/prepa-star-logo.png',
  url: 'https://youtu.be/yHmV4toDkvU',
};

export const PROJECTS = {
  'f1-nft-card-packs': F1_NFT_CARD_PACKS,
  pratico: PRATICO,
  matflix: MATFLIX,
  'prepa-star': PREPA_STAR,
};
