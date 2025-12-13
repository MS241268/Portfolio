import './index.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { FaDirections } from 'react-icons/fa';
import { PiWarningFill } from 'react-icons/pi';
import { useLayoutEffect } from 'react';
import Datas from '../../datas/about';

gsap.registerPlugin(ScrollTrigger);

/*Implémentation âge automatique et lien OpenClassrooms dans le texte de présentation*/
const whoIam = Datas[0].description;
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const birthDate = new Date(currentYear, 11, 24);
const myAge =
  currentDate >= birthDate ? currentYear - 1968 : currentYear - 1968 - 1;
const searchAge = whoIam.substring(whoIam.indexOf('55'), whoIam.indexOf('ans'));
const urlLink = `https://openclassrooms.com/fr/paths/899-developpeur-web>`;
const linkOc = `<a href="${urlLink}" style="font-weight: bold;font-style:italic">OpenClassrooms</a>`;
const searchOpenClassrooms = whoIam.substring(
  whoIam.indexOf('OpenClassrooms'),
  whoIam.indexOf('pendant 1')
);

const replaceTxt = whoIam
  .replace(searchOpenClassrooms, `${linkOc} `)
  .replace(searchAge, `${myAge} `);

/*Fin Implémentation âge automatique et lien OpenClassrooms dans le texte de présentation*/

