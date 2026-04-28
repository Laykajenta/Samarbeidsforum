export default function Contact() {
  return (
    <section className="contact-section" id="kontakt">
      <div className="wrapper">
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Ta kontakt</h3>
            <p>
              Har du spørsmål om Samarbeidsforum, ønsker å melde på til neste
              samling, eller vil vite mer om medlemskap?
            </p>

            <div className="contact-detail">
              <div className="icon-box">✉️</div>
              <div className="detail-text">
                <strong>E-post</strong>
                <span>post@samarbeidsforum.org</span>
              </div>
            </div>

            <div className="contact-detail">
              <div className="icon-box">👤</div>
              <div className="detail-text">
                <strong>Leder</strong>
                <span>Terje Turøy</span>
              </div>
            </div>

            <div className="contact-detail">
              <div className="icon-box">📅</div>
              <div className="detail-text">
                <strong>Samlinger</strong>
                <span>Uke 12 og uke 45 hvert år</span>
              </div>
            </div>

            <div className="contact-detail">
              <div className="icon-box">📍</div>
              <div className="detail-text">
                <strong>Sted</strong>
                <span>Sanner Hotell og andre lokaler i Norge</span>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send en melding</h3>

            <div className="form-group">
              <label>Navn</label>
              <input type="text" placeholder="Ditt navn" />
            </div>

            <div className="form-group">
              <label>E-post</label>
              <input type="email" placeholder="din@epost.no" />
            </div>

            <div className="form-group">
              <label>Emne</label>
              <input type="text" placeholder="Hva gjelder det?" />
            </div>

            <div className="form-group">
              <label>Melding</label>
              <textarea rows="4" placeholder="Skriv din melding her…"></textarea>
            </div>

            <button className="btn-submit">Send melding</button>
          </div>
        </div>
      </div>
    </section>
  );
}
