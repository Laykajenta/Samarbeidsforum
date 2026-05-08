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
    email: "post@finnmarkskollektivet.no",
  },
  {
    name: "Fossumkollektivet",
    image: fossumImg,
    url: "https://www.fossumkollektivet.no/",
    contact: "Ola Nordmann", // oppdater senere
    email: "ola@fossum.no",
  },

  {
    name: "Kvinnekollektivet Arken",
    image: arkenImg,
    url: "https://www.arkenkvinner.no/",
    contact: "",
    email: "",
  },
  {
    name: "Hiimsmoen",
    image: hiimsmoenImg,
    url: "https://hiimsmoen.no/",
    contact: "",
    email: "",
  },
  {
    name: "Måløykollektivene",
    image: maloyImg,
    url: "https://www.maloykollektivene.no/",
    contact: "",
    email: "",
  },
  {
    name: "Phoenix Haga",
    image: phoenixImg,
    url: "https://www.phoenixhaga.no/",
    contact: "",
    email: "",
  },
  {
    name: "Renåvangen",
    image: renavangenImg,
    url: "https://renavangen.no/",
    contact: "",
    email: "",
  },
];

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
                <div className="name">{member.name}</div>
                <div className="person">{member.contact}</div>

                <a
                  href={`mailto:${member.email}`}
                  className="email"
                >
                  ✉️ {member.email}
                </a>
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