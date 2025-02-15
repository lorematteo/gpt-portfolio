'use client';

import { useContext, useEffect, useState } from 'react';

import { ChatContext } from '@/app/provdiers';

const ResetButton = () => {
  const { isLoading } = useContext(ChatContext);
  const [anyDiscovered, setAnyDiscovered] = useState(false);

  const clearLocalStorage = () => {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('discovered-')) {
        localStorage.removeItem(key);
      }
    });
    window.location.reload();
  };

  useEffect(() => {
    if (anyDiscovered) return;
    const discoveredKeys = Object.keys(localStorage).some((key) => key.startsWith('discovered-'));
    setAnyDiscovered(discoveredKeys);
  }, [isLoading, anyDiscovered]);

  if (anyDiscovered === false) return null;

  return (
    <button className="text-xs opacity-50 hover:underline" onClick={clearLocalStorage}>
      Reset cards
    </button>
  );
};

export default ResetButton;
