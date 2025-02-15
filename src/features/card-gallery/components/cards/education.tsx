import Image from 'next/image';

import { Education } from '@/models/main';

import Card from '../card';

interface EducationCardProps {
  discoverable: string;
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ discoverable, education }) => {
  return (
    <Card
      discoverable={discoverable}
      size="lg"
      className="col-span-6 flex flex-col items-start p-4"
    >
      <Image
        src={education.image}
        alt={education.title}
        width={100}
        height={100}
        className="aspect-auto h-11 w-auto"
      />
      <p className="pt-2 text-xs opacity-65">{education.description}</p>
      <h5 className="pb-2 text-sm font-semibold">{education.title}</h5>
      <ul className="list-none text-xs max-2xl:hidden">
        {education.courses.map((course, index) => (
          <li key={index}>▹ {course}</li>
        ))}
      </ul>
    </Card>
  );
};

export default EducationCard;
