"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

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
        <h1 className="project-title">Stylo</h1>
        <p className="project-desc">
          Aplikasi virtual try-on berbasis AI yang memungkinkan pengguna mencoba
          dan mendapatkan rekomendasi pakaian secara real-time.
        </p>
      </div>

      <div className="project-image">
        <img src="/images/tryon_page.png" alt="Aplikasi Try-On Pakaian" />
      </div>

      <div className="project-content">
        <h2>Tentang Project</h2>
        <p>
          Dalam proyek ini, saya berperan sebagai Tech Lead sekaligus Machine
          Learning Engineer. Saya memimpin pengembangan solusi secara
          end-to-end, termasuk membangun frontend menggunakan Flutter dan
          backend menggunakan Flask. Selain itu, saya juga bertanggung jawab
          dalam pengembangan serta pelatihan model Machine Learning dan Deep
          Learning untuk menghasilkan rekomendasi pakaian yang sesuai dengan
          preferensi pengguna.
        </p>

        <div className="image-scroll-app">
          <div className="image-scrollapp">
            <img src="/images/tryon_1.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_2.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_3.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_4.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_5.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_6.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_7.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_8.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_9.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_10.png" alt="Aplikasi Try-On Pakaian" />

            {/* DUPLIKAT (biar loop smooth) */}
            <img src="/images/tryon_1.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_2.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_3.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_4.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_5.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_6.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_7.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_8.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_9.png" alt="Aplikasi Try-On Pakaian" />
            <img src="/images/tryon_10.png" alt="Aplikasi Try-On Pakaian" />
          </div>
        </div>

        <p>
          Aplikasi ini memungkinkan pengguna untuk mencoba pakaian secara
          virtual melalui kamera, sekaligus mendapatkan rekomendasi berdasarkan
          bentuk tubuh, warna kulit, dan gender. Fitur utama meliputi lemari
          digital untuk menyimpan koleksi pakaian pribadi, integrasi katalog
          pakaian online untuk eksplorasi dan uji coba sebelum membeli, serta
          chatbot interaktif yang memberikan saran fashion seperti mix and match
          dan tren terkini. Selain itu, aplikasi ini juga mengusung konsep media
          sosial, di mana pengguna dapat membagikan hasil try-on mereka ke media
          sosial untuk meningkatkan interaksi dan engagement.
        </p>

        <h2>Fitur Utama</h2>
        <ul>
          <li>Sistem rekomendasi pakaian berbasis preferensi pengguna</li>
          <li>Lemari virtual untuk menyimpan dan mengelola koleksi pakaian</li>
          <li>Fitur virtual try-on untuk mencoba pakaian secara real-time</li>
          <li>Chatbot interaktif untuk memberikan saran dan tips fashion</li>
          <li>Integrasi media sosial untuk berbagi hasil try-on</li>
          <li>Sistem autentikasi pengguna (login & register)</li>
          <li>Autentikasi pengguna menggunakan Google (OAuth)</li>
        </ul>

        <h2>Tech Stack</h2>
        <div className="hero-stack">
          <span>Flutter</span>
          <span>MySQL</span>
          <span>Flask</span>
          <span>Python</span>
          <span>Machine Learning</span>
          <span>Deep Learning</span>
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
