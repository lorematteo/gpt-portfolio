import AiPrompt from '@/features/ai-prompt';
import { LeftCardsGallery, RightCardsGallery } from '@/features/card-gallery';

export default function HomePage() {
  return (
    <div className="flex h-screen w-full flex-row justify-center pt-14 xl:justify-between">
      <LeftCardsGallery />
      <AiPrompt />
      <RightCardsGallery />
    </div>
  );
}
