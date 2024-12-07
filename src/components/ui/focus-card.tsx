import React from "react";
import { cn } from "@/lib/utils";


type CardType = {
  title: string;
  img: string;
  description: string;
  author: string;
  pdfUrl: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    onClick,
    // onDownload,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onClick: () => void;
    onDownload: () => void;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={onClick}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      {/* Card Background Image */}
      <img
        src={card.img}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full"
      />

      {/* Download Button */}
      <button
        type="button"
        className="absolute top-4 right-4 bg-white dark:bg-neutral-800 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-md transition hover:bg-gray-200 dark:hover:bg-neutral-700 z-10" // Added z-10 to ensure it appears above other elements
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering the card's onClick
          const fileName = card.title;
          const fileId = "1nHiAOmoQMr1lfT4c2OTkR1xWHbwdTVpb";
          console.log(`Download initiated for: ${fileName}`); 
          window.open(`http://localhost:8080/download?fileId=${fileId}&fileName=${fileName}`, '_blank');
        }}
      >
        📥
      </button>

      {/* Card Content */}
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex flex-col items-center justify-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
        <p className="text-sm md:text-md font-medium text-neutral-200">
          {card.author}
        </p>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({
  cards,
  onCardClick,
  onDownload,
}: {
  cards: CardType[];
  onCardClick: (index: number) => void;
  onDownload: (index: number) => void;
}) {
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          onClick={() => onCardClick(index)}
          onDownload={() => onDownload(index)}
        />
      ))}
    </div>
  );
}
