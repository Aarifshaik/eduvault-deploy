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
      label: "Browse",
      href: "/blog",
    },
    // {
    //   label: "Upload",
    //   href: "/upload",
    // },
    // {
    //   label: "Admin",
    //   href: "/admin",
    // },
  ],
  StuNavItems: [
    {
      label: "Home",
      href: "/stuhome",
    },
    {
      label: "Resources",
      href: "/resources",
    },
    {
      label: "Bookshelf",
      href: "/stubookshelf",
    },
    {
      label: "Help",
      href: "/studentsupport",
    },
  ],

  EduNavItems: [
    {
      label: "Home",
      href: "/eduhome",
    },
    {
      label: "Resources",
      href: "/blog",
    },
    {
      label: "Assign",
      href: "/educatorassign",
    },
    {
      label: "Help",
      href: "/edusupport",
    },
    // {
    //   label: "Home",
    //   href: "/educator/home",
    // },
    // {
    //   label: "Resource Browse",
    //   href: "/educator/resources",
    // },
    // {
    //   label: "My Course Materials",
    //   href: "/educator/course-materials",
    // },
    // {
    //   label: "Assignment Submission",
    //   href: "/educator/assignments",
    // },
    // {
    //   label: "Student Progress Tracking",
    //   href: "/educator/student-progress",
    // },
    // {
    //   label: "Help/Support",
    //   href: "/educator/support",
    // },
  ],

  ResNavItems: [
    {
      label: "Home",
      href: "/reshome",
    },
    // {
    //   label: "Advanced Search",
    //   href: "/researcher/advanced-search",
    // },
    {
      label: "All Resources",
      href: "/blog",
    },
    {
      label: "My Publications",
      href: "/respubBooks",
    },
    // {
    //   label: "Collaboration Tools",
    //   href: "/researcher/collaboration",
    // },
    {
      label: "Upload Resource",
      href: "/upload",
    },
    {
      label: "Help/Support",
      href: "/ressupport",
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
    // {
    //   label: "Analytics",
    //   href: "/admin/analytics",
    // },
    // {
    //   label: "Settings",
    //   href: "/admin/settings",
    // },
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

  getNavItemsByRole: function (role: string) {
    switch (role) {
      case "Student":
        return this.StuNavItems;
      case "Educator":
        return this.EduNavItems;
      case "Researcher":
        return this.ResNavItems;
      case "Admin":
        return this.AdminNavItems;
      default:
        return this.GeneralNav;
    }
  },

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
