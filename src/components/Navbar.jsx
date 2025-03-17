"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    const changeBgScroll = () => {
      if (window.scrollY <= 50) {
        setNavBar(false);
      } else {
        setNavBar(true);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBgScroll);
    }

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

  return (
    <div
      className={`fixed z-50 w-full ${navBar ? " bg-white" : "bg-transparent"}`}
    >
      <div className="mx-1 lg:mx-20 xl:mx-36 md:mx-5">
        <nav className="navbar">
          {/* Logo */}
          <Link href="/">
            <div className="navLogoDiv">
              <img
                className="navLog"
                src="https://watheta.com/wp-content/uploads/2023/08/Web-format-1024x204.png"
                alt="Logo"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <ul onClick={closeMenu} className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            {[
              { name: "Home", href: "/" },
              { name: "Features", href: "/features" },
              { name: "Pricing", href: "/pricing" },
              { name: "Blogs", href: "/blogs" },
              { name: "Comparison", href: "/comparison" },
              { name: "Help", href: "/help" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-item ${pathname === link.href ? "active" : ""}`}
              >
                {link.name}
              </Link>
            ))}

            <button className="block lg:hidden xl:hidden">Log In</button>
            <button className="get-started block lg:hidden xl:hidden rounded-3xl">
              Get Started
            </button>
          </ul>

          {/* Desktop Buttons */}
          <div className="flex justify-end w-auto">
            <button className="me-1 lg:me-5 xl:me-5 md:me-5 hidden lg:block xl:block md:hidden">
              Log In
            </button>
            <button className="get-started hidden lg:block xl:block md:hidden rounded-3xl text-sm">
              Get Started
            </button>
          </div>

          {/* Hamburger Menu */}
          <div className="breadcrumb w-auto" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;