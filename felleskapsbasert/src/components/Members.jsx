import fossumImg from "../assets/members/Fossumlogo.png";
import finnmarkskollektivetImg from "../assets/members/Finnmarkskollektivetlogo.png"
import hiimsmoenImg from "../assets/members/hiimsmoenlogo.png"
import arkenImg from "../assets/members/arkenlogo.png"
import maloyImg from "../assets/members/maloylogo.png"
import phonixImg from "../assets/members/Phoenixlogo.png"
import renavangenImg from "../assets/members/renavangenlogo.png"

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
            style={{ backgroundImage: `url(${finnmarkskollektivetImg})` }}
            rel="noopener noreferrer"
          >
            <div className="overlay">
            
              <div className="name"></div>
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
            
              <div className="name"> </div>
            </div>
          </a>
          <a
            href="https://hiimsmoen.no/"
            target="_blank"
            className="member-card"
              style={{ backgroundImage: `url(${hiimsmoenImg})` }}
            rel="noopener noreferrer"
          >
            <div className="overlay">
              
              <div className="name"> </div>
            </div>
          </a>
          <a
            href="https://www.arkenkvinner.no/"
            target="_blank"
            className="member-card"
            style={{ backgroundImage: `url(${arkenImg})` }}
            rel="noopener noreferrer"
          >
            <div className="overlay">
             
              <div className="name"></div>
            </div>
          </a>

          <a
            href="https://www.maloykollektivene.no/"
            target="_blank"
            className="member-card"
 style={{ backgroundImage: `url(${maloyImg})` }}
            rel="noopener noreferrer"
          >
            <div className="overlay">
             
              <div className="name"></div>
            </div>
          </a>
          <a
            href="https://www.phoenixhaga.no/"
            target="_blank"
            className="member-card"
             style={{ backgroundImage: `url(${phonixImg})` }}
            rel="noopener noreferrer"
          >
            <div className="overlay">
            
              <div className="name"></div>
            </div>
          </a>
          <a
            href="https://renavangen.no/"
            target="_blank"
            className="member-card"
               style={{ backgroundImage: `url(${renavangenImg})` }}
            rel="noopener noreferrer"
          >
            <div className="overlay">
            
              <div className="name"></div>
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
