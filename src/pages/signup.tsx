import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Select, SelectItem } from "@nextui-org/select";
import { GitHubLogin, GoogleLogo, DiscordLogin } from "@/components/icons";
import { SharedSelection } from "@nextui-org/system";
// import { avatar } from "@nextui-org/theme";

// interface SignupPageProps {
//   handleLogin: () => void;
// }

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatar:"",
    username: "",
    password: "",
    role: "",
    institution: "",
    department: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSelectChange = (keys: SharedSelection) => {
    const value = Array.from(keys)[0]; // Get the first selected key
    setFormData((prevData) => ({ ...prevData, role: value as string })); // Set role in formData
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    // Prepare the payload for the POST request
    const requestData = {
      username: formData.username,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      institution: formData.institution,
      department: formData.department,
      picture:"",
      role: formData.role, // Assume role can be changed based on user type
    };

    try {
      // Send POST request to Spring backend
      const response = await fetch('http://localhost:8080/db/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(requestData),  // Convert object to form URL encoding
      });

      if (response.ok) {
        const result = await response.text();  // Backend returns a string like "Inserted"
        console.log('Registration Success:', result);
        // handleLogin();
        // Optionally, handle success, e.g., redirect to another page or display a success message
      } else {
        const errorText = await response.text();
        console.error('Registration Failed:', errorText);
        // Handle error, e.g., show error message to the user
      }
    } catch (error) {
      console.error('Network Error:', error);
      // Handle network errors, e.g., show a user-friendly error message
    }
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Sign Up</h1>
        </div>
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Education: "Learn, Grow, Achieve!"
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Create your EduVault account today and discover a secure, private, 
            and ad-free learning environment, backed by our rigorous data protection
            policies and commitment to zero data sharing
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Aa"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="aa1419@loves.in"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Aarif1419"
                type="text"
                value={formData.username}
                onChange={handleChange}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="role">Role</Label>
              <Select
                radius="sm"
                placeholder="Select a Role"
                selectedKeys={[formData.role]}
                aria-label="Select your role"
                onSelectionChange={(keys) => handleSelectChange(keys)}
              >
                <SelectItem key="Student">Student</SelectItem>
                <SelectItem key="Educator">Educator</SelectItem>
                <SelectItem key="Researcher">Researcher</SelectItem>
              </Select>
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="institution">Institution (school/university name)</Label>
              <Input
                id="institution"
                placeholder="KL University"
                type="text"
                value={formData.institution}
                onChange={handleChange}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="department">Department (optional)</Label>
              <Input
                id="department"
                placeholder="CSE / ECS / ECE "
                type="text"
                value={formData.department}
                onChange={handleChange}
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign up &rarr;
              <BottomGradient />
            </button>


        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <GitHubLogin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
            onClick={() => window.location.replace("http://localhost:8080/oauth/login")}
          >
            <GoogleLogo className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <DiscordLogin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Discord
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
      </section>
    </DefaultLayout>
  );
}
      

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

