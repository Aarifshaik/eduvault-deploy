import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/General/index";
import StudentHomePage from "@/pages/Student/stuhome";
import SignupPage from "@/pages/General/signup";
import LoginPage from "@/pages/General/login";
import BrowsePage from "@/pages/General/browse";
import ResourcesPage from "@/pages/Educator/resources";
import UploadPage from "@/pages/Extras/upload";
import PostOauthRegPage from "./pages/Validations/postOauthReg";
// import DownloadPdf from "./pages/Student/help";

import { useEffect, useState } from "react";

import ProtectedRoute from '@/rules/ProtectedRoute';

import OAuthCallback from "./pages/Validations/OAuthCallback";
import BookShelfPage from "./pages/Student/stubookshelf";


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
        <Route element={<UploadPage />} path="/upload" />
        <Route element={<BrowsePage />} path="/blog" />
        
        
        <Route element={<StudentHomePage />} path="/stuhome" />
        <Route element={<ResourcesPage />} path="/resources" />
        <Route element={<BookShelfPage />} path="/stubookshelf" />
        {/* <Route element={<DownloadPdf />} path="/help" /> */}
        
        
        
      
      </Routes>

      {isLoaded && (
        <Routes>
          <Route path="/postOauthReg" element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<PostOauthRegPage />} />} />
        </Routes>
      )}
    </>

  );
}

export default App;
