import React from 'react';

interface PromptIdeaProps {
  icon: React.ReactNode;
  label: string;
}

const PromptIdea: React.FC<PromptIdeaProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-row items-center gap-1.5 rounded-3xl border border-light-gray px-3 py-2 dark:border-neutral-gray">
      {icon}
      <p className="text-sm opacity-65">{label}</p>
    </div>
  );
};

export default PromptIdea;
