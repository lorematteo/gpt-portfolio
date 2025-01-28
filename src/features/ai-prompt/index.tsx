import Image from 'next/image';

import { SUBHEALINES } from '@/const/main';

import PromptIdeas from './components/prompt-idea';
import PromptTextarea from './components/prompt-textarea';

const AiPrompt = () => {
  const randomIndex = Math.floor(Math.random() * SUBHEALINES.length);
  const subheadline = SUBHEALINES[randomIndex];

  return (
    <div className="flex w-[42rem] flex-col items-center justify-center p-4">
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
        <p className="text-sm">{subheadline}</p>
      </div>
      <PromptTextarea />
      <PromptIdeas />
    </div>
  );
};

export default AiPrompt;
