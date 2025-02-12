import Image from 'next/image';

import Card from '../card';

interface GalleryCardProps {
  title: string;
  description: string;
  images: string[];
}

const GalleryCard: React.FC<GalleryCardProps> = ({ title, description, images }) => {
  return (
    <Card size="xl" className="col-span-6 flex flex-col px-4 py-5 min-[1408px]:justify-between">
      <div className="flex flex-col">
        <h5 className="text-sm font-semibold">{title}</h5>
        <p className="text-xs max-[1408px]:hidden">{description}</p>
      </div>
      <div className="grid grid-cols-3 gap-2 max-[1408px]:py-4">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={title}
            width={100}
            height={100}
            className="h-24 w-full rounded-xl object-cover"
          />
        ))}
      </div>
    </Card>
  );
};

export default GalleryCard;
