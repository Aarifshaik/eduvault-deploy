// import { link } from "@nextui-org/theme";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "EduVault",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sign Up",
      href: "/signup",
    },
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Upload",
      href: "/about",
    },
    {
      label: "Admin",
      href: "/admin",
    },
    // {
    //   label: "Register",
    //   href: "/register",
    // },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/Aarifshaik/eduvault-deploy.git",
    // twitter: "https://twitter.com/getnextui",
    linkedin: "https://www.linkedin.com/pulse/copy-eduvault-aarif-shaik-xlbrc/?trackingId=ZYy2b890YEF0eFEUX%2FaE2Q%3D%3D",
    docs: "/signup",
    // discord: "https://discord.gg/9b6yyZKmH4",
    discord: "https://discord.gg/4fJQsnFK",
    sponsor: "https://patreon.com/jrgarciadev",
    browse: "/blog"
  },
};
