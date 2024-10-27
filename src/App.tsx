import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import SignupPage from "@/pages/signup";
import LoginPage from "@/pages/login";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import AdminPage from "@/pages/admin";
// import { NavbarDemo } from "./pages/navbardemo";
// import Demo from "./pages/demo";
import PostOauthRegPage from "./pages/postOauthReg";
import { useEffect, useState } from "react";

import ProtectedRoute from '@/rules/ProtectedRoute';

import OAuthCallback from "./pages/OAuthCallback";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
    const checkLogin = async () => {
      try {
        const response = await fetch("http://localhost:8080/verify-token", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          console.log("Authenticated");
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          console.log("Not Authenticated");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
          setIsLoaded(true);
      }
    };

    checkLogin();
  }
}, [isAuthenticated]);
// console.log(isAuthenticated);



  return (

    <>
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<SignupPage />} path="/signup" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<OAuthCallback />} path="/callback" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<AdminPage />} path="/admin" />
      </Routes>

      {isLoaded && (
        <Routes>
          <Route path="/postOauthReg" element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<PostOauthRegPage />} />} />
          {/* <Route path="/demo" element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<Demo />} />} /> */}
          <Route path="/blog" element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<BlogPage />} />} />
          {/* <Route element={<NavbarDemo />} path="/navbardemo" /> */}
        </Routes>
      )}
    </>

  );
}

export default App;
