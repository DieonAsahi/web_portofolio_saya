import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFlutter,
  SiTailwindcss,
} from "react-icons/si";
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

            <a href="#contact" className="btn btn-outline">
              Hubungi Saya
            </a>
          </div>

          {/* TECH STACK */}
          {/* <div className="hero-stack">
            <span>React</span>
            <span>Next.js</span>
            <span>Dart (Flutter)</span>
            <span>Flask</span>
            <span>Node.js</span>
            <span>JavaScript</span>
          </div> */}

          <p className="hero-desc-tech"> Tech Stack</p>
          <div className="hero-tech">
            <div className="stack-item">
              <FaReact />
            </div>
            <div className="stack-item">
              <SiNextdotjs />
            </div>
            <div className="stack-item">
              <SiFlutter />
            </div>
            <div className="stack-item">
              <FaNodeJs />
            </div>
            <div className="stack-item">
              <SiFlask />
            </div>
            <div className="stack-item">
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
