import { cn } from '@/utils/cn';

interface CardProps {
  size?: 'md' | 'lg' | 'xl';
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ size = 'md', className, children }) => {
  return (
    <div
      className={cn(
        'relative flex rounded-3xl bg-gray-100 dark:bg-medium-gray',
        size === 'md' && 'h-24',
        size === 'lg' && 'h-52',
        size === 'xl' && 'h-80',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
