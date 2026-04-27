"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [open, setOpen] = useState(false); // ⬅️ WAJIB

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 50) {
        setShowLogo(true);
        setShowMenu(true);
      } else {
        setShowLogo(false);

        if (currentScroll > lastScroll) {
          setShowMenu(false);
        } else {
          setShowMenu(true);
        }
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        {/* LOGO */}
        <h3 className={`logo-gradient ${showLogo ? "show" : "hide"}`}>
          Atha Dion Saputra
        </h3>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* MENU */}
        <div
          className={`nav-menu ${showMenu ? "show" : "hide"} ${open ? "active" : ""}`}
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
