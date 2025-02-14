import AiPrompt from '@/features/ai-prompt';
import { LeftCardsGallery, RightCardsGallery } from '@/features/card-gallery';

export default function HomePage() {
  return (
    <div className="flex w-full flex-row items-center justify-center pb-4 pt-14 xl:justify-between">
      <LeftCardsGallery />
      <AiPrompt />
      <RightCardsGallery />
    </div>
  );
}
