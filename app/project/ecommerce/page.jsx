"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { SiBootstrap, SiLaravel, SiMysql } from "react-icons/si";

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
        <h1 className="project-title">ColorArt</h1>
        <p className="project-desc">
          Platform e-commerce berbasis Laravel yang berfokus pada penjualan
          karya seni dan lukisan, dengan sistem manajemen produk dan transaksi
          yang terintegrasi.
        </p>
      </div>

      <div className="project-image">
        <img src="/images/color_art_page.png" alt="Web Ecommmerce" />
      </div>

      <div className="project-content">
        <h2 className="hero-desc-tech">Tentang Project</h2>
        <p className="port-desc">
          Dalam proyek ini, saya berperan sebagai{" "}
          <span className="highlight">DevOps</span> sekaligus{" "}
          <span className="highlight">Backend</span> Developer. Saya bertanggung
          jawab dalam proses deployment aplikasi, konfigurasi server, serta
          pengelolaan DNS untuk memastikan website dapat diakses secara optimal.
          Di sisi backend, saya menangani konfigurasi sistem dan memastikan
          seluruh fitur berjalan stabil sebelum digunakan oleh pengguna.
        </p>

        <div className="image-scroll-wrapper">
          <div className="image-scroll">
            <img src="/images/color_art_1.png" alt="Produk Ecommerce" />
            <img src="/images/color_art_2.png" alt="Produk Ecommerce" />
            <img src="/images/color_art_3.png" alt="Produk Ecommerce" />
            <img src="/images/color_art_admin_1.png" alt="Produk Ecommerce" />

            {/* DUPLIKAT (biar loop smooth) */}
            <img src="/images/color_art_1.png" alt="Produk Ecommerce" />
            <img src="/images/color_art_2.png" alt="Produk Ecommerce" />
            <img src="/images/color_art_3.png" alt="Produk Ecommerce" />
            <img src="/images/color_art_admin_1.png" alt="Produk Ecommerce" />
          </div>
        </div>

        <p className="port-desc">
          Website ini merupakan platform e-commerce dengan dua peran utama,
          yaitu admin dan user. Pengguna dapat melakukan eksplorasi produk,
          menambahkan item ke keranjang, hingga melakukan proses pembelian
          secara online. Sementara itu, admin memiliki akses penuh untuk
          mengelola produk, termasuk menambah, mengedit, dan menghapus data
          produk. Dibangun menggunakan Laravel sebagai backend dan Bootstrap
          sebagai frontend, sistem ini dirancang untuk memberikan pengalaman
          pengguna yang efisien sekaligus memudahkan pengelolaan dari sisi
          admin.
        </p>

        <h2 className="hero-desc-tech">Fitur Utama</h2>
        <ul className="feature-list">
          <li>Menampilkan katalog produk dengan navigasi yang intuitif</li>
          <li>
            Keranjang belanja dinamis untuk pengalaman belanja yang praktis
          </li>
          <li>Proses checkout yang cepat dan terintegrasi</li>
          <li>Dashboard admin untuk pengelolaan produk dan pesanan</li>
          <li>Sistem autentikasi pengguna (login & register)</li>
        </ul>

        <h2 className="hero-desc-tech">Tech Stack</h2>
        <div className="hero-tech">
          <div className="stack-item laravel">
            <SiLaravel />
          </div>
          <div className="stack-item mysql">
            <SiMysql />
          </div>
          <div className="stack-item bootstrap">
            <SiBootstrap />
          </div>
        </div>
      </div>
    </div>
  );
}
