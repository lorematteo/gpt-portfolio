'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createContext, ReactNode } from 'react';

import useChat from '@/hooks/useChat';

export const ChatContext = createContext(
  {} as {
    response: string;
    isLoading: boolean;
    sendChatMessage: (message: string) => Promise<void>;
  }
);

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const { response, isLoading, sendChatMessage } = useChat();
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChatContext.Provider value={{ response, isLoading, sendChatMessage }}>
          {children}
        </ChatContext.Provider>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
