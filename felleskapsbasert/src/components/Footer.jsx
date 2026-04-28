import logo from "../assets/logo_samarbeidsforum.jpg";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="Samarbeidsforum" />
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Samarbeidsforum – for fellesskapsbasert rusbehandling</span>
        <span>Laykajenta design 2026</span>
      </div>
    </footer>
  );
}
``