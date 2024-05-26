// import { useEffect } from 'react';
import './index.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { FaDirections } from 'react-icons/fa';
import { PiWarningFill } from 'react-icons/pi';
import { useLayoutEffect } from 'react';
import Datas from '../../datas/about';

gsap.registerPlugin(ScrollTrigger);
console.clear();
/*Implémentation âge automatique et lien OpenClassrooms dans le texte de présentation*/
const whoIam = Datas[0].description; //Recherche de l'étiquette "description" dans le tableau du fichier "about.json"
const currentDate = new Date(); //date du jour
const currentYear = currentDate.getFullYear(); //Année en cours
const currentMonth = currentDate.getMonth() + 1; //Mois en cours NB : on rajoue "1" pour avoir le vrai n° de mois
const currentDay = currentDate.getDate(); // Jour en cours ()
const myAge =
  currentMonth === 12 && currentDay === 24 // Condition si date en cours est le 24/12/aaaa
    ? currentYear - 1968
    : currentYear - 1968 - 1; // Calcul de mon âge si date en cours n'est pas 24/12/aaaa
const searchAge = whoIam.substring(whoIam.indexOf('55'), whoIam.indexOf('ans')); // Isolation de l'âge dans la description du fichier "about.json"
const urlLink = `https://openclassrooms.com/fr/paths/899-developpeur-web>`;
console.log(urlLink);
const linkOc = `<a href="${urlLink}" style = "font-weight: bold;font-style:italic">OpenClassrooms</a>`;
const searchOpenClassrooms = whoIam.substring(
  whoIam.indexOf('OpenClassrooms'),
  whoIam.indexOf('pendant 1')
);
const replaceTxt = whoIam
  .replace(searchOpenClassrooms, `${linkOc} `)
  .replace(searchAge, `${myAge} `);
console.log(replaceTxt); // Remplacement de l'âge du fichier "about.json" par la constante "myAge" (calcul auto de mon âge) et du mot OpenClassrooms du fichier "about.json" par la constante "linkOc"
/*Fin Implémentation âge automatique et lien OpenClassrooms dans le texte de présentation*/

