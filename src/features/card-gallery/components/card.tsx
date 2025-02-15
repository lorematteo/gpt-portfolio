'use client';
import { useMutation } from '@tanstack/react-query';
import { useContext, useState } from 'react';

import { ChatContext } from '@/app/provdiers';
import { cn } from '@/utils/cn';

interface CardProps {
  discoverable: string;
  size?: 'md' | 'lg' | 'xl';
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ discoverable, size = 'md', className, children }) => {
  const { sendChatMessage } = useContext(ChatContext);
  const [discovered, setDiscovered] = useState(false);

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

  const handleClick = () => {
    sendMessage.mutate(discoverable);
    setDiscovered(true);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={cn(
        'relative flex rounded-3xl bg-gray-100 dark:bg-medium-gray group',
        size === 'md' && 'h-24',
        size === 'lg' && 'h-52',
        size === 'xl' && 'h-80',
        className
      )}
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      {children}
      <div
        className={cn(
          'absolute inset-0 flex items-center justify-center rounded-3xl bg-gray-100 dark:bg-medium-gray dark:hover:shadow-[inset_0px_0px_36px_4px_rgba(255,_255,_255,_0.05)] transition-shadow hover:shadow-[inset_0px_0px_36px_6px_rgba(71,_85,_105,_0.06)]',
          discovered && 'hidden'
        )}
      >
        <p className="p-4 text-center text-sm text-gray-500 opacity-0 transition-opacity group-hover:opacity-100 dark:text-gray-400">
          {discoverable}
        </p>
      </div>
    </div>
  );
};

export default Card;
