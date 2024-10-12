import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useEffect, useState } from "react";

export default function DemoPage() {
    const [user, setUser] = useState({ name: "", email: "" });

  // useEffect(() => {
  //   fetch("http://localhost:8080/demo/oauthget")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUser(data); // Set the user state with the response data
  //     });
  // }, []);

  useEffect(() => {
    fetch("http://localhost:8080/logged", {
      credentials: 'include',  // Include credentials for session handling
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // { name: "Aarif", email: "asff@gmail.com" }
        setUser(data); // Set the user state with the response data
        // Use the data in your frontend
      })
      .catch(error => console.error("Error fetching user data:", error));
  }, []);
  
  

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Get Data</h1>
          <h5 className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">Name: {user.name}</h5>
          <h5 className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">Email: {user.email}</h5>
        </div>
      </section>
    </DefaultLayout>
  );
}