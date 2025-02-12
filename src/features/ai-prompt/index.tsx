'use client';
import { useMutation } from '@tanstack/react-query';

import useChat from '@/hooks/useChat';

import Ideas from './components/ideas';
import Response from './components/response';
import TextArea from './components/textarea';
import Titles from './components/titles';

const AiPrompt = () => {
  const { response, isLoading, sendChatMessage } = useChat();

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
    <div className="flex max-w-2xl flex-col items-center justify-center p-4 sm:min-w-[42rem]">
      <Response response={response} loading={isLoading} />
      <Titles />
      <TextArea sendMessage={sendMessage} />
      <Ideas sendMessage={sendMessage} />
    </div>
  );
};

export default AiPrompt;
