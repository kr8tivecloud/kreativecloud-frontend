import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

// Abstracted PortfolioGallery component
export type GalleryImage = {
  src: StaticImageData;
  alt: string;
  cols: 2 | 3 | 6;
};

export function PortfolioGallery({ images }: { images: GalleryImage[] }) {
  return (
    // lg:grid-rows-[min(740px,_80vh)_min(637px,_60vh)_min(740px,_80vh)_min(460px,_60vh)_min(740px,_80vh)]
    <div className="grid grid-cols-1 lg:grid-cols-6 lg:auto-rows-auto gap-4 lg:gap-6 mt-8">
      {images.map((img, idx) => (
        <Image
          key={img.alt + idx}
          src={img.src}
          alt={img.alt}
          className={cn(
            "w-full h-full object-cover",
            {
              "lg:col-span-6": img.cols === 6,
              "lg:col-span-3": img.cols === 3,
              "lg:col-span-2": img.cols === 2,
            },
            {
              // "lg:h-[100vh]": img.cols === 6,
              // "lg:aspect-video max-h-[80vh]": img.cols === 6,
              "lg:h-[min(637px,_60vh)]": img.cols === 3,
              // "lg:aspect-square max-lg:max-h-[60vh]": img.cols === 3,
              "lg:h-[min(460px,_60vh)]": img.cols === 2,
              // "lg:aspect-[5_/_4]": img.cols === 2,
            }
          )}
        />
      ))}
    </div>
  );
}
