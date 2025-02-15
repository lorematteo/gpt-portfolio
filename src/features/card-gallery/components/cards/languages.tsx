import Image from 'next/image';

import { LANGUAGES } from '@/const/languages';

import Card from '../card';

const LanguagesCard = () => {
  return (
    <Card
      discoverable="Which languages do you feel comfortable chatting in ?"
      size="xl"
      className="col-span-2 flex flex-col justify-center gap-6 p-4"
    >
      {LANGUAGES.map((language) => (
        <div key={language.title} className="flex flex-col items-center">
          <Image src={language.image} alt={language.title} width={64} height={64} />
          <p className="text-sm">{language.level}</p>
        </div>
      ))}
    </Card>
  );
};

export default LanguagesCard;
