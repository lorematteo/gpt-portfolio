import { useEffect, useState } from 'react';

export type ModeType = 'light' | 'dark' | 'auto';

export const useDarkMode = (): {
  mode: ModeType;
  toggleMode: () => void;
} => {
  const savedMode = (localStorage.getItem('theme') as ModeType) || 'auto';
  const [mode, setMode] = useState<ModeType>(savedMode);

  function toggleMode() {
    switch (mode) {
      case 'light':
        setMode('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'dark':
        setMode('auto');
        localStorage.setItem('theme', 'auto');
        break;
      case 'auto':
        setMode('light');
        localStorage.setItem('theme', 'light');
        break;
    }
  }

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      if (mode === 'auto') {
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    if (mode === 'auto') {
      document.documentElement.classList.toggle('dark', prefersDarkScheme.matches);
      prefersDarkScheme.addEventListener('change', handleChange);
    } else {
      document.documentElement.classList.toggle('dark', mode === 'dark');
    }

    return () => {
      prefersDarkScheme.removeEventListener('change', handleChange);
    };
  }, [mode]);

  return { mode, toggleMode };
};
