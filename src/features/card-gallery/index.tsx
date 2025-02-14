import { CARREERS } from '@/const/carreer';
import { EDUCATIONS } from '@/const/education';
import { PROJECTS } from '@/const/projects';
import { SOCIALS } from '@/const/socials';

import CarreerCard from './components/cards/carreer';
import EducationCard from './components/cards/education';
import FreelanceCard from './components/cards/freelance';
import GalleryCard from './components/cards/gallery';
import LanguagesCard from './components/cards/languages';
import MountainCard from './components/cards/mountain';
import PianoCard from './components/cards/piano';
import ProjectCard from './components/cards/project';
import SocialsCard from './components/cards/socials';

const LeftCardsGallery = () => {
  return (
    <div className="grid w-full max-w-xl auto-rows-min grid-cols-6 gap-4 overflow-y-hidden px-4 pb-4 max-xl:hidden">
      <ProjectCard project={PROJECTS['f1-nft-card-packs']} />
      <PianoCard />
      <div className="col-span-4 flex flex-col gap-4">
        <EducationCard education={EDUCATIONS['efrei-paris']} />
        <FreelanceCard />
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
    </div>
  );
};

const RightCardsGallery = () => {
  return (
    <div className="grid w-full max-w-xl auto-rows-min grid-cols-6 gap-4 overflow-y-hidden px-4 pb-4 max-xl:hidden">
      <ProjectCard project={PROJECTS['matflix']} />
      <CarreerCard carreer={CARREERS['sogec']} />
      <ProjectCard project={PROJECTS['pratico']} />
      <div className="col-span-4 flex flex-col gap-4">
        <EducationCard education={EDUCATIONS['saint-remi']} />
        <SocialsCard socials={SOCIALS} />
      </div>
      <MountainCard />
      <ProjectCard project={PROJECTS['prepa-star']} />
    </div>
  );
};

export { LeftCardsGallery, RightCardsGallery };
