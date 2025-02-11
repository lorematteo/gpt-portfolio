'use client';
import { useMutation } from '@tanstack/react-query';

import useChat from '@/hooks/useChat';

import PromptIdeas from './components/prompt-idea';
import PromptTextarea from './components/prompt-textarea';
import Titles from './components/titles';

const AiPrompt = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { response, sendChatMessage } = useChat();

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

  return (
    <div className="flex w-[42rem] flex-col items-center justify-center p-4">
      <Titles />
      <PromptTextarea sendMessage={sendMessage} />
      <PromptIdeas />
    </div>
  );
};

export default AiPrompt;
