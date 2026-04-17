export default function Hero() {
  return (
    <section className="container hero">
      <div className="hero-content">
        {/* LEFT */}
        <div className="hero-text">
          <h1>
            <span className="highlight">Atha Dion Saputra</span>
          </h1>

          <h2>Web & Mobile Developer</h2>

          <p>
            Saya adalah Web dan Mobile Developer yang berfokus pada pembuatan aplikasi modern, 
            responsif, dan efisien. Berpengalaman dalam membangun sistem dengan performa tinggi 
            serta memberikan pengalaman pengguna yang optimal.
          </p>

          <div className="hero-btn">
            <button className="btn btn-orange">View Portfolio</button>
            <button className="btn btn-outline">Hire Me</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-image">
          <img src="/images/foto_profil.jpeg" alt="Profile" />
        </div>
      </div>
    </section>
  );
}