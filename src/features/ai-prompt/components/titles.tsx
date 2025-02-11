import Image from 'next/image';
import { useEffect, useState } from 'react';

import { SUBHEALINES } from '@/const/main';

const Titles = () => {
  const [subheadline, setSubheadline] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * SUBHEALINES.length);
    setSubheadline(SUBHEALINES[randomIndex]);
  }, []);

  return (
    <div className="mb-6 flex flex-col items-center px-4 text-center">
      <Image
        src="/images/matteo-sticker.png"
        width={192}
        height={192}
        alt="MatteoGPT"
        priority
        className="relative -bottom-4"
      />
      <h1 className="text-2xl font-medium">Hi, I&apos;m MatteoGPT.</h1>
      <p className="h-5 text-sm">{subheadline}</p>
    </div>
  );
};

export default Titles;
