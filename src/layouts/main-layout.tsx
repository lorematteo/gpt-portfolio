import React from 'react';

import DarkModeButton from '@/components/buttons/dark-mode';
import { cn } from '@/utils/cn';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const MainLayout = ({ children, className }: MainLayoutProps) => {
  const wrapperStyles = cn('flex flex-col min-h-screen', className);

  return (
    <div className={wrapperStyles}>
      <header className="flex flex-row-reverse px-4 py-3">
        <DarkModeButton />
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
};
