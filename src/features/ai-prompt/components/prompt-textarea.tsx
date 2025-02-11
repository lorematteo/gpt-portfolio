'use client';
import { useMutation } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';

import ArrowUpIcon from '@/assets/icons/arrow-up';
import IconButton from '@/components/buttons/icon-button';
import useAutosizeTextarea from '@/hooks/useAutoSizeTextarea';

interface ParsedData {
  message: {
    content: {
      parts: string[];
    };
  };
}

const PromptTextarea = () => {
  const [message, setMessage] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [response, setResponse] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextarea(textAreaRef.current, message);

  const handleTextareaFocus = () => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setMessage(val);
  };

  const sendMessage = useMutation({
    mutationKey: ['sendMessage'],
    mutationFn: async (message: string) => {
      await sendingChat(message);
    },
    onMutate: () => {},
    onError: () => {},
    onSuccess: () => {},
    onSettled: () => {},
  });

  const sendingChat = async (message: string) => {
    // Step 1: Make a POST request and set up streaming
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }), // Send the user message
    });

    if (!response.ok) {
      console.error('Failed to fetch chat response');
      return;
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    let fullBotMessage = ''; // To accumulate the bot's response progressively

    // Step 2: Process the stream in chunks
    while (true) {
      const { done, value } = await reader!.read();

      if (done) {
        break; // End of the stream
      }

      const chunkText = decoder.decode(value, { stream: true });

      // Ensure the chunk starts with "data: " and remove it
      const lines = chunkText.split('\n').filter((line) => line.startsWith('data: '));
      for (const line of lines) {
        const jsonString = line.replace(/^data: /, ''); // Remove 'data: ' prefix
        try {
          const parsedData = JSON.parse(jsonString) as ParsedData; // Parse the JSON string
          const botMessage = parsedData.message.content.parts[0]; // Extract the bot's message
          fullBotMessage = botMessage;

          // Update the response with the accumulated bot response
          setResponse(fullBotMessage);
        } catch (err) {
          console.error('Error parsing JSON:', err);
        }
      }
    }
  };

  const handleSendMessage = () => {
    setMessage('');
    sendMessage.mutate(message);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      role="button"
      tabIndex={0}
      className="w-full cursor-text rounded-3xl border border-light-gray bg-gray-100 py-3 dark:border-neutral-gray dark:bg-medium-gray"
      onClick={handleTextareaFocus}
    >
      <textarea
        ref={textAreaRef}
        onChange={handleChange}
        rows={1}
        value={message}
        className="max-h-64 w-full resize-none appearance-none bg-transparent px-3 text-gray-900 outline-none dark:text-gray-100"
        placeholder="Ask me anything"
      />
      <div className="flex flex-col items-end px-3">
        <IconButton
          disabled={!message}
          icon={
            <ArrowUpIcon className="size-4 shrink-0 text-white disabled:text-gray-100 disabled:dark:text-medium-gray" />
          }
          className="bg-blue-500 disabled:bg-light-gray disabled:opacity-75 disabled:dark:bg-neutral-gray"
          onClick={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default PromptTextarea;
