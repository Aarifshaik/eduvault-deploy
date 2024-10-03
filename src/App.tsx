import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import SignupPage from "@/pages/signup";
import LoginPage from "@/pages/login";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import AdminPage from "@/pages/admin";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<SignupPage />} path="/signup" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<AdminPage />} path="/admin" />
    </Routes>
  );
}

export default App;
