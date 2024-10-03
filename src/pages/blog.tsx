// import { title } from "@/components/primitives";
"use client";
import DefaultLayout from "@/layouts/default";
import { FocusCards } from "@/components/ui/focus-card";
import { useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
// import { Button } from "@nextui-org/button";

// Example descriptions (lorem ipsum)
const descriptions = [
  "Embark on a captivating journey through the lush and vibrant forests of the world. Discover the rich diversity of flora and fauna, and immerse yourself in the tranquil beauty of nature. This adventure is not just about exploration; it's about reconnecting with the earth, breathing in the fresh air, and finding peace amidst the trees. From towering redwoods to dense rainforests, each step unveils a new wonder that leaves a lasting impression on your heart and soul.",
  "Welcome to the Valley of Life, a picturesque haven where nature thrives in harmony. This enchanting landscape is filled with vibrant colors, singing birds, and the gentle rustling of leaves. Take a moment to unwind and enjoy the breathtaking views that stretch as far as the eye can see. The valley invites you to explore its hidden paths, discover unique wildlife, and embrace the peacefulness that surrounds you. Experience the beauty of life flourishing in every corner of this magical place.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
  "Vestibulum at eros non justo pulvinar consequat nec eget elit."
];


export default function DocsPage() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Valley of Life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];

  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleClose = () => setSelectedCard(null);
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <FocusCards
          cards={cards}
          onCardClick={(index) => setSelectedCard(index)}
        />

        {/* Modal */}
        <Modal backdrop="blur" isOpen={selectedCard !== null} onClose={handleClose}>
          <ModalContent>
            <ModalHeader>
              {selectedCard !== null && cards[selectedCard].title}
            </ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              {selectedCard !== null && (
                // <p>{descriptions[selectedCard]}</p>
                <TextGenerateEffect words={descriptions[selectedCard]} />
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </section>
    </DefaultLayout>
  );
}
