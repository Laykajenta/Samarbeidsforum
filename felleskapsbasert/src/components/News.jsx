export default function News() {
  return (
    <section className="news-section" id="nyheter">
      <div className="wrapper">
        <div className="section-header">
       
          <h2 className="section-title">Siste nytt</h2>
          <p className="section-sub">
            Meldinger fra Samarbeidsforum og norske kollektiv
          </p>
        </div>

        <div className="news-grid">
          <article className="news-card featured">
            <div className="card-img">
              <div className="card-img-bg"></div>
              <span className="card-img-icon">🌿</span>
            </div>

            <div className="card-body">
              <p className="card-date">5. mars 2026</p>
              <h3 className="card-title">
                Program for årsmøte og Jubileumskonferanse 2026
              </h3>
              <p className="card-text">
                Vi feirer 30 år og markerer dette med faglig program,
                jubileumsmiddag og konsert.
              </p>
              <a href="#" className="card-link">Les mer →</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}