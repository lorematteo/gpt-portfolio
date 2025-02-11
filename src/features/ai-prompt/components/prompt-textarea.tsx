'use client';
import { UseMutationResult } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';

import ArrowUpIcon from '@/assets/icons/arrow-up';
import IconButton from '@/components/buttons/icon-button';
import useAutosizeTextarea from '@/hooks/useAutoSizeTextarea';

interface PromptTextareaProps {
  sendMessage: UseMutationResult<void, Error, string, void>;
}

const PromptTextarea: React.FC<PromptTextareaProps> = ({ sendMessage }) => {
  const [message, setMessage] = useState('');
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
