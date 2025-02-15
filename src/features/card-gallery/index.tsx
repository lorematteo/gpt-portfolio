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
      <ProjectCard
        discoverable="Have you ever worked on a web3 project ?"
        project={PROJECTS['f1-nft-card-packs']}
      />
      <PianoCard />
      <div className="col-span-4 flex flex-col gap-4">
        <EducationCard
          discoverable="Can you tell me about your computer science degree ?"
          education={EDUCATIONS['efrei-paris']}
        />
        <FreelanceCard />
      </div>
      <LanguagesCard />
      <GalleryCard
        discoverable="What's your last trip ?"
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
      <ProjectCard
        discoverable="Are you planning to put Netflix out of business with Matflix ?"
        project={PROJECTS['matflix']}
      />
      <CarreerCard
        discoverable="Have you ever worked for a big company ?"
        carreer={CARREERS['sogec']}
      />
      <ProjectCard
        discoverable="I heard you tried to revolutionize online teaching. How did that go?"
        project={PROJECTS['pratico']}
      />
      <div className="col-span-4 flex flex-col gap-4">
        <EducationCard
          discoverable="Did you study anything else before diving into computer science ?"
          education={EDUCATIONS['saint-remi']}
        />
        <SocialsCard discoverable="How can we connect and chat more ?" socials={SOCIALS} />
      </div>
      <MountainCard />
      <ProjectCard discoverable="Ever created a mobile app ?" project={PROJECTS['prepa-star']} />
    </div>
  );
};

export { LeftCardsGallery, RightCardsGallery };
