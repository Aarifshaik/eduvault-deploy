import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";


import { useNavigate } from 'react-router-dom';

import {Select, SelectItem} from "@nextui-org/select";
import { SharedSelection } from "@nextui-org/system";
// import { avatar } from "@nextui-org/theme";

export default function PostOauthRegPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatar: "",
    username: "",
    // password: "",
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

    // Prepare the payload for the POST request
    const requestData = {
      username: formData.username,
      name: formData.name,
      email: formData.email,
      // password: formData.password,
      institution: formData.institution,
      department: formData.department,
      role: formData.role, // Assume role can be changed based on user type
      picture: formData.avatar,
    };

    try {
      // Send POST request to Spring backend
      const response = await fetch('http://localhost:8080/db/addOauth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(requestData),  // Convert object to form URL encoding
      });

      if (response.ok) {
        const result = await response.text();  // Backend returns a string like "Inserted"
        console.log('Registration Success:', result);
        navigate("/demo");
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


  // Simulating fetching data from OAuth
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token"); 
      try {
        const response = await fetch("http://localhost:8080/db/sendOauthUser", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Name : "+data.name);
          console.log("Email : "+data.email);
          console.log("Picture : "+data.picture);
          
          // setUserData(data);
          const oauthData = {
            name: data.name,
            email: data.email,
            avatar: data.picture,
          };
          setFormData({
            ...formData,
            name: oauthData.name,
            email: oauthData.email,
            avatar: oauthData.avatar,
          });

          
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Complete Your Registration</h1>
        </div>
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome, {formData.name}!
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
                value={formData.email}
                type="email"
                readOnly
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
                <Label htmlFor="username">Username</Label>
                <Input id="username" value={formData.username} onChange={handleChange} placeholder="Aarif1419" type="text" />
            </LabelInputContainer>
            
            {/* <LabelInputContainer className="mb-4">
                <Label htmlFor="password">Password</Label>
                <Input id="password" value={formData.password} onChange={handleChange} placeholder="••••••••" type="password" />
            </LabelInputContainer> */}

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
              <Label htmlFor="institution">Institution</Label>
              <Input
                id="institution"
                name="institution"
                placeholder="KL University"
                value={formData.institution}
                onChange={handleChange}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="department">Department (optional)</Label>
              <Input
                id="department"
                name="department"
                placeholder="CSE / ECS / ECE"
                value={formData.department}
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
