"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // LOGO hanya muncul saat di atas
      if (currentScroll < 50) {
        setShowLogo(true);
        setShowMenu(true);
      } else {
        setShowLogo(false);

        // MENU tetap pakai arah scroll
        if (currentScroll > lastScroll) {
          setShowMenu(false); // scroll bawah
        } else {
          setShowMenu(true); // scroll atas
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

        {/* MENU */}
        <div className={`nav-menu ${showMenu ? "show" : "hide"}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
