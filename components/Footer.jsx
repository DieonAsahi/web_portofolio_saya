export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <p className="footer-text">
          © {new Date().getFullYear()} Atha Dion Saputra. All rights reserved.
        </p>

        <div className="footer-line"></div>

        <p className="footer-sub">
         Dikembangkan menggunakan teknologi web modern
        </p>

      </div>
    </footer>
  );
}