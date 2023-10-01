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
          // start:'top center', 27/08/23 Remettre si toujours Ko sur Mac
          start: 'center center',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
          onUpdate: () => ScrollTrigger.refresh(),
          onEnter: () => {
            gsap.to('.aboutParagraph0', {
              scrollTrigger: {
                trigger: '.paragraphContainer0',
                // start:'top center',27/08/23 Remettre si toujours Ko sur Mac
                start: 'center center',
                toggleActions: 'play none none reverse',
                // markers: true,
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
        // end: 'bottom center',
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
              // end: 'top top',
              // markers: true,
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
  // console.log(Datas, typeof Datas);
  // useEffect(() => {
  //   const toto = Array.from(document.getElementsByClassName('titleSection0'));
  //   console.log(toto);
  // }, []);
  return Datas.map((parag, index) => (
    <section
      key={index}
      className={`paragraphContainer${index} paragraphContainer`}
    >
      <h2 key={index} className={`titleSection titleSection${index}`}>
        {parag.title}
      </h2>
      <p className={`aboutParagraph${index} aboutParagraph`} key={index + 1}>
        {parag.description}
      </p>
      {/* <section className={`projectsContainer1`}></section> */}
      {Array.isArray(parag.details) ? (
        <section className={`projectsContainer`}>
          {/* {console.log(typeof parag.details)} */}
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
