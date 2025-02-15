import { Social } from '@/models/main';

import Card from '../card';

interface SocialsCardProps {
  discoverable: string;
  socials: Social[];
}

const SocialsCard: React.FC<SocialsCardProps> = ({ discoverable, socials }) => {
  return (
    <Card
      discoverable={discoverable}
      className="col-span-4 flex flex-row items-center justify-between p-4 2xl:p-8"
    >
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-75 transition-opacity hover:opacity-100 dark:text-neutral-50"
        >
          {social.icon}
        </a>
      ))}
    </Card>
  );
};

export default SocialsCard;
