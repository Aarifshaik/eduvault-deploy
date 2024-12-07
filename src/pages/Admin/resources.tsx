import React, { useState, useEffect } from "react";
import axios from "axios";
import DefaultLayout from "@/layouts/default";
import { FocusCards } from "@/components/ui/focus-card";
import { cn } from "@/lib/utils";
import { SharedSelection } from "@nextui-org/system";
import { Label } from "@/components/ui/label";
import { Select, SelectItem } from "@nextui-org/select";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";

export default function ResourcesPage() {
  interface CardType {
    title: string;
    description: string;
    img: string;
    author: string;
  }

  const [books, setBooks] = useState<CardType[]>([]);
  const [selectedBook, setSelectedBook] = useState<number | null>(null);
  const [category, setCategory] = useState<string | null>(null); // State for the selected category
  const baseUrl: string = "http://localhost:8080/api/books/get";
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem("searchTerm") || "");

  const categories = [
    "All",
    "Technology",
    "Education",
    "Cooking",
    "History",
    "Health",
    "Science",
    "Business",
    "Art",
    "Architecture",
    "Finance",
    "Hobby",
    "Nature",
    "Adventure",
    "Marketing",
    "Self-help",
    "Environment",
  ];

  useEffect(() => {
    const fetchBooks = () => {
      const categoryFilter = category ? `&category=${encodeURIComponent(category)}` : "";
      const searchUrl = `${baseUrl}?title=${encodeURIComponent(searchTerm)}${categoryFilter}`;
      axios
        .get(searchUrl)
        .then((response) => {
          const fetchedBooks = response.data.map(
            (book: { title: string; img: string; author: string; description: string }) => ({
              title: book.title,
              author: book.author,
              img: book.img,
              description: book.description,
            })
          );
          setBooks(fetchedBooks);
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
        });
    };

    fetchBooks();
  }, [searchTerm, category]); // Fetch books whenever searchTerm or category changes

  useEffect(() => {
    const handleStorageChange = () => {
      const newSearchTerm = localStorage.getItem("searchTerm");
      if (newSearchTerm !== searchTerm) {
        setSearchTerm(newSearchTerm || "");
      }
    };

    const intervalId = setInterval(handleStorageChange, 1000);

    return () => clearInterval(intervalId);
  }, [searchTerm]);

  const handleClose = () => setSelectedBook(null);

  const handleSelectBook = (keys: SharedSelection) => {
    const value = Array.from(keys)[0] as string; // Get the selected key
    if (value === "All") {
        setCategory(null); // Reset category to show all data
      } else {
        setCategory(value); // Update the category state
      }
  };

  return (
    <DefaultLayout>
      <LabelInputContainer
        className="mb-4"
        style={{
            maxWidth: "300px",
            margin: "0 auto", // Centers horizontally
        }}
        >
        <Label htmlFor="role">Category</Label>
        <Select
            radius="sm"
            placeholder="Select Category"
            aria-label="Select Category"
            style={{ width: "100%" }} // Ensures the Select fills the container
            onSelectionChange={(keys) => handleSelectBook(keys)}
        >
            {categories.map((category) => (
            <SelectItem key={category} value={category}>
                {category}
            </SelectItem>
            ))}
        </Select>
        </LabelInputContainer>


      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <FocusCards cards={books} onCardClick={(index) => setSelectedBook(index)} />

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

const LabelInputContainer = ({
    children,
    className,
    style,
  }: {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties; // Allow passing custom styles
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)} style={style}>
        {children}
      </div>
    );
  };
  
