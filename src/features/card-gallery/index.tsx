import { EDUCATIONS } from '@/const/education';
import { PROJECTS } from '@/const/projects';

import Card from './components/card';
import EducationCard from './components/cards/education';
import LanguagesCard from './components/cards/languages';
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
      <Card size="xl" className="col-span-6" />
      <Card className="col-span-6" />
      <Card size="lg" className="col-span-6" />
    </div>
  );
};

const RightCardsGallery = () => {
  return (
    <div className="grid w-full max-w-xl grid-cols-6 gap-4 overflow-y-hidden px-4 max-xl:hidden">
      <ProjectCard project={PROJECTS['matflix']} />
      <Card size="lg" className="col-span-6" />
      <ProjectCard project={PROJECTS['pratico']} />
      <div className="col-span-4 flex flex-col gap-4">
        <EducationCard education={EDUCATIONS['saint-remi']} />
        <Card />
      </div>
      <Card className="col-span-2 h-full" />
      <ProjectCard project={PROJECTS['prepa-star']} />
      <Card size="xl" className="col-span-6" />
    </div>
  );
};

export { LeftCardsGallery, RightCardsGallery };
