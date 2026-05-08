export default function About() {
  return (
    <div id="about" className="container about">
      <div className="about-content">
        {/* FOTO KIRI */}
        <div className="about-image">
          <img src="/images/foto_profil.jpeg" alt="profile" />
        </div>

        {/* TEXT KANAN */}
        <div className="about-text">
          <p className="about-hov">Halo, Saya</p>
          <h1 className="about-title">
            <span className="nama-gradient">Atha Dion Saputra</span>
          </h1>
          <p className="hero-desc">
            Saya adalah seorang <span className="highlight">Developer</span>{" "}
            yang berfokus pada pengembangan{" "}
            <span className="highlight">Website</span> dan{" "}
            <span className="highlight">Aplikasi</span> modern, dengan penekanan
            pada pengalaman pengguna yang optimal. Memiliki ketertarikan
            mendalam di bidang <span className="highlight">Front-End</span>,
            saya berusaha menghadirkan tampilan yang estetis, interaktif, serta
            mampu memberikan pengalaman digital yang berkesan.
          </p>
          <div className="about-btn">
            <a href="#contact" className="btn btn-outline">
              Hubungi Saya
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Lihat CV Saya
            </a>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
