"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { SiCss, SiHtml5, SiJavascript } from "react-icons/si";

export default function Page() {
  const router = useRouter();

  return (
    <div className="container project-container">
      <div className="project-header">
        <button
          onClick={() => router.back()}
          className="btn btn-outline project-back"
        >
          ← Back
        </button>
        <h1 className="project-title">Brono</h1>
        <p className="project-desc">
          Brono adalah website profil modern berbasis HTML5, CSS, dan JavaScript
          dengan tampilan responsif, ringan, dan interaktif untuk berbagai
          perangkat.
        </p>
      </div>

      <div className="project-image">
        <img src="/images/brono_page.png" alt="Web Ecommmerce" />
      </div>

      <div className="project-content">
        <h2 className="hero-desc-tech">Tentang Project</h2>
        <p className="port-desc">
          Dalam proyek ini, saya berperan dalam pengembangan dan konfigurasi
          JavaScript untuk memastikan interaksi pada aplikasi berjalan dengan
          baik. Saya menangani logika frontend, pengelolaan produk, serta
          integrasi fitur agar aplikasi dapat memberikan pengalaman yang
          responsif dan interaktif.
        </p>

        <div className="image-scroll-wrapper">
          <div className="image-scroll">
            <img src="/images/brono_1.png" alt="Web Profil" />
            <img src="/images/brono_2.png" alt="Web Profil" />
            <img src="/images/brono_3.png" alt="Web Profil" />

            {/* DUPLIKAT (biar loop smooth) */}
            <img src="/images/brono_1.png" alt="Web Profil" />
            <img src="/images/brono_2.png" alt="Web Profil" />
            <img src="/images/brono_3.png" alt="Web Profil" />
          </div>
        </div>

        <h2 className="hero-desc-tech">Fitur Utama</h2>
        <ul className="feature-list">
          <li>Desain responsif dan modern</li>
          <li>Navigasi yang sederhana dan user-friendly</li>
          <li>Interaksi dasar menggunakan JavaScript</li>
          <li>Performa ringan dan cepat diakses</li>
        </ul>

        <h2 className="hero-desc-tech"> Tech Stack</h2>
        <div className="hero-tech">
          <div className="stack-item html">
            <SiHtml5 />
          </div>
          <div className="stack-item css">
            <SiCss />
          </div>
          <div className="stack-item js">
            <SiJavascript />
          </div>
        </div>
      </div>
    </div>
  );
}
