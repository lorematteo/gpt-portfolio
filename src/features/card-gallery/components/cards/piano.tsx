import Image from 'next/image';

import Card from '../card';

const PianoCard = () => {
  return (
    <Card
      name="piano"
      discoverable="When you're not busy coding, what do you enjoy doing in your spare time ?"
      className="col-span-6 flex flex-row items-center justify-between gap-1.5 px-4"
    >
      <div className="flex flex-col py-4">
        <h5 className="text-sm font-semibold">Piano Enthousiast</h5>
        <p className="text-xs">Since 2023</p>
      </div>
      <Image
        src="/images/piano.png"
        alt="Piano"
        width={0}
        height={0}
        sizes="100vw"
        className="mt-auto aspect-auto h-[4.25rem] w-auto overflow-y-hidden"
      />
    </Card>
  );
};

export default PianoCard;
