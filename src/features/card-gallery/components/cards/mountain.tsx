import Image from 'next/image';

import { CARD_NAMES } from '@/const/main';

import Card from '../card';

const MountainCard: React.FC = () => {
  return (
    <Card
      name={CARD_NAMES[11]}
      discoverable="Anything crazy about you ?"
      size="xl"
      className="relative col-span-2"
    >
      <h5 className="absolute p-4 text-sm font-semibold">Conquered the Himalayas at 5,106m</h5>
      <Image
        src="/images/mountain.png"
        alt="Mountain"
        width={100}
        height={100}
        className="w-full rounded-3xl object-cover opacity-70"
      />
    </Card>
  );
};

export default MountainCard;
