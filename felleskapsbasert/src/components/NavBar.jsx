import logo from "../assets/logo_samarbeidsforum.jpg";

export default function NavBar() {
  return (
    <nav id="main-nav">
      <a href="#" className="nav-logo" aria-label="Samarbeidsforum – hjem">
        <img src={logo} alt="Samarbeidsforum logo" />
      </a>

      <ul className="nav-links">
        <li><a href="#" className="active">Forside</a></li>
        <li><a href="#nyheter">Nyheter</a></li>
        <li><a href="#arrangementer">Arrangementer</a></li>
        <li><a href="#medlemmer">Medlemmer</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
        <li><a href="../pages/Login.jsx">Innlogging medlemmer</a></li>
        
      </ul>
    </nav>
  );
}