'use client';
import { useMutation } from '@tanstack/react-query';
import { motion } from 'motion/react';
import { useContext, useEffect, useState } from 'react';

import { ChatContext } from '@/app/provdiers';
import { CARD_DELAYS } from '@/const/main';
import { cn } from '@/utils/cn';

interface CardProps {
  name: string;
  discoverable: string;
  size?: 'md' | 'lg' | 'xl';
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ name, discoverable, size = 'md', className, children }) => {
  const { isLoading, isWriting, sendChatMessage } = useContext(ChatContext);
  const [discovered, setDiscovered] = useState<boolean>(false);

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
    if (discovered) return;
    if (isLoading || isWriting) return;
    sendMessage.mutate(discoverable);
    setDiscovered(true);
    localStorage.setItem(`discovered-${name}`, JSON.stringify(true));
  };

  useEffect(() => {
    const savedState = localStorage.getItem(`discovered-${name}`);
    if (savedState) {
      setDiscovered(JSON.parse(savedState) === true);
    }
  }, [name]);

  return (
    <motion.div
      role="button"
      tabIndex={0}
      className={cn(
        'relative flex rounded-3xl bg-gray-100 dark:bg-medium-gray group transition-colors',
        size === 'md' && 'h-24',
        size === 'lg' && 'h-52',
        size === 'xl' && 'h-80',
        discovered && 'cursor-default',
        className
      )}
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: CARD_DELAYS[name] }}
    >
      {children}
      <div
        className={cn(
          'absolute inset-0 flex items-center opacity-100 transition-all visible justify-center rounded-3xl bg-gray-100 dark:bg-medium-gray dark:hover:shadow-[inset_0px_0px_36px_4px_rgba(255,_255,_255,_0.05)] hover:shadow-[inset_0px_0px_36px_6px_rgba(71,_85,_105,_0.06)]',
          discovered && 'invisible opacity-0'
        )}
      >
        <p className="p-4 text-center text-sm text-gray-500 opacity-0 transition-opacity group-hover:opacity-100 dark:text-gray-400">
          {discoverable}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
