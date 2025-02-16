'use client';
import Ideas from './components/ideas';
import Response from './components/response';
import TextArea from './components/textarea';
import Titles from './components/titles';

const AiPrompt = () => {
  return (
    <div className="flex max-w-2xl flex-col items-center justify-center p-4 sm:min-w-[42rem]">
      <Response />
      <Titles />
      <TextArea />
      <Ideas />
    </div>
  );
};

export default AiPrompt;
