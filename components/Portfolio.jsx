"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBrain } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiNodedotjs,
  SiFlask,
  SiTailwindcss,
  SiPython,
  SiLaravel,
  SiMysql,
  SiBootstrap,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPostgresql,
  SiSupabase,
  SiMongodb,
  SiGit,
  SiFigma,
  SiFastapi,
  SiCloudinary,
} from "react-icons/si";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div id="portfolio" className="container portfolio">
      {/* TAB MENU */}
      <div id="projects" className="portfolio-tabs">
        <button
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>

        <button
          className={activeTab === "certificates" ? "active" : ""}
          onClick={() => setActiveTab("certificates")}
        >
          Certificates
        </button>

        <button
          className={activeTab === "tech" ? "active" : ""}
          onClick={() => setActiveTab("tech")}
        >
          Tech Stack
        </button>
      </div>

      {/* CONTENT */}
      <div className="portfolio-content">
        {activeTab === "projects" && (
          <div className="project-grid">
            {/* CARD 1 */}
            <div className="project-card">
              <img src="/images/color_art_page.png" alt="project" />
              <h3>Web Ecommerce</h3>
              <p className="project-hov">
                Sebuah website ecommerce berbasis Laravel dengan fitur pemesanan
                hingga pembayaran online.
              </p>

              <Link href="/project/ecommerce">
                <button className="btn btn-portofolio">Detail</button>
              </Link>
            </div>

            {/* CARD 2 */}
            <div className="project-card">
              <img src="/images/tryon_page.png" alt="project" />
              <h3>Aplikasi Try-On Pakaian</h3>
              <p className="project-hov">
                Aplikasi untuk mencoba dan merekomendasikan pakaian secara
                virtual sesuai dengan preferensi pengguna.
              </p>

              <Link href="/project/tryon">
                <button className="btn btn-portofolio">Detail</button>
              </Link>
            </div>

            {/* CARD 3 */}
            <div className="project-card">
              <img src="/images/pemilah_sampah.png" alt="project" />
              <h3>Sistem Pemilah Sampah</h3>
              <p className="project-hov">
                Sistem ini berperan dalam mendeteksi dan memilah jenis sampah
                melalui media gambar.
              </p>

              <Link href="/project/wastelife">
                <button className="btn btn-portofolio">Detail</button>
              </Link>
            </div>

            {/* CARD 4 */}
            <div className="project-card">
              <img src="/images/brono_page.png" alt="project" />
              <h3>Web Profil Brono</h3>
              <p className="project-hov">
                Website profil modern yang responsif, ringan, dan mudah diakses
                di berbagai perangkat.
              </p>

              <Link href="/project/brono">
                <button className="btn btn-portofolio">Detail</button>
              </Link>
            </div>

            <div className="project-card">
              <img src="/images/coming_soon.png" alt="project" />
              <h3>Aplikasi Manajemen Kendaraan Motor</h3>
              <p>
                Aplikasi manajemen perawatan kendaraan bermotor berbasis mobile
                yang dikembangkan menggunakan{" "}
                <span className="highlight">Flutter</span> sebagai frontend,{" "}
                <span className="highlight">Node.js</span> sebagai backend,{" "}
                <span className="highlight">Supabase</span> dan{" "}
                <span className="highlight">MongoDB</span> sebagai sistem basis
                data, serta <span className="highlight">Flask Python</span>{" "}
                untuk implementasi fitur machine learning.
              </p>

              {/* <Link href="/project/bronp">
                <button className="btn btn-portofolio">Detail</button>
              </Link> */}
            </div>

            <div className="project-card">
              <img src="/images/coming_soon.png" alt="project" />
              <h3>Game FPS 3D</h3>
              {/* <p>
                Aplikasi untuk mencoba dan merekomendasikan pakaian secara
                virtual sesuai dengan preferensi pengguna.
              </p> */}

              {/* <Link href="/project/bronp">
                <button className="btn btn-portofolio">Detail</button>
              </Link> */}
            </div>
          </div>
        )}

        {activeTab === "certificates" && <h2>Certificates Coming Soon</h2>}

        {activeTab === "tech" && (
          <div className="port-tech">
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
              <SiNodedotjs />
            </div>
            <div className="stack-item flask">
              <SiFlask />
            </div>
            <div className="stack-item tailwind">
              <SiTailwindcss />
            </div>
            <div className="stack-item python">
              <SiPython />
            </div>
            <div className="stack-item laravel">
              <SiLaravel />
            </div>
            <div className="stack-item mysql">
              <SiMysql />
            </div>
            <div className="stack-item bootstrap">
              <SiBootstrap />
            </div>
            <div className="stack-item html">
              <SiHtml5 />
            </div>
            <div className="stack-item css">
              <SiCss />
            </div>
            <div className="stack-item js">
              <SiJavascript />
            </div>
            <div className="stack-item postgresql">
              <SiPostgresql />
            </div>

            <div className="stack-item supabase">
              <SiSupabase />
            </div>

            <div className="stack-item mongodb">
              <SiMongodb />
            </div>

            <div className="stack-item git">
              <SiGit />
            </div>

            <div className="stack-item figma">
              <SiFigma />
            </div>

            <div className="stack-item fastapi">
              <SiFastapi />
            </div>

            <div className="stack-item ai">
              <FaBrain />
            </div>

            <div className="stack-item cloudinary">
              <SiCloudinary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
