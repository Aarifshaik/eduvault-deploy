// import { useState, useEffect } from "react";
// // import { Link } from "@nextui-org/link";
// import { button as buttonStyles } from "@nextui-org/theme";
// import DefaultLayout from "@/layouts/default";
// import {Avatar} from "@nextui-org/avatar";
// // import { redirect } from "react-router-dom";

// export default function ProfilePage() {
//   interface UserData {
//     name: string;
//     username: string;
//     picture: string;
//   }

//   const [userData, setUserData] = useState<UserData | null>(null);

//   useEffect(() => {
//     // Fetch user data from the backend
//     const token = localStorage.getItem("token");
//     // console.log("Token in demo"+token);
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/db/userdata", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`, // ensure token is passed correctly
//           },
//         });
//         if (response.ok) {
//           const data = await response.json();
//           // console.log(data);
//           setUserData(data);
//         } else {
//           console.error("Failed to fetch user data");
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, []);

  
//   const handleButtonClick = () => {
//     localStorage.removeItem("token"); 
//     window.location.replace("/eduvault-deploy/login");
//     console.log("Logged out");
//   };

//   return (
//     <DefaultLayout>
//       <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
//         <div className="text-center"> 
//           {userData && (
//             <>
//               <h1 className="text-3xl font-bold text-violet-600">
//                 {userData.name}
//               </h1>
//               <p className="text-lg text-gray-600">
//                 Username: {userData.username}
//               </p>
//               <Avatar src={userData.picture} />
//             </>
//           )}
//         </div>

//         <div className="mt-6">
//           <button
//             className={buttonStyles({
//               color: "primary",
//               radius: "full",
//               variant: "shadow",
//             })}
//             onClick={handleButtonClick}
//           >
//             Logout
//           </button>
//         </div>
//       </section>
//     </DefaultLayout>
//   );
// }
