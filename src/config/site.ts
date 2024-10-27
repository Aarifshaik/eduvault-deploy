// import { link } from "@nextui-org/theme";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "EduVault",
  description: "Make beautiful websites regardless of your design experience.",
  GeneralNav: [
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
  StuNavItems: [
    {
      label: "Home",
      href: "/student/home",
    },
    {
      label: "Resources",
      href: "/blog",
    },
    {
      label: "Bookshelf",
      href: "/student/bookshelf",
    },
    {
      label: "Groups",
      href: "/student/study-groups",
    },
    {
      label: "Help",
      href: "/student/support",
    },
    // {
    //   label: "Download Resources",
    //   href: "/student/downloads",
    // },
  ],

  EduNavItems: [
    {
      label: "Home",
      href: "/educator/home",
    },
    {
      label: "Resource Browse",
      href: "/educator/resources",
    },
    {
      label: "My Course Materials",
      href: "/educator/course-materials",
    },
    {
      label: "Assignment Submission",
      href: "/educator/assignments",
    },
    {
      label: "Student Progress Tracking",
      href: "/educator/student-progress",
    },
    {
      label: "Help/Support",
      href: "/educator/support",
    },
  ],

  ResNavItems: [
    {
      label: "Home",
      href: "/researcher/home",
    },
    {
      label: "Advanced Search",
      href: "/researcher/advanced-search",
    },
    {
      label: "Research Papers",
      href: "/researcher/research-papers",
    },
    {
      label: "Collaboration Tools",
      href: "/researcher/collaboration",
    },
    {
      label: "My Research Projects",
      href: "/researcher/projects",
    },
    {
      label: "Help/Support",
      href: "/researcher/support",
    },
  ],

  AdminNavItems: [
    {
      label: "Home",
      href: "/admin/home",
    },
    {
      label: "User Management",
      href: "/admin/user-management",
    },
    {
      label: "Resource Management",
      href: "/admin/resource-management",
    },
    {
      label: "Analytics",
      href: "/admin/analytics",
    },
    {
      label: "Settings",
      href: "/admin/settings",
    },
    {
      label: "Help/Support",
      href: "/admin/support",
    },
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
