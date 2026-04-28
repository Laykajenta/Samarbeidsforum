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
          <div className="member-card">
            <div className="icon">🏡</div>
            <div className="name">Fossumkollektivet</div>
          </div>

          <div className="member-card">
            <div className="icon">🏡</div>
            <div className="name">Finnmarkskollektivet</div>
          </div>

          <div className="member-card">
            <div className="icon">🏡</div>
            <div className="name">Kvinnekollektivet Arken</div>
          </div>

          <div className="member-card">
            <div className="icon">🏡</div>
            <div className="name">Hiimsmoen</div>
          </div>

          <div className="member-card">
            <div className="icon">🏡</div>
            <div className="name">Phoenix Haga</div>
          </div>

          <div className="member-card">
            <div className="icon">🏡</div>
            <div className="name">Måløykollektivene</div>
          </div>

          <div className="member-card">
            <div className="icon">🏡</div>
            <div className="name">Renåvangen</div>
          </div>
        </div>

        <p className="members-note">
          Er ditt tiltak ikke på listen?{" "}
          #
            Ta kontakt om medlemskap →
          
        </p>
      </div>
    </section>
  );
}
``