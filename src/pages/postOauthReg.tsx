import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import {Select, SelectItem} from "@nextui-org/select";

export default function PostOauthRegPage() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    avatar: "",
    institution: "",
    dept: "",
    role: "",
  });

  // Simulating fetching data from OAuth
  useEffect(() => {
    // Assume these values come from the OAuth provider
    const oauthData = {
      name: "Aarif Shaik",
      email: "skaarif1419@amail.com",
      avatar: "https://i.pravatar.cc/150?u=johndoe",
    };
    setUserData({
      ...userData,
      name: oauthData.name,
      email: oauthData.email,
      avatar: oauthData.avatar,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", userData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Complete Your Registration</h1>
        </div>
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome, {userData.name}!
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Please provide additional information to complete your registration.
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                value={userData.email}
                type="email"
                readOnly
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Aarif1419" type="text" />
            </LabelInputContainer>
            
            <LabelInputContainer className="mb-4">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="••••••••" type="password" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
            <Label htmlFor="role">Role</Label>
                <Select
                radius="sm"
                placeholder="Select a Role"
                aria-label="Select the Role"
                >
                    <SelectItem key="student">Student</SelectItem>
                    <SelectItem key="educator">Educator</SelectItem>
                    <SelectItem key="researcher">Researcher</SelectItem>
                </Select>
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="institution">Institution</Label>
              <Input
                id="institution"
                name="institution"
                placeholder="KL University"
                value={userData.institution}
                onChange={handleChange}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="dept">Department (optional)</Label>
              <Input
                id="dept"
                name="dept"
                placeholder="CSE / ECS / ECE"
                value={userData.dept}
                onChange={handleChange}
              />
            </LabelInputContainer>

        

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Complete Registration &rarr;
              <BottomGradient />
            </button>
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
