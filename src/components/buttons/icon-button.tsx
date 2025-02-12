import React from 'react';

import { cn } from '@/utils/cn';

interface IconButtonProps extends React.ComponentProps<'button'> {
  icon: React.ReactNode;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, className, onClick, ...props }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full p-2 text-gray-800 hover:bg-gray-100 disabled:bg-gray-50 disabled:opacity-65 dark:text-neutral-400 dark:disabled:bg-neutral-700 dark:hover:bg-neutral-700 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
