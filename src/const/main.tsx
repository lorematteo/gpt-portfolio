import {
  AcademicCapIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

import { PromptIdea } from '@/models/main';

export const SUBHEALINES = [
  "I'm MattéoGPT—your AI-powered peek into my brain. Ask me anything!",
  "Ask me anything—I promise I won't bite (unless you ask about my coding bugs).",
  "Let's chat! I'm like ChatGPT, but with 100% more Mattéo.",
  "I'm MattéoGPT, the AI that's obsessed with me (in a healthy way). Ask me something!",
  "Type a question below, and I'll tell you all about my work, life, and passions.",
];

export const PROMPT_IDEAS: PromptIdea[] = [
  {
    icon: <AcademicCapIcon className="size-4 shrink-0 text-[#35AE47]" />,
    label: 'What did you study?',
  },
  {
    icon: <RocketLaunchIcon className="size-4 shrink-0 text-[#e2c441]" />,
    label: 'What inspires you?',
  },
  {
    icon: <EnvelopeIcon className="size-4 shrink-0 text-[#2d9cdb]" />,
    label: 'How to contact you ?',
  },
  {
    icon: <BriefcaseIcon className="size-4 shrink-0 text-[#f7a8b8]" />,
    label: 'What’s your work experience?',
  },
];
