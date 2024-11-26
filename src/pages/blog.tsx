// import { title } from "@/components/primitives";
// "use client";
// import DefaultLayout from "@/layouts/default";
// import { FocusCards } from "@/components/ui/focus-card";
// import { useState,useEffect } from "react";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";


// const descriptions = [
//   "Embark on a captivating journey through the lush and vibrant forests of the world. Discover the rich diversity of flora and fauna, and immerse yourself in the tranquil beauty of nature. This adventure is not just about exploration; it's about reconnecting with the earth, breathing in the fresh air, and finding peace amidst the trees. From towering redwoods to dense rainforests, each step unveils a new wonder that leaves a lasting impression on your heart and soul.",
//   "Welcome to the Valley of Life, a picturesque haven where nature thrives in harmony. This enchanting landscape is filled with vibrant colors, singing birds, and the gentle rustling of leaves. Take a moment to unwind and enjoy the breathtaking views that stretch as far as the eye can see. The valley invites you to explore its hidden paths, discover unique wildlife, and embrace the peacefulness that surrounds you. Experience the beauty of life flourishing in every corner of this magical place.",
//   `Dive into the serene waters of "Sala Behta Hi Jayega," where tranquility and beauty coexist. This mesmerizing location is perfect for those seeking solace and inspiration. As you relax by the shimmering waters, let your mind wander and your thoughts drift away. The gentle flow of the river and the lush greenery create a symphony of sounds that calm the spirit. Embrace the moment and allow the beauty of nature to rejuvenate your soul and ignite your creativity.`,
//   `Join the ranks of seasoned adventurers in "Camping is for Pros," where every experience is a chance to learn and grow. Whether you’re pitching a tent under the stars or starting a campfire with friends, this journey teaches valuable survival skills and fosters a deep appreciation for the great outdoors. Discover the art of outdoor cooking, navigation, and wildlife observation while creating unforgettable memories with your fellow campers. The wilderness awaits you with open arms and endless possibilities.`,
//   `Venture down "The Road Not Taken," a journey filled with choices and self-discovery. This path leads you through breathtaking landscapes and invites introspection. As you navigate the twists and turns, reflect on your life decisions and the direction you wish to pursue. Each stop along the way offers an opportunity to learn more about yourself, embrace change, and take calculated risks. Step off the beaten path and embrace the unknown, for it is here that you will find your true self.`,
//   `Explore the wisdom of "The First Rule," where every story begins with a lesson. Delve into narratives that challenge your perspectives and inspire growth. This collection encompasses a range of themes, from resilience to friendship, igniting discussions that resonate deeply. Whether you're reading alone or sharing insights with friends, each story encourages reflection and self-improvement. Open your heart and mind to the possibilities, for within these pages lies a wealth of knowledge waiting to be discovered.`,
//   ];


// export default function DocsPage() {
//   const cards = [
//     {
//       title: "Forest Adventure",
//       src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "Valley of Life",
//       src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "Sala behta hi jayega",
//       src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "Camping is for pros",
//       src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "The road not taken",
//       src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "The First Rule",
//       src: "https://assets.aceternity.com/the-first-rule.png",
//     },
//   ];

//   const [selectedCard, setSelectedCard] = useState<number | null>(null);

//   const handleClose = () => setSelectedCard(null);
//   // const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;

//   return (
//     <DefaultLayout>
//       <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
//         <FocusCards
//           cards={cards}
//           onCardClick={(index) => setSelectedCard(index)}
//         />

//         {/* Modal */}
//         <Modal backdrop="blur" isOpen={selectedCard !== null} onClose={handleClose}>
//           <ModalContent>
//             <ModalHeader>
//               {selectedCard !== null && cards[selectedCard].title}
//             </ModalHeader>
//             {/* <ModalCloseButton /> */}
//             <ModalBody>
//               {selectedCard !== null && (
//                 // <p>{descriptions[selectedCard]}</p>
//                 <TextGenerateEffect words={descriptions[selectedCard]} />
//               )}
//             </ModalBody>
//           </ModalContent>
//         </Modal>
//       </section>
//     </DefaultLayout>
//   );
// }


"use client";
import axios from 'axios';
import DefaultLayout from "@/layouts/default";
import { FocusCards } from "@/components/ui/focus-card";
import { useState,useEffect } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";

export default function DocsPage() {

  interface CardType {
    title: string;
    description: string;
    img: string;
    author: string;
  }

  const [books, setBooks] = useState<CardType[]>([]);
  const [selectedBook, setSelectedBook] = useState<number | null>(null);
  const baseUrl: string = "http://localhost:8080/api/books/get";
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem("searchTerm") || "");

  // useEffect(() => {
  //   const searchUrl = `${baseUrl}?search=${encodeURIComponent(searchTerm)}`;
  //   axios.get(searchUrl)
  //     .then(response => {
  //       const fetchedBooks = response.data.map((book: { title: string;img:string;author:string; description: string }) => ({
  //         title: book.title,
  //         author: book.author,
  //         img: book.img,
  //         description: book.description
  //       }));
  //       console.log(fetchedBooks);
  //       setBooks(fetchedBooks);

  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  useEffect(() => {
    // Function to fetch data based on the search term
    const fetchBooks = () => {
      const searchUrl = `${baseUrl}?title=${encodeURIComponent(searchTerm)}`;
      // console.log(searchUrl);
      axios.get(searchUrl)
        .then(response => {
          const fetchedBooks =  response.data.map((book: { title: string;img:string;author:string; description: string }) => ({
            title: book.title,
            author: book.author,
            img: book.img,
            description: book.description,
          }));
          setBooks(fetchedBooks);
        })
        .catch(error => {
          console.error("Error fetching books:", error);
        });
    };

    // Fetch data initially and whenever the searchTerm changes
    fetchBooks();
  }, [searchTerm]);

  useEffect(() => {
    const handleStorageChange = () => {
      const newSearchTerm = localStorage.getItem("searchTerm");
      if (newSearchTerm !== searchTerm) {
        // console.log("Search term changed:", newSearchTerm);
        setSearchTerm(newSearchTerm || ""); // Update the state if local storage changes
      }
    };

    // Check local storage periodically for changes
    const intervalId = setInterval(handleStorageChange, 1000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [searchTerm]);

  const handleClose = () => setSelectedBook(null);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <FocusCards
          cards={books}
          onCardClick={(index) => setSelectedBook(index)}
        />

        {/* Modal */}
        <Modal backdrop="blur" isOpen={selectedBook !== null} onClose={handleClose}>
          <ModalContent>
            <ModalHeader>
              {selectedBook !== null && books[selectedBook].title}
            </ModalHeader>
            <ModalBody>
              {selectedBook !== null && (
                <TextGenerateEffect words={books[selectedBook].description} />
              )}
            </ModalBody>
            
          </ModalContent>
        </Modal>
      </section>
    </DefaultLayout>
  );
}