function Paragraph() {
  useLayoutEffect(() => {
    // if (!document.querySelector('#marker40')) {
    //   const markerLine = document.createElement('div');
    //   markerLine.id = 'marker40';
    //   markerLine.style.position = 'fixed';
    //   markerLine.style.top = '40vh';
    //   markerLine.style.left = '0';
    //   markerLine.style.width = '100vw';
    //   markerLine.style.height = '2px';
    //   markerLine.style.backgroundColor = 'red';
    //   markerLine.style.zIndex = '9999';
    //   markerLine.style.pointerEvents = 'none';
    //   document.body.appendChild(markerLine);
    // }

    // 🔵 ICI — tout au début du useLayoutEffect
    let hasRefreshedOnScroll = false;

    const onFirstScroll = () => {
      if (hasRefreshedOnScroll) return;
      hasRefreshedOnScroll = true;
      ScrollTrigger.refresh();
      window.removeEventListener('scroll', onFirstScroll);
    };

    window.addEventListener('scroll', onFirstScroll, { passive: true });

    const onLoadHandler = () => {
      const container0 = document.querySelector('.paragraphContainer0');
      const paragraph0 = document.querySelector('.aboutParagraph0');
      // 🔹 hauteur ouverte réelle (AVANT ScrollTrigger)
      const openHeight0 = container0.scrollHeight;
      gsap.set(container0, { height: '6.25rem' });
      gsap.set(paragraph0, {
        x: '200%',
        opacity: 0,
      });

      // // Création du ScrollTrigger

      ScrollTrigger.create({
        trigger: container0,
        start: 'top 40%',
        // toggleActions: 'play none none reverse',
        // markers: true,
        onEnter: () => {
          // 🔹 CALCUL dynamique de la hauteur au lieu de 'auto'
          // const targetHeight0 = container0.scrollHeight;
          gsap.to(container0, {
            height: openHeight0,
            // onUpdate: () => ScrollTrigger.refresh(),
            onComplete: () => ScrollTrigger.refresh(),
            // RESTAURATION : background + border + boxShadow + marginBottom (remis comme avant)
            backgroundColor: 'rgba(38, 108, 174, 0.936)',
            border: '0.1875rem solid rgba(31, 78, 121, 0.936)',
            borderRadius: '1.5625rem',
            boxShadow:
              '0.75rem 0.75rem 1.25rem 0.0625rem rgba(31, 78, 121, 0.8)',
            marginBottom: '3.75rem',
          });
          gsap.to(paragraph0, { x: '0', opacity: 1, duration: 1 });
        },
        onLeaveBack: () => {
          // RESTAURATION ÉTAT FERMÉ : background transparent, border none, boxShadow none, marginBottom 0
          gsap.to(container0, {
            height: '6.25rem',
            duration: 1,
            // onUpdate: () => ScrollTrigger.refresh(),
            onComplete: () => ScrollTrigger.refresh(),
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            marginBottom: 0,
          });
          gsap.to(paragraph0, { x: '200%', opacity: 0, duration: 1 });
        },
      });

      const container1 = document.querySelector('.paragraphContainer1');
      const paragraph1 = document.querySelector('.aboutParagraph1');
      const projects1 = container1.querySelector('.projectsContainer');

      if (container1) {
        gsap.set(paragraph1, {
          x: '200%',
          opacity: 0,
        });
        if (projects1) {
          gsap.set(projects1, {
            x: '-200%',
            opacity: 0,
          });
        }
        ScrollTrigger.create({
          trigger: container1,
          start: 'top 40%',
          // toggleActions: 'play none none reverse',
          // markers: true,
          onEnter: () => {
            // 🔹 CALCUL dynamique de la hauteur au lieu de 'auto'
            const targetHeight1 = container1.scrollHeight;
            gsap.to(container1, {
              height: targetHeight1,
              duration: 1,
              // onUpdate: () => ScrollTrigger.refresh(),
              onComplete: () => ScrollTrigger.refresh(),
              // RESTAURATION : background + border + boxShadow + marginBottom
              backgroundColor: 'rgba(38, 108, 174, 0.936)',
              border: '0.1875rem solid rgba(31, 78, 121, 0.936)',
              borderRadius: '1.5625rem',
              boxShadow:
                '0.75rem 0.75rem 1.25rem 0.0625rem rgba(31, 78, 121, 0.8)',
              marginBottom: '3.75rem',
            });
            if (paragraph1)
              gsap.to(paragraph1, { x: '0', opacity: 1, duration: 1 });
            if (projects1)
              gsap.to(projects1, { x: 0, opacity: 1, duration: 1 });
          },
          onLeaveBack: () => {
            // RESTAURATION ÉTAT FERMÉ : background transparent, border none, boxShadow none, marginBottom 0
            gsap.to(container1, {
              height: '6.25rem',
              duration: 1,
              // onUpdate: () => ScrollTrigger.refresh(),
              onComplete: () => ScrollTrigger.refresh(),
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              marginBottom: 0,
            });
            if (paragraph1)
              gsap.to(paragraph1, { x: '200%', opacity: 0, duration: 1 });
            if (projects1)
              gsap.to(projects1, { x: '-200%', opacity: 0, duration: 1 });
          },
        });
      }

      const container2 = document.querySelector('.paragraphContainer2');
      const paragraph2 = document.querySelector('.aboutParagraph2');
      const skills2 = container2.querySelector('.skillsContainer');

      if (container2) {
        gsap.set(paragraph2, {
          x: '200%',
          opacity: 0,
        });

        if (skills2) {
          gsap.set(skills2, {
            x: '-200%',
            opacity: 0,
          });
          // Remettre les jauges à 0 au chargement
          gsap.set(skills2.querySelectorAll('.progressbarWrapper'), {
            paddingRight: '80%',
          });
        }
        ScrollTrigger.create({
          trigger: container2,
          start: 'top 40%',
          toggleActions: 'play none none reverse',
          // markers: true,
          onEnter: () => {
            // 🔹 CALCUL dynamique de la hauteur au lieu de 'auto'
            const targetHeight2 = container2.scrollHeight;
            gsap.to(container2, {
              height: targetHeight2,
              duration: 1,
              // onUpdate: () => ScrollTrigger.refresh(),
              onComplete: () => ScrollTrigger.refresh(),
              backgroundColor: 'rgba(38, 108, 174, 0.936)',
              border: '0.1875rem solid rgba(31, 78, 121, 0.936)',
              borderRadius: '1.5625rem',
              boxShadow:
                '0.75rem 0.75rem 1.25rem 0.0625rem rgba(31, 78, 121, 0.8)',
              marginBottom: '3.75rem',
            });

            if (paragraph2)
              gsap.to(paragraph2, { x: '0', opacity: 1, duration: 1 });

            if (skills2) {
              gsap.to(skills2, { x: 0, opacity: 1, duration: 1 });

              // Animation des icônes et des jauges
              gsap.fromTo(
                skills2.querySelectorAll('.languageIcons'),
                { rotationY: '0deg' },
                { rotationY: '360deg', duration: 1, ease: 'none', repeat: -1 }
              );

              // Jauge : se remplit et reste remplie
              skills2.querySelectorAll('.progressbarWrapper').forEach((bar) => {
                gsap.to(bar, {
                  paddingRight: '0%',
                  duration: 1.2,
                  delay: 1.5,
                  overwrite: 'auto',
                });
              });
            }
          },
          onLeaveBack: () => {
            // Fermeture de la section
            gsap.to(container2, {
              height: '6.75rem',
              duration: 1,
              // onUpdate: () => ScrollTrigger.refresh(),
              onComplete: () => ScrollTrigger.refresh(),
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              marginBottom: 0,
            });

            if (paragraph2)
              gsap.to(paragraph2, { x: '200%', opacity: 0, duration: 1 });

            if (skills2) {
              gsap.to(skills2, { x: '-200%', opacity: 0, duration: 1 });
              // Remettre la jauge à 0 quand le container se ferme
              skills2.querySelectorAll('.progressbarWrapper').forEach((bar) => {
                gsap.set(bar, { paddingRight: '80%' });
              });
            }
          },
        });
      }
      ScrollTrigger.refresh();
    };

    if (document.readyState === 'complete') {
      onLoadHandler();
    } else {
      window.addEventListener('load', onLoadHandler);
    }

    return () => {
      window.removeEventListener('scroll', onFirstScroll);
      window.removeEventListener('load', onLoadHandler);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf('*');
    };
  }, []);

  return Datas.map((parag, index) => (
    <section
      key={index}
      className={`paragraphContainer${index} paragraphContainer`}
    >
      <h2 key={index} className={`titleSection titleSection${index}`}>
        {parag.title}
      </h2>
      {index === 0 ? (
        <p
          className={`aboutParagraph${index} aboutParagraph`}
          key={index + 1}
          dangerouslySetInnerHTML={{ __html: replaceTxt }}
        />
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
