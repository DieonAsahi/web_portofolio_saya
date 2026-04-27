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
        <h1 className="project-title">Brono</h1>
        <p className="project-desc">
          Platform e-commerce berbasis Laravel yang berfokus pada penjualan
          karya seni dan lukisan, dengan sistem manajemen produk dan transaksi
          yang terintegrasi.
        </p>
      </div>

      <div className="project-image">
        <img src="/images/brono_page.png" alt="Web Ecommmerce" />
      </div>

      <div className="project-content">
        <h2>Tentang Project</h2>
        <p>
          Dalam proyek ini, saya berperan sebagai DevOps sekaligus Backend
          Developer. Saya bertanggung jawab dalam proses deployment aplikasi,
          konfigurasi server, serta pengelolaan DNS untuk memastikan website
          dapat diakses secara optimal. Di sisi backend, saya menangani
          konfigurasi sistem dan memastikan seluruh fitur berjalan stabil
          sebelum digunakan oleh pengguna.
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

        <p>
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

        <h2>Fitur Utama</h2>
        <ul>
          <li>Menampilkan katalog produk dengan navigasi yang intuitif</li>
          <li>
            Keranjang belanja dinamis untuk pengalaman belanja yang praktis
          </li>
          <li>Proses checkout yang cepat dan terintegrasi</li>
          <li>Dashboard admin untuk pengelolaan produk dan pesanan</li>
          <li>Sistem autentikasi pengguna (login & register)</li>
        </ul>

        <h2>Tech Stack</h2>
        <div className="hero-stack">
          <span>Laravel</span>
          <span>MySQL</span>
          <span>Bootstrap</span>
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
