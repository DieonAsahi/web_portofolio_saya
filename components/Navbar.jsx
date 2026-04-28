"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // DETEKSI MOBILE
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // SCROLL LOGIC
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 50) {
        setShowLogo(true);

        if (!isMobile) {
          setShowMenu(true);
        }
      } else {
        setShowLogo(false);

        if (!isMobile) {
          if (currentScroll > lastScroll) {
            setShowMenu(false);
          } else {
            setShowMenu(true);
          }
        }
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll, isMobile]);

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        {/* LOGO */}
        <h3 className={`logo-gradient ${showLogo ? "show" : "hide"}`}>
          Atha Dion Saputra
        </h3>

        {/* HAMBURGER (SELALU MUNCUL DI MOBILE)
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div> */}

        {/* MENU */}
        <div
          className={`nav-menu ${
            isMobile
              ? open
                ? "active"
                : ""
              : showMenu
              ? "show"
              : "hide"
          }`}
        >
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#portfolio" onClick={() => setOpen(false)}>
            Portfolio
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}