import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import SignupPage from "@/pages/signup";
import LoginPage from "@/pages/login";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<SignupPage />} path="/signup" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
