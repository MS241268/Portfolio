import Title from '../components/title';
import Collapse from '../components/collapse';
import '../css/cv.css';
import { FaHandPointRight, FaGuitar } from 'react-icons/fa';
import { GiDiploma, GiFullMotorcycleHelmet } from 'react-icons/gi';
import { PiMicrophoneStageFill } from 'react-icons/pi';
import { MdDriveEta } from 'react-icons/md';
import cvDatas from '../datas/cvDatas.json';
import fullStar from '../assets/icons/full_star.svg';
import emptyStar from '../assets/icons/empty_star.svg';

// console.log(cvDatas, typeof cvDatas);
const rating = [1, 2, 3, 4, 5];
function Cv() {
  return (
    <main>
      <div className="wrapperCv">
        <section className="bannerCv">
          <h1 className="h1TitleCvContainer">
            <Title content="CURRICULUM VITAE" />
          </h1>
        </section>
        <section className="leftSection">
          <h2>MES ÉTUDES</h2>
          <ul className="studies">
            <li>
              <GiDiploma className="degreeStyle" />
              2022 à 2023 : BAC+2 Développeur Web
            </li>
            <li>
              <GiDiploma className="degreeStyle" />
              1989 à 1991 : BTS Électronique
            </li>
            <li>
              <GiDiploma className="degreeStyle" />
              1987 à 1989 : BAC Électronique
            </li>
            <li>
              <GiDiploma className="degreeStyle" />
              1985 à 1987 : CAP + BEP Électronique
            </li>
            <li>
              <GiDiploma className="degreeStyle" />
              1982 à 1985 : CAP Électricien Équipements
            </li>
          </ul>
          <h2>MES ATOUTS</h2>
          <section className="asset">
            {cvDatas.map((elt) =>
              Array.isArray(elt.assets)
                ? elt.assets.map((adv) => (
                    <div key={adv.asset}>
                      {/* {console.log(adv.asset, adv.rate, typeof elt.assets)} */}
                      <p>{adv.asset}</p>
                      <div className="ratingDiv">
                        {rating.map((level) =>
                          adv.rate >= level ? (
                            <img
                              key={level}
                              className="star"
                              src={fullStar}
                              alt="Etoile verte"
                            />
                          ) : (
                            <img
                              key={level}
                              className="star"
                              src={emptyStar}
                              alt="Etoile rouge"
                            />
                          )
                        )}
                      </div>
                    </div>
                  ))
                : null
            )}
          </section>

          <h2>LANGUES</h2>
          {cvDatas.map((elt) =>
            Array.isArray(elt.languages) //Vérifie si tableau et évite les erreurs "TypeError: Cannot Read Property ‘Map’ of Undefined” Error?
              ? elt.languages.map((lang) => (
                  <div key={lang.country} className="studies language">
                    {/* {console.log(lang, typeof lang)} */}
                    <img
                      src={lang.country}
                      alt={`Drapeau Pays`}
                      className="flag"
                    ></img>
                    <p>{lang.level}</p>
                  </div>
                ))
              : null
          )}
          <h2>DIVERS</h2>
          <ul className="studies hobbies">
            <li>
              <MdDriveEta className="hobbiesStyle" />
              Permis A & B
            </li>
            <li>
              <FaGuitar className="hobbiesStyle" />
              Guitare
            </li>
            <li>
              <PiMicrophoneStageFill className="hobbiesStyle" />
              Concerts
            </li>
            <li>
              <GiFullMotorcycleHelmet className="hobbiesStyle" />
              Moto
            </li>
          </ul>
        </section>
        <section className="rightSection">
          <h2 id="item-0">COMPETÉNCES MÉTIER</h2>
          <ul id="item-1">
            <li>
              <FaHandPointRight className="handStyle" />
              Création de sites web à partir d’un cahier des charges.
            </li>
            <li>
              <FaHandPointRight className="handStyle" />
              Application des éventuelles corrections dans le code.
            </li>
            <li>
              <FaHandPointRight className="handStyle" />
              Élaboration de fiche test et guide d’utilisation site.
            </li>
            <li>
              <FaHandPointRight className="handStyle" />
              Organisation, Planification, Gestion et Présentation de projets.
            </li>
            <li>
              <FaHandPointRight className="handStyle" />
              Veille technique.
            </li>
            <li>
              <FaHandPointRight className="handStyle" />
              Management jusqu’à 20 personnes en interne et sous-traitance.
            </li>
            <li>
              <FaHandPointRight className="handStyle" />
              Communication (animation réunion, présentation rapport).
            </li>
            <li>
              <FaHandPointRight className="handStyle" />
              Maîtrise des outils MS Office
            </li>
          </ul>
          <h2 id="item-3">PARCOURS PROFESSIONNEL</h2>
          {cvDatas.map((elt) =>
            Array.isArray(elt.experience) //Vérifie si tableau et évite les erreurs "TypeError: Cannot Read Property ‘Map’ of Undefined” Error?
              ? elt.experience.map((exp, index) => (
                  <Collapse
                    label={exp.company}
                    key={exp.function}
                    content={exp}
                  ></Collapse>
                ))
              : null
          )}
        </section>
      </div>
    </main>
  );
}

export default Cv;
