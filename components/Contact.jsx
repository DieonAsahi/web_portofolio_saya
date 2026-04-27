import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact container">
      <h1 className="contact-title">
        <span className="gradient-text">Kontak</span> Saya
      </h1>

      <div className="contact-grid">
        <a
          href="https://www.instagram.com/_sendisehat/"
          className="contact-card ig"
          target="https://www.instagram.com/_sendisehat/"
        >
          <FaInstagram />
          <h3>Instagram</h3>
          <p>_sendisehat</p>
        </a>

        <a
          href="https://www.linkedin.com/in/dieon-only-a777932b4/"
          className="contact-card linkedin"
          target="https://www.linkedin.com/in/dieon-only-a777932b4/"
        >
          <FaLinkedin />
          <h3>LinkedIn</h3>
          <p>Atha Dion Saputra</p>
        </a>

        <a
          href="https://wa.me/6285695950182"
          className="contact-card wa"
          target="_blank"
        >
          <FaWhatsapp />
          <h3>WhatsApp</h3>
          <p>+62 856-9595-0182</p>
        </a>
      </div>
    </section>
  );
}
