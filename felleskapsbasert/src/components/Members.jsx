import fossumImg from "../assets/members/Fossumlogo.png";
import finnmarkImg from "../assets/members/Finnmarkskollektivetlogo.png";
import arkenImg from "../assets/members/arkenlogo.png";
import hiimsmoenImg from "../assets/members/hiimsmoenlogo.png";
import maloyImg from "../assets/members/maloylogo.png";
import phoenixImg from "../assets/members/Phoenixlogo.png";
import renavangenImg from "../assets/members/renavangenlogo.png";

const members = [
    {
    name: "Finnmarkskollektivet",
    image: finnmarkImg,
    url: "https://www.finnmarkskollektivet.no/",
    contact: "Matthias Welz",
    email: "info@finnmarkskollektivet.no",
  },
  {
    name: "Fossumkollektivet",
    image: fossumImg,
    url: "https://www.fossumkollektivet.no/",
    contact: "Rune Sundt", // oppdater senere
    email: "post@fossumkollektivet.no",
  },

 
  {
    name: "Hiimsmoen",
    image: hiimsmoenImg,
    url: "https://hiimsmoen.no/",
    contact: "Laila Gjellestad",
    email: "post@hiimsmoen.no",
  },
   {
    name: "Kvinnekollektivet Arken",
    image: arkenImg,
    url: "https://www.arkenkvinner.no/",
    contact: "Reidun Wilhelmsen",
    email: "post@k-arken.no",
  },
  {
    name: "Måløykollektivene",
    image: maloyImg,
    url: "https://www.maloykollektivene.no/",
    contact: "Aleksander Sagdal",
    email: "post@maloykollektivene.no",
  },
  {
    name: "Phoenix Haga",
    image: phoenixImg,
    url: "https://www.phoenixhaga.no/",
    contact: "Terje Turøy",
    email: "post@phonixhaga.no",
  },
  {
    name: "Renåvangen",
    image: renavangenImg,
    url: "https://renavangen.no/",
    contact: "Rigmor Sandodden Østby",
    email: "post@renavangen.no",
  },
];

export default function Members() {
  return (
    <section className="members-section" id="medlemmer">
      <div className="wrapper">
        <div className="section-header">
        
          <h2 className="section-title">Våre medlemmer</h2>
          <p className="section-sub">
            Kollektiv og terapeutiske samfunn over hele Norge
          </p>
        </div>

        <div className="members-grid">
          {members.map((member) => (
            <div key={member.name} className="member-wrapper">
              <a
                href={member.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="member-card"
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>
              </a>

              

<div className="member-info">
  {member.contact && member.email && (
    <div className="contact">
      Kontakt: 📨{" "}
      <a
        href={`mailto:${member.email}`}
        className="email"
      >
        {member.contact}
      </a>
    </div>
  )}
</div>


            </div>
          ))}
        </div>

        <p className="members-note">
          Er ditt tiltak ikke på listen?{" "}
          <a href="#">Ta kontakt om medlemskap →</a>
        </p>
      </div>
    </section>
  );
}
``