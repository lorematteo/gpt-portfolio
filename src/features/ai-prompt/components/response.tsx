import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';

import { ChatContext } from '@/app/provdiers';

const Response: React.FC = () => {
  const { response, isLoading: loading } = useContext(ChatContext);
  return (
    <div className="absolute top-14 z-50 flex max-h-52 w-full px-4 sm:w-[42rem]">
      <div className="w-full flex-col items-center justify-center overflow-y-auto rounded-3xl border border-light-gray bg-gray-100 px-4 py-3 dark:border-neutral-gray dark:bg-medium-gray">
        <ReactMarkdown className="text-sm">{loading ? "I'm thinking ..." : response}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Response;
