'use client';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

import SunMoonIcon from '@/assets/icons/sun-moon';
import { useDarkMode } from '@/hooks/useDarkMode';

import IconButton from './icon-button';

const DarkModeButton: React.FC = () => {
  const { mode, toggleMode } = useDarkMode();

  switch (mode) {
    case 'light':
      return <IconButton icon={<SunIcon className="size-4 shrink-0" />} onClick={toggleMode} />;
    case 'dark':
      return <IconButton icon={<MoonIcon className="size-4 shrink-0" />} onClick={toggleMode} />;
    case 'auto':
      return <IconButton icon={<SunMoonIcon className="size-4 shrink-0" />} onClick={toggleMode} />;
  }
};

export default DarkModeButton;
