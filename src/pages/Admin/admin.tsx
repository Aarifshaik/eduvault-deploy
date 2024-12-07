import { Link } from "@nextui-org/link";
import { Input, Textarea } from "@nextui-org/input";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useState } from "react";

interface Resource {
  title: string;
  description: string;
  fileUrl: string;
}

export default function AdminPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [newResource, setNewResource] = useState<Resource>({
    title: "",
    description: "",
    fileUrl: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewResource({
      ...newResource,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setNewResource({ ...newResource, fileUrl: URL.createObjectURL(file) });
    }
  };

  const addResource = () => {
    setResources([...resources, newResource]);
    setNewResource({
      title: "",
      description: "",
      fileUrl: "",
    });
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Admin&nbsp;</h1>
          <h1 className={title()}>Dashboard</h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            Manage and upload educational resources.
          </h4>
        </div>

        <div className="flex flex-col gap-3 items-center w-full max-w-lg">
          <Input
            type="text"
            name="title"
            value={newResource.title}
            onChange={handleInputChange}
            label="Resource Title"
            placeholder="Enter resource title"
            fullWidth
          />

          <Textarea
            name="description"
            value={newResource.description}
            onChange={handleInputChange}
            label="Resource Description"
            placeholder="Enter resource description"
            fullWidth
          />

          <Input
            type="file"
            onChange={handleFileUpload}
            label="Upload Resource File"
            fullWidth
          />

          <button
            onClick={addResource}
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
              class: "w-full mt-4",
            })}
          >
            Add Resource
          </button>
        </div>

        <div className="mt-8 w-full max-w-lg">
          {resources.length > 0 ? (
            <>
              <h4 className={subtitle({ class: "mb-4" })}>Uploaded Resources</h4>
              <ul className="space-y-4">
                {resources.map((resource, index) => (
                  <li key={index} className="border p-4 rounded-lg">
                    <h4 className="font-bold">{resource.title}</h4>
                    <p>{resource.description}</p>
                    {resource.fileUrl && (
                      <Link isExternal href={resource.fileUrl} className="text-blue-600">
                        Download File
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>No resources added yet.</p>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
