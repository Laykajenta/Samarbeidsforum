import fossumImg from "../assets/members/Fossumlogo.png";
export default function Members() {
  return (
    <section className="members-section" id="medlemmer">
      <div className="wrapper">
        <div className="section-header">
          <p className="section-eyebrow">Nettverk</p>
          <h2 className="section-title">Våre medlemmer</h2>
          <p className="section-sub">
            Kollektiv og terapeutiske samfunn over hele Norge
          </p>
        </div>

        <div className="members-grid">
          <a
            href="https://www.finnmarkskollektivet.no/"
            target="_blank"
            className="member-card"
            rel="noopener noreferrer"
          >
            <div className="overlay">
              <div className="icon">🏡</div>
              <div className="name"> Finnmarkskollektivet</div>
            </div>
          </a>
          <a
            href="https://www.fossumkollektivet.no/"
            target="_blank"
            className="member-card"
            style={{ backgroundImage: `url(${fossumImg})` }}
            rel="noopener noreferrer"
          >
            <div className="overlay">
              <div className="icon">🏡</div>
              <div className="name"> Fossumkollektivet</div>
            </div>
          </a>
          <a
            href="https://hiimsmoen.no/"
            target="_blank"
            className="member-card"
            rel="noopener noreferrer"
          >
            <div className="overlay">
              <div className="icon">🏡</div>
              <div className="name"> Hiimsmoen</div>
            </div>
          </a>
          <a
            href="https://www.arkenkvinner.no/"
            target="_blank"
            className="member-card"
            rel="noopener noreferrer"
          >
            <div className="overlay">
              <div className="icon">🏡</div>
              <div className="name"> Kvinnekollektivet Arken</div>
            </div>
          </a>

          <a
            href="https://www.maloykollektivene.no/"
            target="_blank"
            className="member-card"
            rel="noopener noreferrer"
          >
            <div className="overlay">
              <div className="icon">🏡</div>
              <div className="name">Måløykollektivene</div>
            </div>
          </a>
          <a
            href="https://www.phoenixhaga.no/"
            target="_blank"
            className="member-card"
            rel="noopener noreferrer"
          >
            <div className="overlay">
              <div className="icon">🏡</div>
              <div className="name">Phoenix Haga</div>
            </div>
          </a>
          <a
            href="https://renavangen.no/"
            target="_blank"
            className="member-card"
            rel="noopener noreferrer"
          >
            <div className="overlay">
              <div className="icon">🏡</div>
              <div className="name">Renåvangen</div>
            </div>
          </a>
        </div>

        <p className="members-note">
          Er ditt tiltak ikke på listen? # Ta kontakt om medlemskap →
        </p>
      </div>
    </section>
  );
}
