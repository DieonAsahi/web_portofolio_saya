import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
          href="https://www.linkedin.com/in/atha-dion-saputra-a777932b4/"
          className="contact-card linkedin"
          target="https://www.linkedin.com/in/atha-dion-saputra-a777932b4/"
        >
          <FaLinkedin />
          <h3>LinkedIn</h3>
          <p>Atha Dion Saputra</p>
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=athadionsaputra1606@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card email"
        >
          <FaEnvelope />
          <h3>Email</h3>
          <p>athadionsaputra1606@gmail.com</p>
        </a>
      </div>
    </section>
  );
}