function Paragraph() {
  //////Début Container Qui suis je//////
  useLayoutEffect(() => {
    gsap.fromTo(
      '.paragraphContainer0',
      {
        minHeight: '6.25rem',
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        marginBottom: 0,
      },
      {
        height: 'auto',
        backgroundColor: 'rgba(38, 108, 174, 0.936)',
        border: '0.1875rem solid rgba(31, 78, 121, 0.936)',
        boxShadow: '0.75rem 0.75rem 1.25rem 0.0625rem rgba(31, 78, 121, 0.8)',
        marginBottom: '3.75rem',
        scrollTrigger: {
          trigger: '.paragraphContainer0',
          start: 'center center',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
          onUpdate: () => ScrollTrigger.refresh(),
          onEnter: () => {
            gsap.to('.aboutParagraph0', {
              scrollTrigger: {
                trigger: '.paragraphContainer0',
                start: 'center center',
                toggleActions: 'play none none reverse',
              },
              x: '0',
              opacity: '1',
              duration: '1',
            });
          },
        },
      }
    );
  }, []);
  //////Fin Container Qui suis je//////

  //////Début Container Projets//////
  useLayoutEffect(() => {
    gsap.to('.paragraphContainer1', {
      height: 'auto',
      backgroundColor: 'rgba(38, 108, 174, 0.936)',
      border: '0.1875rem solid rgba(31, 78, 121, 0.936)',
      boxShadow: '0.75rem 0.75rem 1.25rem 0.0625rem rgba(31, 78, 121, 0.8)',
      marginBottom: '3.75rem',
      scrollTrigger: {
        id: 'paragraphContainer1',
        trigger: '.paragraphContainer0',
        start: '94.5% center',
        toggleActions: 'play none none reverse',
        onUpdate: () => ScrollTrigger.refresh(),
        onEnter: () => {
          gsap.to('.aboutParagraph1', {
            scrollTrigger: {
              trigger: '.paragraphContainer0',
              start: '94.5% center',
              toggleActions: 'play none none reverse',
            },
            x: '0',
            opacity: '1',
            duration: '1',
          });
          gsap.to('.projectsContainer', {
            scrollTrigger: {
              id: 'projectsContainer',
              trigger: '.paragraphContainer0',
              start: '94.5% center',
              toggleActions: 'play none none reverse',
            },
            duration: '1',
            opacity: '1',
            x: '0',
          });
        },
        // markers: {
        //   startColor: 'fuchsia',
        //   endColor: 'purple',
        //   fontSize: '2rem',
        //   indent: 500,
        // },
      },
    });
  }, []);
  //////Fin Container Projets//////

  //////Début Container Compétences//////
  useLayoutEffect(() => {
    gsap.to('.paragraphContainer2', {
      height: 'auto',
      backgroundColor: 'rgba(38, 108, 174, 0.936)',
      border: '0.1875rem solid rgba(31, 78, 121, 0.936)',
      boxShadow: '0.75rem 0.75rem 1.25rem 0.0625rem rgba(31, 78, 121, 0.8)',
      marginBottom: '3.75rem',
      scrollTrigger: {
        id: 'paragraphContainer2',
        trigger: '.paragraphContainer1',
        start: '94.5% center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
        onUpdate: () => ScrollTrigger.refresh(),
        onEnter: () => {
          gsap.to('.aboutParagraph2', {
            scrollTrigger: {
              trigger: '.paragraphContainer1',
              start: '94.5% center',
              toggleActions: 'play none none reverse',
              // markers: true,
            },
            x: '0',
            opacity: '1',
            duration: '1',
          });
          gsap.to('.skillsContainer', {
            scrollTrigger: {
              id: 'skillsContainer',
              trigger: '.paragraphContainer1',
              start: '94.5% center',
              toggleActions: 'play none none reverse',
              // end: 'top top',
              // markers: true,
              onEnter: () => {
                gsap.fromTo(
                  '.languageIcons',
                  {
                    rotationY: '0deg',
                  },
                  {
                    rotationY: '360deg',
                    duration: '1',
                    ease: 'none',
                    repeat: -1,
                  }
                );
                gsap.fromTo(
                  '.progressbarWrapper',
                  { paddingRight: '80%' },
                  { paddingRight: '0%', delay: '1.5' }
                );
              },
            },
            duration: '1',
            opacity: '1',
            x: '0',
          });
        },
        // markers: {
        //   startColor: 'red',
        //   endColor: 'orange',
        //   fontSize: '2rem',
        //   indent: 500,
        // },
      },
    });
  }, []);
  //////Fin Container Compétences//////
  return Datas.map((parag, index) => (
    <section
      key={index}
      className={`paragraphContainer${index} paragraphContainer`}
    >
      <h2 key={index} className={`titleSection titleSection${index}`}>
        {parag.title}
      </h2>
      {index === 0 ? ( //index0 correspond au pragraphe du container "qui suis je" => si index est 0 alors remplacement du texte de l'étiquette "description" dans le fichier "about.json" par la variable "replaceTxt"
        //Insertion du contenu du Paragraphe "Qui suisje ?" avec Âge auto en fonction de la courante + lien cliquable OpenClassrooms
        <p
          className={`aboutParagraph${index} aboutParagraph`}
          key={index + 1}
          dangerouslySetInnerHTML={{ __html: replaceTxt }}
        /> //Fin Insertion du contenu du Paragraphe "Qui suisje ?" avec Âge auto en fonction de la courante + lien cliquable OpenClassrooms
      ) : (
        <p className={`aboutParagraph${index} aboutParagraph`} key={index + 1}>
          {parag.description}
        </p>
      )}
      {Array.isArray(parag.details) ? (
        <section className={`projectsContainer`}>
          {parag.details.map((det, index) => (
            <article key={index} className={`project${index} project`}>
              <div className="imgContainer">
                <img
                  src={det.projectIcon}
                  alt={`logo du ${parag.title}`}
                  className={`projectIcon projectIcon${index}`}
                ></img>
              </div>
              <h3 className="projectTitle">{det.projectTitle}</h3>
              <h4 className="pragraphTitle">DESCRIPTION du PROJET</h4>
              <p className="projectDescription">{det.projectDescription}</p>
              <h4 className="pragraphTitle">OBJECTIFS</h4>
              {/* {console.log((parag.details[index]).projectObjective )} */}

              {Array.isArray(parag.details[index].projectObjective) ? (
                det.warning !== undefined ? (
                  <div className="projectObjectiveWarningContainer">
                    <ul className="projectObjectiveWarningUl">
                      {parag.details[index].projectObjective.map(
                        (obj, index) => (
                          <li key={index} className="projectObjectiveLi">
                            <i className="arrowStyle">
                              <FaDirections />
                            </i>
                            <span>{obj.objectif}</span>
                          </li>
                        )
                      )}
                    </ul>
                    <p className="warning">
                      <i>
                        <PiWarningFill className="warningStyle" />
                      </i>
                      <span>: {det.warning}</span>
                    </p>
                  </div>
                ) : (
                  <ul className="projectObjectiveUl">
                    {parag.details[index].projectObjective.map((obj, index) => (
                      <li key={index} className="projectObjectiveLi">
                        <i className="arrowStyle">
                          <FaDirections />
                        </i>
                        <span>{obj.objectif}</span>
                      </li>
                    ))}
                  </ul>
                )
              ) : null}
              <div className="linkContainer">
                <a href={det.projectCode} className="projectLink">
                  Code
                </a>
                <a href={det.projectUrl} className="projectLink">
                  Site
                </a>
              </div>
            </article>
          ))}
        </section>
      ) : null}
      {Array.isArray(parag.icons) ? (
        <section className="skillsContainer">
          {parag.icons.map((ico, index) => (
            <ul key={index} className="iconsLanguageUl">
              <li key={index}>
                <img
                  src={ico.icon}
                  alt={`logo ${ico.iconName}`}
                  className="languageIcons"
                ></img>
              </li>
              <li key={index + 1} className="iconsName">
                {ico.iconName}
              </li>
              <li key={index + 2} className="container">
                <p>{ico.progress}%</p>
                <div className="progressbarWrapper">
                  <div
                    className="progressbar"
                    style={{ width: `${ico.progress}%` }}
                  ></div>
                </div>
              </li>
            </ul>
          ))}
        </section>
      ) : null}
    </section>
  ));
}

export default Paragraph;
