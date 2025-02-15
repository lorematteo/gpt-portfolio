import Image from 'next/image';

import { Carreer } from '@/models/main';

import Card from '../card';

interface CarreerCardProps {
  discoverable: string;
  carreer: Carreer;
}

const CarreerCard: React.FC<CarreerCardProps> = ({ discoverable, carreer }) => {
  return (
    <Card
      discoverable={discoverable}
      size="lg"
      className="col-span-6 flex flex-col items-start p-4"
    >
      <Image
        src={carreer.image}
        alt={carreer.title}
        width={100}
        height={100}
        className="aspect-auto h-11 w-auto"
      />
      <p className="pt-2 text-xs opacity-65">{carreer.description}</p>
      <h5 className="pb-2 text-sm font-semibold">{carreer.title}</h5>
      <ul className="list-none text-xs max-2xl:hidden">
        {carreer.achievments.map((achievment, index) => (
          <li key={index}>▹ {achievment}</li>
        ))}
      </ul>
    </Card>
  );
};

export default CarreerCard;
