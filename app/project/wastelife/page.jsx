"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { SiFlask, SiMysql, SiPython, SiCss, SiHtml5 } from "react-icons/si";

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
        <h1 className="project-title">WasteLife</h1>
        <p className="project-desc">
          Sistem klasifikasi sampah berbasis machine learning untuk mendukung
          pemilahan sampah secara otomatis dan cerdas.
        </p>
      </div>

      <div className="project-image">
        <img src="/images/pemilah_sampah.png" alt="Web Ecommmerce" />
      </div>

      <div className="project-content">
        <h2 className="hero-desc-tech">Tentang Project</h2>
        <p className="port-desc">
          Dalam proyek ini, saya berperan sebagai{" "}
          <span className="highlight">Machine Learning Engineer</span> dengan
          tanggung jawab utama dalam melatih model untuk mengenali berbagai
          jenis sampah, seperti organik, anorganik, dan daur ulang. Sistem ini
          dikembangkan menggunakan <span className="highlight">Python</span>{" "}
          untuk proses machine learning dan diintegrasikan dengan{" "}
          <span className="highlight">Flask</span> sebagai backend, serta
          antarmuka berbasis HTML dan CSS.
        </p>

        <div className="image-scroll-wrapper">
          <div className="image-scroll">
            <img src="/images/pemilah_1.png" alt="Sistem AI" />
            <img src="/images/pemilah_2.png" alt="Sistem AI" />
            <img src="/images/pemilah_3.png" alt="Sistem AI" />

            {/* DUPLIKAT (biar loop smooth) */}
            <img src="/images/pemilah_1.png" alt="Sistem AI" />
            <img src="/images/pemilah_2.png" alt="Sistem AI" />
            <img src="/images/pemilah_3.png" alt="Sistem AI" />
          </div>
        </div>

        <p className="port-desc">
          Aplikasi ini merupakan sistem klasifikasi sampah berbasis gambar yang
          bertujuan untuk membantu proses identifikasi jenis sampah secara
          otomatis. Pengembangan lebih lanjut dari sistem ini berpotensi untuk
          diintegrasikan dengan perangkat IoT, sehingga dapat digunakan dalam
          sistem pemilahan sampah otomatis di dunia nyata.
        </p>

        <h2 className="hero-desc-tech">Fitur Utama</h2>
        <ul className="feature-list">
          <li>Mengenali jenis sampah</li>
          <li>Mengelompokan sampah</li>
          <li>Berbasis upload gambar dan kamera</li>
        </ul>

        <h2 className="hero-desc-tech"> Tech Stack</h2>
        <div className="hero-tech">
          <div className="stack-item flask">
            <SiFlask />
          </div>
          <div className="stack-item mysql">
            <SiMysql />
          </div>
          <div className="stack-item python">
            <SiPython />
          </div>
          <div className="stack-item html">
            <SiHtml5 />
          </div>
          <div className="stack-item css">
            <SiCss />
          </div>
        </div>

        {/* <div className="project-btn">
          <a
            href="https://github.com/username/ecommerce"
            target="_blank"
            className="btn btn-orange"
          >
            View Source Code
          </a>
        </div> */}
      </div>
    </div>
  );
}
