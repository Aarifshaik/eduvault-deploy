import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import SignupPage from "@/pages/signup";
import LoginPage from "@/pages/login";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import AdminPage from "@/pages/admin";
import { NavbarDemo } from "./pages/navbardemo";
import DemoPage from "./pages/demo";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<SignupPage />} path="/signup" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<AdminPage />} path="/admin" />
      <Route element={<NavbarDemo />} path="/navbardemo" />
      <Route element={<DemoPage />} path="/demo" />
    </Routes>
  );
}

export default App;
