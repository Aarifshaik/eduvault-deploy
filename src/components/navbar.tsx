import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";
import { useState } from "react";
import "./heart.css";


export const Navbar = () => {
  // const [hearts, setHearts] = useState([]);
  const likeCount = 100;
  const [hearts, setHearts] = useState<number[]>([]);

  const handleHeartButtonClick = () => {
    // Add the current timestamp (number) to the hearts array
    setHearts([...hearts, Date.now()]);

    // Remove the heart after the animation duration (e.g., 2 seconds)
    setTimeout(() => {
      setHearts((prev) => prev.slice(1));
    }, 2000);

    // alert("Coming soon!");
  };


  // const generateRandomStyle = () => {
  //   const duration = Math.random() * 2 + 2; // Random duration between 2s and 4s
  //   const delay = Math.random() * 0.5; // Random delay between 0s and 0.5s
  //   const xMovement = Math.random() * 20 - 10; // Random horizontal movement between -10px and 10px
  //   const scale = Math.random() * 0.5 + 0.75; // Random scale between 0.75 and 1.25

  //   return {
  //     animationDuration: `${duration}s`,
  //     animationDelay: `${delay}s`,
  //     transform: `translateX(${xMovement}px) scale(${scale})`,
  //   };
  // };


  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["ctrl"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">EduVault</p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.linkedin}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        {/* <NavbarItem className="hidden md:flex"> */}
          {/* <Button */}
            {/* isExternal */}
            {/* as={Link} */}
            {/* className="text-sm font-normal text-default-600 bg-default-100" */}
            {/* // href={siteConfig.links.sponsor} */}
            {/* onClick={() => alert("Coming soon!")} */}
            {/* startContent={<HeartFilledIcon className="text-danger" />} */}
            {/* variant="flat" */}
          {/* > */}
            {/* Sponsor */}
            {/* {likeCount} Likes */}
          {/* </Button> */}
        {/* </NavbarItem> */}
    <NavbarItem className="hidden md:flex">
      <Button
        as="div"
        className="text-sm font-normal text-default-600 bg-default-100 relative"
        onClick={handleHeartButtonClick}
        startContent={<HeartFilledIcon className="text-danger" />}
        variant="flat"
      >
        {hearts.map((heart) => (
          <div key={heart} className="heart-container">
            <span className="heart-animation heart1">
              <HeartFilledIcon className="text-danger" />
            </span>
            <span className="heart-animation heart2">
              <HeartFilledIcon className="text-danger" />
            </span>
            <span className="heart-animation heart3">
              <HeartFilledIcon className="text-danger" />
            </span>
          </div>
        ))}
        {likeCount} Likes
      </Button>
    </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
