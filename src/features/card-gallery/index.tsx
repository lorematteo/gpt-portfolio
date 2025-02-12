import Card from './components/card';

const LeftCardsGallery = () => {
  return (
    <div className="grid w-full max-w-xl grid-cols-6 gap-4 overflow-y-hidden px-4 max-xl:hidden">
      <Card className="col-span-6" />
      <Card className="col-span-6" />
      <div className="col-span-4 flex flex-col gap-4">
        <Card size="lg" />
        <Card />
      </div>
      <Card className="col-span-2 h-full" />
      <Card size="xl" className="col-span-6" />
      <Card className="col-span-6" />
      <Card size="lg" className="col-span-6" />
    </div>
  );
};

const RightCardsGallery = () => {
  return (
    <div className="grid w-full max-w-xl grid-cols-6 gap-4 overflow-y-hidden px-4 max-xl:hidden">
      <Card className="col-span-6" />
      <Card size="lg" className="col-span-6" />
      <Card className="col-span-6" />
      <div className="col-span-4 flex flex-col gap-4">
        <Card size="lg" />
        <Card />
      </div>
      <Card className="col-span-2 h-full" />
      <Card className="col-span-6" />
      <Card size="xl" className="col-span-6" />
    </div>
  );
};

export { LeftCardsGallery, RightCardsGallery };
