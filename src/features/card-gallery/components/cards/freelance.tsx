import Image from 'next/image';

import { CARD_NAMES } from '@/const/main';

import Card from '../card';

const FreelanceCard = () => {
  return (
    <Card
      name={CARD_NAMES[3]}
      discoverable="Ever worked as a freelancer ?"
      className="col-span-4 flex flex-row items-center justify-between p-4"
    >
      <Image src="/images/carreers/lorematteo-logo.png" alt="Lo Re Mattéo" width={80} height={80} />
      <div className="flex flex-col py-4">
        <h5 className="text-sm font-semibold">Freelance Software Engineer</h5>
        <p className="text-xs max-2xl:hidden">
          Working with private clients, startup and small companies
        </p>
      </div>
    </Card>
  );
};

export default FreelanceCard;
