import GithubIcon from '@/assets/icons/github';
import LinkedinIcon from '@/assets/icons/linkedin';
import MailIcon from '@/assets/icons/mail';
import { Social } from '@/models/main';

const GITHUB: Social = {
  name: 'GitHub',
  icon: <GithubIcon className="size-12" />,
  url: 'https://github.com/lorematteo',
};

const LINKEDIN: Social = {
  name: 'LinkedIn',
  icon: <LinkedinIcon className="size-12" />,
  url: 'https://www.linkedin.com/in/lorematteo/',
};

const MAIL: Social = {
  name: 'Mail',
  icon: <MailIcon className="size-12" />,
  url: 'mailto:loremattteo@gmail.com',
};

export const SOCIALS: Social[] = [LINKEDIN, GITHUB, MAIL];
