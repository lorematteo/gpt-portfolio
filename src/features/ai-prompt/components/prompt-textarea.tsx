'use client';
import React, { useRef, useState } from 'react';

import ArrowUpIcon from '@/assets/icons/arrow-up';
import IconButton from '@/components/buttons/icon-button';
import useAutosizeTextarea from '@/hooks/useAutoSizeTextarea';

const PromptTextarea = () => {
  const [value, setValue] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextarea(textAreaRef.current, value);

  const handleTextareaFocus = () => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setValue(val);
  };

  const handleSend = (event: React.MouseEvent<HTMLButtonElement>) => {
    setValue('');
    event.stopPropagation();
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
        value={value}
        className="max-h-64 w-full resize-none appearance-none bg-transparent px-3 text-gray-900 outline-none dark:text-gray-100"
        placeholder="Ask me anything"
      />
      <div className="flex flex-col items-end px-3">
        <IconButton
          disabled={!value}
          icon={
            <ArrowUpIcon className="size-4 shrink-0 text-white disabled:text-gray-100 disabled:dark:text-medium-gray" />
          }
          className="bg-blue-500 disabled:bg-light-gray disabled:opacity-75 disabled:dark:bg-neutral-gray"
          onClick={handleSend}
        />
      </div>
    </div>
  );
};

export default PromptTextarea;
