import './index.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
    let hasRefreshedOnScroll = false;

    const onFirstScroll = () => {
      if (hasRefreshedOnScroll) return;
      hasRefreshedOnScroll = true;
      // micro-tempo avant d'activer
      ScrollTrigger.refresh();
      window.removeEventListener('scroll', onFirstScroll);
    };

    window.addEventListener('scroll', onFirstScroll, { passive: true });

    const onLoadHandler = () => {
      const mm = gsap.matchMedia();
      const container0 = document.querySelector('.paragraphContainer0');
      const paragraph0 = document.querySelector('.aboutParagraph0');
      const container1 = document.querySelector('.paragraphContainer1');
      const paragraph1 = document.querySelector('.aboutParagraph1');
      const projects1 = container1?.querySelector('.projectsContainer');
      const container2 = document.querySelector('.paragraphContainer2');
      const paragraph2 = document.querySelector('.aboutParagraph2');
      const skills2 = container2?.querySelector('.skillsContainer');
      let container2ST = null;
      gsap.set(container0, { height: '6.25rem' });
      gsap.set(paragraph0, { x: '200%', opacity: 0 });

      if (paragraph1) gsap.set(paragraph1, { x: '200%', opacity: 0 });
      if (projects1) gsap.set(projects1, { x: '-200%', opacity: 0 });

      if (paragraph2) gsap.set(paragraph2, { x: '200%', opacity: 0 });
      if (skills2) {
        gsap.set(skills2, { x: '-200%', opacity: 0 });
        gsap.set(skills2.querySelectorAll('.progressbarWrapper'), {
          paddingRight: '80%',
        });
      }

      const createScrollTriggers = (startValue) => {
        /* ---------- CONTAINER 0 ---------- */
        ScrollTrigger.create({
          trigger: container0,
          start: startValue,
          // markers: true,
          onEnter: () => {
            gsap.to(container0, {
              height: 'auto',
              onComplete: () => ScrollTrigger.refresh(),
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
            gsap.to(container0, {
              height: '6.25rem',
              duration: 1,
              onComplete: () => ScrollTrigger.refresh(),
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              marginBottom: 0,
            });
            gsap.to(paragraph0, { x: '200%', opacity: 0, duration: 1 });
          },
        });

        /* ---------- CONTAINER 1 ---------- */
        if (container1) {
          ScrollTrigger.create({
            trigger: container1,
            start: startValue,
            // markers: true,
            onEnter: () => {
              gsap.to(container1, {
                height: 'auto',
                duration: 1,
                onComplete: () => {
                  ScrollTrigger.refresh();
                  createContainer2Trigger(); /*permet l'apparation du trigger à 45% pour déclencher l'animation du paragraphContainer2 si et seulement si le paragraphContainer1 est totalement ouvert*/
                },
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
              gsap.to(container1, {
                height: '6.25rem',
                duration: 1,
                onComplete: () => ScrollTrigger.refresh(),
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                marginBottom: 0,
              });
              if (paragraph1)
                gsap.to(paragraph1, {
                  x: '200%',
                  opacity: 0,
                  duration: 1,
                });
              if (projects1)
                gsap.to(projects1, {
                  x: '-200%',
                  opacity: 0,
                  duration: 1,
                });
              if (container2ST) {
                /*permet la disparation du trigger à 45% pour ne pas déclencher l'animation du paragraphContainer2 lorsque le paragraphContainer1 est fermé*/
                container2ST.kill();
                container2ST = null;
              }
            },
          });
        }
      };
      /* ---------- CONTAINER 2 ---------- */
      /* Fontion qui permet l'apparation du trigger à 45% pour déclencher l'animation du paragraphContainer2 si et seulement si le paragraphContainer1 est totalement ouvert*/
      skills2
        .querySelectorAll('.progressbarWrapper')
        .forEach((bar) => gsap.set(bar, { paddingRight: '80%' }));

      const createContainer2Trigger = () => {
        if (container2ST || !container2) return;

        container2ST = ScrollTrigger.create({
          trigger: '.paragraphContainer1',
          start: '94.5% 60%',
          // markers: true,
          onEnter: () => {
            gsap.to(container2, {
              height: 'auto',
              duration: 1,
              onComplete: () => ScrollTrigger.refresh(),
              backgroundColor: 'rgba(38, 108, 174, 0.936)',
              border: '0.1875rem solid rgba(31, 78, 121, 0.936)',
              borderRadius: '1.5625rem',
              boxShadow:
                '0.75rem 0.75rem 1.25rem 0.0625rem rgba(31, 78, 121, 0.8)',
              marginBottom: '3.75rem',
            });

            if (paragraph2) {
              gsap.to(paragraph2, { x: '0', opacity: 1, duration: 1 });
            }

            if (skills2) {
              gsap.to(skills2, { x: 0, opacity: 1, duration: 1 });

              gsap.fromTo(
                skills2.querySelectorAll('.languageIcons'),
                { rotationY: '0deg' },
                {
                  rotationY: '360deg',
                  duration: 1,
                  ease: 'none',
                  repeat: -1,
                }
              );

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
            gsap.to(container2, {
              height: '6.75rem',
              duration: 1,
              overwrite: 'auto',
              onComplete: () => ScrollTrigger.refresh(),
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              marginBottom: 0,
            });

            if (paragraph2) {
              gsap.to(paragraph2, {
                x: '200%',
                opacity: 0,
                duration: 1,
              });
            }

            if (skills2) {
              gsap.to(skills2, {
                x: '-200%',
                opacity: 0,
                duration: 1,
              });

              skills2
                .querySelectorAll('.progressbarWrapper')
                .forEach((bar) => gsap.set(bar, { paddingRight: '80%' }));
            }
          },
        });
      };
      // écran très large > 2000 px
      mm.add('(min-width: 2000px)', () => createScrollTriggers('top 20%'));

      // large desktop classique 1200–1999 px
      mm.add('(min-width: 1200px) and (max-width: 1999px)', () =>
        createScrollTriggers('top 45%')
      );

      // medium desktop / laptop ≤ 1199 px
      mm.add('(max-width: 1199px)', () => createScrollTriggers('top 37.5%'));

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
      gsap.matchMedia().revert();
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
