'use client';
import { useMutation } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';

import { ChatContext } from '@/app/provdiers';
import { PROMPT_IDEAS } from '@/const/main';
import { cn } from '@/utils/cn';

interface IdeaProps {
  icon?: React.ReactNode;
  label: string;
  className?: string;
  onClick?: () => void;
}

const Idea: React.FC<IdeaProps> = ({ icon, label, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex flex-row items-center gap-1.5 rounded-3xl border border-light-gray px-3 py-2 transition-all hover:bg-gray-100 dark:border-neutral-gray dark:hover:bg-medium-gray',
        className
      )}
    >
      {icon}
      <p className="whitespace-nowrap text-sm opacity-65">{label}</p>
    </button>
  );
};

const Ideas: React.FC = () => {
  const { sendChatMessage } = useContext(ChatContext);
  const [showAll, setShowAll] = useState(false);

  const limit = 3;
  const size = PROMPT_IDEAS.length;

  const sendMessage = useMutation({
    mutationKey: ['sendMessage'],
    mutationFn: async (message: string) => {
      await sendChatMessage(message);
    },
    onMutate: () => {},
    onError: () => {},
    onSuccess: () => {},
    onSettled: () => {},
  });

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div className="mt-4 flex w-full flex-row flex-wrap items-center justify-center gap-x-1.5 gap-y-2.5">
      {PROMPT_IDEAS.map((idea, index) => {
        if (index == limit)
          return (
            <Idea
              key={index}
              label="More"
              onClick={handleShowMore}
              className={showAll ? 'hidden' : 'block'}
            />
          );
        if (index >= limit)
          return (
            <Idea
              key={index}
              icon={idea.icon}
              label={idea.label}
              onClick={() => sendMessage.mutate(idea.label)}
              className={showAll ? 'visible opacity-100' : 'invisible opacity-0'}
            />
          );
        return (
          <Idea
            key={index}
            icon={idea.icon}
            label={idea.label}
            onClick={() => sendMessage.mutate(idea.label)}
          />
        );
      })}
      <Idea
        icon={PROMPT_IDEAS[size - 1].icon}
        label={PROMPT_IDEAS[size - 1].label}
        onClick={() => sendMessage.mutate(PROMPT_IDEAS[size - 1].label)}
        className={showAll ? 'visible opacity-100' : 'invisible opacity-0'}
      />
    </div>
  );
};

export default Ideas;
