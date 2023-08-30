import Title from '../components/title';
import '../css/cv.css';
import { FaHandPointRight, FaGuitar } from 'react-icons/fa';
import { GiDiploma, GiFullMotorcycleHelmet } from 'react-icons/gi';
import { PiMicrophoneStageFill } from 'react-icons/pi';
import { MdDriveEta } from 'react-icons/md';
import cvDatas from '../datas/cvDatas.json';
import fullStar from '../assets/icons/full_star.svg';
import emptyStar from '../assets/icons/empty_star.svg';

console.log(cvDatas, typeof cvDatas);
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
                    <div key={adv}>
                      {console.log(adv.asset, adv.rate, typeof elt.assets)}
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
            Array.isArray(elt.languages)
              ? elt.languages.map((lang) => (
                  <div key={lang} className="studies language">
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
          <div id="item-4">&nbsp;</div>
          <div id="item-5">&nbsp;</div>
          <div id="item-6">&nbsp;</div>
          <div id="item-7">&nbsp;</div>
          <div id="item-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            distinctio aperiam impedit? Quia fuga est, voluptate laboriosam
            vitae a libero ea adipisci ipsam maiores dolores repellat. Commodi
            magni illo veritatis. Temporibus aut repellendus aspernatur esse
            omnis. In molestias ab magni sunt dolorem inventore iste veniam,
            esse provident adipisci dolorum quas rerum aliquid dignissimos error
            eligendi est iusto facilis tempore asperiores?
          </div>
          <div id="item-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, et
            aliquam laboriosam veniam deleniti laudantium atque iste ea cumque
            ducimus magni perferendis dignissimos id ipsa, rerum, dolore
            voluptatibus nam numquam! Accusamus fugiat temporibus dolor
            reiciendis, perferendis consequuntur veniam doloribus, eveniet
            doloremque dolorem maiores molestiae ipsa aperiam quo eligendi optio
            debitis, sed sapiente necessitatibus dicta ullam quidem. Veritatis
            veniam fugit pariatur. Veritatis nobis dicta commodi eum. Neque
            quaerat quia veritatis quos optio omnis id, quam sint ullam, debitis
            molestiae provident necessitatibus. Nulla nobis corrupti, possimus
            ea mollitia aspernatur sit corporis officia? Rem, quidem ullam!
            Tempore, cumque, ullam doloremque praesentium itaque excepturi vitae
            distinctio tenetur eveniet nostrum eligendi velit fugit sunt dicta
            quis provident, veritatis a quisquam exercitationem necessitatibus
            animi quae libero. Culpa laboriosam aliquam neque id, officiis
            temporibus a. Dignissimos minima repellendus delectus nostrum rem
            sed nobis doloremque necessitatibus labore. Mollitia necessitatibus
            impedit incidunt quisquam non reprehenderit assumenda voluptates et
            vero. Assumenda voluptate, labore veritatis quisquam officiis quasi
            minus consequuntur neque ducimus dicta alias vel quis cum fuga,
            eligendi dolorum saepe sed. Autem est porro expedita doloribus
            consectetur asperiores id ea? Earum reiciendis autem cupiditate
            temporibus dolorem ipsum voluptate accusantium, aut corrupti,
            molestiae odio illum! Nisi officia eos voluptatum, ratione aperiam
            quasi. Deserunt tempora animi sint corporis, provident impedit esse
            praesentium! Officiis aperiam vitae exercitationem, modi alias
            possimus autem at quam architecto maxime laboriosam ut, illum
            assumenda hic sequi consequatur ex, ipsam enim. Magnam deserunt
            beatae ea similique inventore officia nam! Animi provident veritatis
            magni maiores aperiam voluptates consequatur earum alias nulla.
            Accusantium ducimus ipsa minus repudiandae, provident aut. Animi
            magnam cupiditate expedita! Consectetur, impedit voluptatibus
            dolorum ut quia enim neque. Distinctio officiis ut harum fugit a
            neque repudiandae incidunt, omnis architecto autem fuga accusamus,
            quae animi, dolores corrupti molestiae? Fugiat repudiandae nobis
            totam fuga reprehenderit dolor. Reprehenderit voluptate qui atque!
          </div>
        </section>
      </div>
    </main>
  );
}

export default Cv;
