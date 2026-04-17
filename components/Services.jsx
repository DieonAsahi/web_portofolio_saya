export default function Services() {
  return (
    <section className="container" style={{marginTop: "40px"}}>
      <h2>My Services</h2>

      <div style={{display: "flex", gap: "20px"}}>
        <div className="card">
          <h3>Mobile Developer</h3>
          <p>
            Mengembangkan aplikasi mobile yang cepat, responsif, dan dapat berjalan di berbagai platform seperti Android dan iOS.
          </p>
        </div>

        <div className="card" style={{background: "orange", color: "white"}}>
          <h3>Web Developer</h3>
          <p>
            Membangun website modern yang responsif, menarik, dan dioptimalkan untuk performa serta pengalaman pengguna.
          </p>
        </div>

        <div className="card">
          <h3>Game Developer</h3>
          <p>
            Membuat game 2D dan 3D yang interaktif, seru, dan memberikan pengalaman bermain yang menarik bagi pengguna.
          </p>
        </div>
      </div>
    </section>
  );
}