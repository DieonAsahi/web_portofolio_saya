"use client";
import { useEffect, useState } from "react";

export default function Intro({ onFinish }) {
  const [text, setText] = useState("");
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  const fullText = "Portfolio Website";

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("seenIntro");

    // kalau sudah pernah lihat → langsung skip
    if (hasSeenIntro) {
      onFinish();
      return;
    }

    // animasi normal
    const welcomeTimer = setTimeout(() => setShowWelcome(true), 800);
    const typingTimer = setTimeout(() => setStartTyping(true), 1500);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(typingTimer);
    };
  }, [onFinish]);

  useEffect(() => {
    if (!startTyping) return;

    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(interval);
        setReady(true);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [startTyping]);

  const handleEnter = () => {
    if (!ready) return;

    setLeaving(true);
    sessionStorage.setItem("seenIntro", "true");

    setTimeout(() => onFinish(), 700);
  };

  return (
    <div
      className={`intro ${leaving ? "intro-leave" : ""}`}
      onClick={handleEnter}
      style={{ cursor: ready ? "pointer" : "default" }}
    >
      <div className="intro-icons">
        <span className="icon i1">🌐</span>
        <span className="icon i2">📱</span>
        <span className="icon i3">🎮</span>
      </div>

      {showWelcome && <h2 className="intro-small">Welcome To My</h2>}
      {startTyping && <h1 className="intro-big">{text}</h1>}
      {ready && <p className="intro-click">Click anywhere to continue</p>}
    </div>
  );
}