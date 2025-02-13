import { CARREERS } from '@/const/carreer';
import { EDUCATIONS } from '@/const/education';
import { PROJECTS } from '@/const/projects';

import Card from './components/card';
import CarreerCard from './components/cards/carreer';
import EducationCard from './components/cards/education';
import GalleryCard from './components/cards/gallery';
import LanguagesCard from './components/cards/languages';
import MountainCard from './components/cards/mountain';
import PianoCard from './components/cards/piano';
import ProjectCard from './components/cards/project';

const LeftCardsGallery = () => {
  return (
    <div className="grid w-full max-w-xl grid-cols-6 gap-4 overflow-y-hidden px-4 max-xl:hidden">
      <ProjectCard project={PROJECTS['f1-nft-card-packs']} />
      <PianoCard />
      <div className="col-span-4 flex flex-col gap-4">
        <EducationCard education={EDUCATIONS['efrei-paris']} />
        <Card />
      </div>
      <LanguagesCard />
      <GalleryCard
        title="Nepal, Volunteering in a primary school"
        description="Taught computer literacy to young students in rural Nepal, enabling them to discover essential digital skills and modern
technologies for the first time."
        images={[
          '/images/nepal/1.jpeg',
          '/images/nepal/2.jpeg',
          '/images/nepal/3.jpeg',
          '/images/nepal/4.jpg',
          '/images/nepal/5.jpeg',
          '/images/nepal/6.jpg',
        ]}
      />
      <Card className="col-span-6" />
      <Card size="lg" className="col-span-6" />
    </div>
  );
};

const RightCardsGallery = () => {
  return (
    <div className="grid w-full max-w-xl grid-cols-6 gap-4 overflow-y-hidden px-4 max-xl:hidden">
      <ProjectCard project={PROJECTS['matflix']} />
      <CarreerCard carreer={CARREERS['sogec']} />
      <ProjectCard project={PROJECTS['pratico']} />
      <div className="col-span-4 flex flex-col gap-4">
        <EducationCard education={EDUCATIONS['saint-remi']} />
        <Card />
      </div>
      <MountainCard />
      <ProjectCard project={PROJECTS['prepa-star']} />
      <Card size="xl" className="col-span-6" />
    </div>
  );
};

export { LeftCardsGallery, RightCardsGallery };
