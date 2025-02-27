"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const [active, setActive] = useState("Home");
  
  useEffect(() => {
    const changeBgScroll = () => {
      if (window.scrollY <= 50) {
        setNavBar(false);
      } else {
        setNavBar(true);
      }
    };

    // Attach event listener when the component mounts
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBgScroll);
    }

    // Cleanup event listener when component unmounts
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeBgScroll);
      }
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  // const changeBgScroll = () => {
  //   if (window.scrollY <= 50) {
  //     setNavBar(false);
  //   } else {
  //     setNavBar(true);
  //   }
  // };

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };
  // const closeMenu = () => {
  //   setIsMenuOpen(false);
  // };

  // window.addEventListener("scroll", changeBgScroll);
  return (
    <div
      className={
        navBar
          ? "fixed z-50 w-full shadow-md bg-white"
          : "fixed z-50 w-full bg-transparent"
      }
    >
      <div className="mx-1 lg:mx-36 xl:mx-36 md:mx-5">
        <nav className="navbar">
          {/* Logo */}
          <Link href="/">
            <div className="navLogoDiv">
              <img
                className="navLog"
                src="https://watheta.com/wp-content/uploads/2023/08/Web-format-1024x204.png"
                alt=""
              />
            </div>
          </Link>
          {/* Navigation Links */}
          <ul
            onClick={closeMenu}
            className={`nav-links ${isMenuOpen ? "active" : ""}`}
          >
            <Link
              href="/"
              className={`nav-item ${active === "Home" ? "active" : ""}`}
              onClick={() => setActive("Home")}
            >
              Home
            </Link>
            <Link
              href="/"
              className={`nav-item ${active === "Features" ? "active" : ""}`}
              onClick={() => setActive("Features")}
            >
              Features
            </Link>
            <Link
              href="/"
              className={`nav-item ${active === "Pricing" ? "active" : ""}`}
              onClick={() => setActive("Pricing")}
            >
              Pricing
            </Link>
            <Link
              href="/"
              className={`nav-item ${active === "Blogs" ? "active" : ""}`}
              onClick={() => setActive("Blogs")}
            >
              Blogs
            </Link>
            <Link
              href="/"
              className={`nav-item ${active === "Comparison" ? "active" : ""}`}
              onClick={() => setActive("Comparison")}
            >
              Comparison
            </Link>
            <Link
              href="/"
              className={`nav-item ${active === "Help" ? "active" : ""}`}
              onClick={() => setActive("Help")}
            >
              Help
            </Link>
            <button className="block lg:hidden xl:hidden">Log In</button>
            <button className="get-started block lg:hidden xl:hidden rounded-3xl">
              Get Started
            </button>
          </ul>

          {/* Get Started and logIn Button for pc */}
          <div className="flex justify-end w-auto">
            <button className="me-1 lg:me-5 xl:me-5 md:me-5 hidden lg:block xl:block md:hidden">
              Log In
            </button>
            <button className="get-started hidden lg:block xl:block md:hidden rounded-3xl text-sm">
              Get Started
            </button>
          </div>
          {/* Breadcrumb (Hamburger Menu) */}
          <div className="breadcrumb w-auto" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
