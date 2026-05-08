
export default function Events() {
  return (
    <section className="events-section" id="arrangementer">
      <div className="wrapper">
        <div className="section-header">
       
          <h2 className="section-title">Kommende arrangementer</h2>
          <p className="section-sub">
            Samlinger, konferanser og faglige møteplasser
          </p>
        </div>

        <div className="event-list">
          <div className="event-item">
            <div className="event-datebox">
              <div className="day">16</div>
              <div className="month">Mar</div>
            </div>

            <div className="event-divider"></div>

            <div className="event-info">
              <h4>Jubileumskonferanse & Årsmøte 2026 – Sanner Hotell</h4>
              <p>
                Sanner Hotell · Uke 12, 2026 · Faglig program + jubileumsmiddag
              </p>
            </div>

            <span className="event-arrow">→</span>
          </div>

          <div className="event-item">
            <div className="event-datebox">
              <div className="day">Høst</div>
              <div className="month">2026</div>
            </div>

            <div className="event-divider"></div>

            <div className="event-info">
              <h4>Gurisetsamling – uke 45</h4>
              <p>Fagkonferanse · Sted annonseres</p>
            </div>

            <span className="event-arrow">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}