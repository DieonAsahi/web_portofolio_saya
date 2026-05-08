import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiFlutter, SiTailwindcss, SiReact } from "react-icons/si";
import { SiFlask } from "react-icons/si";

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-content">
        {/* LEFT */}
        <div className="hero-text">
          <p className="hero-tag">Web dan Mobile Developer</p>

          <h1>
            Membangun Pengalaman <span className="gradient-text">Digital</span>{" "}
            yang Berkesan
          </h1>

          <p className="hero-desc">
            Saya mengembangkan <span className="highlight">website modern</span>{" "}
            dan <span className="highlight">aplikasi mobile</span> yang cepat,
            responsif, dan berfokus dalam pengalaman pengguna.
          </p>

          {/* BUTTON */}
          <div className="hero-btn">
            <a href="#portfolio" className="btn btn-outline">
              Lihat Project Saya
            </a>

            <a
              href="https://github.com/DieonAsahi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              GitHub Saya
            </a>
          </div>

          <p className="hero-desc-tech"> Tech Stack</p>
          <div className="hero-tech">
            <div className="stack-item react">
              <SiReact />
            </div>
            <div className="stack-item next">
              <SiNextdotjs />
            </div>
            <div className="stack-item flutter">
              <SiFlutter />
            </div>
            <div className="stack-item node">
              <FaNodeJs />
            </div>
            <div className="stack-item flask">
              <SiFlask />
            </div>
            <div className="stack-item tailwind">
              <SiTailwindcss />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-image">
          <img src="/images/logo.png" alt="Hero" />
        </div>
      </div>
    </section>
  );
}
