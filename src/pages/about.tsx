"use client";
// import React, { useState } from "react";
import { useState } from "react";
import { FileUpload } from "@/components/ui/fileupload";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  const [files, setFiles] = useState<File[]>([]);

  // Example usage of 'files' state
  console.log("Uploaded files:", files);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Upload</h1>
        </div>
        <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
        <FileUpload onChange={handleFileUpload} />
        </div>
      </section>
    </DefaultLayout>
  );
}



// export function FileUploadDemo() {
  

//   return (

//   );
// }
