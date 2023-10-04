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
          <div className="studies">
            <ul>
              <li>
                <i className="degreeStyle">
                  <GiDiploma />
                </i>
                <span>2022 à 2023 : BAC+2 Développeur Web</span>
              </li>
              <li>
                <i className="degreeStyle">
                  <GiDiploma />
                </i>
                <span>1989 à 1991 : BTS Électronique</span>
              </li>
              <li>
                <i className="degreeStyle">
                  <GiDiploma />
                </i>
                <span>1987 à 1989 : BAC Électronique</span>
              </li>
              <li>
                <i className="degreeStyle">
                  <GiDiploma />
                </i>
                <span>1985 à 1987 : CAP + BEP Électronique</span>
              </li>
              <li>
                <i className="degreeStyle">
                  <GiDiploma />
                </i>
                <span>1982 à 1985 : CAP Électricien Équipements</span>
              </li>
            </ul>
          </div>
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
          <div className="languages">
            {cvDatas.map((elt) =>
              Array.isArray(elt.languages) //Vérifie si tableau et évite les erreurs "TypeError: Cannot Read Property ‘Map’ of Undefined” Error?
                ? elt.languages.map((lang) => (
                    <div key={lang.country} className="language">
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
          </div>
          <h2>DIVERS</h2>
          <div className="hobbies">
            <ul>
              <li>
                <i className="hobbiesStyle">
                  <MdDriveEta />
                </i>
                <span>Permis A & B</span>
              </li>
              <li>
                <i className="hobbiesStyle">
                  <FaGuitar />
                </i>
                <span>Guitare</span>
              </li>
              <li>
                <i className="hobbiesStyle">
                  <PiMicrophoneStageFill />
                </i>
                <span>Concerts</span>
              </li>
              <li>
                <i className="hobbiesStyle">
                  <GiFullMotorcycleHelmet />
                </i>
                <span>Moto</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="rightSection">
          <h2 id="item-0">COMPETÉNCES MÉTIER</h2>
          <ul className="item-1">
            <li>
              <i className="handStyle">
                <FaHandPointRight />
              </i>
              <span>
                Création de sites web à partir d’un cahier des charges.
              </span>
            </li>
            <li>
              <i className="handStyle">
                <FaHandPointRight />
              </i>
              <span>Application des éventuelles corrections dans le code.</span>
            </li>
            <li>
              <i className="handStyle">
                <FaHandPointRight />
              </i>
              <span>
                Élaboration de fiche test et guide d’utilisation site.
              </span>
            </li>
            <li>
              <i className="handStyle">
                <FaHandPointRight />
              </i>
              <span>
                Organisation, Planification, Gestion et Présentation de projets.
              </span>
            </li>
            <li>
              <i className="handStyle">
                <FaHandPointRight />
              </i>
              <span>Veille technique.</span>
            </li>
            <li>
              <i className="handStyle">
                <FaHandPointRight />
              </i>
              <span>
                Management jusqu’à 20 personnes en interne et sous-traitance.
              </span>
            </li>
            <li>
              <i className="handStyle">
                <FaHandPointRight />
              </i>
              <span>
                Communication (animation réunion, présentation rapport).
              </span>
            </li>
            <li>
              <i className="handStyle">
                <FaHandPointRight />
              </i>
              <span>Maîtrise des outils MS Office.</span>
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
                    index={index}
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
