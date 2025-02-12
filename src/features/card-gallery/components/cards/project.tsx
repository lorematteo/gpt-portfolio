'use client';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import { Project } from '@/models/main';

import Card from '../card';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="col-span-6 flex flex-row items-center gap-3 px-4 py-3.5">
      <Image
        src={project.image}
        alt={project.title}
        width={64}
        height={64}
        className="size-16 rounded-xl object-cover"
      />
      <div className="flex flex-col justify-center gap-1">
        <h5 className="text-sm font-semibold">{project.title}</h5>
        <p className="text-xs">{project.description}</p>
      </div>
      <button
        onClick={() => window.open(project.url, '_blank')}
        className="absolute right-2.5 top-2.5 opacity-65 transition-opacity hover:opacity-100"
      >
        <ArrowUpRightIcon className="size-4 shrink-0" />
      </button>
    </Card>
  );
};

export default ProjectCard;
