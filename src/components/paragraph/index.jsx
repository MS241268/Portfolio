import './index.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useLayoutEffect } from 'react';
import Datas from '../../datas/about';

gsap.registerPlugin(ScrollTrigger);

console.clear();

// import Cards from "../cards/index.jsx"
function Paragraph() {
  //////Début Container Qui suis je//////
  useLayoutEffect(() => {
    gsap.fromTo(
      '.paragraphContainer0',
      {
        minHeight: '100px',
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        marginBottom: 0,
      },
      {
        height: 'auto',
        backgroundColor: 'rgba(38, 108, 174, 0.936)',
        border: '3px solid rgba(31, 78, 121, 0.936)',
        boxShadow: '12px 12px 20px 1px rgba(31, 78, 121, 0.8)',
        marginBottom: '60px',
        scrollTrigger: {
          trigger: '.paragraphContainer0',
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
          onUpdate: () => ScrollTrigger.refresh(),
          onEnter: () => {
            gsap.to('.aboutParagraph0', {
              scrollTrigger: {
                trigger: '.paragraphContainer0',
                start: 'top center',
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
      border: '3px solid rgba(31, 78, 121, 0.936)',
      boxShadow: '12px 12px 20px 1px rgba(31, 78, 121, 0.8)',
      marginBottom: '60px',
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
      border: '3px solid rgba(31, 78, 121, 0.936)',
      boxShadow: '12px 12px 20px 1px rgba(31, 78, 121, 0.8)',
      marginBottom: '60px',
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
      <h2 key={index} className="titleSection">
        {parag.title}
      </h2>
      <p className={`aboutParagraph${index} aboutParagraph`} key={index + 1}>
        {parag.description}
      </p>
      <section className={`projectsContainer1`}></section>
      {/* <Cards content={parag.details}>
			</Cards> */}
      {Array.isArray(parag.details) ? (
        <section className={`projectsContainer`}>
          {parag.details.map((det, index) => (
            <article key={index} className={`project${index} project`}>
              <div className="imgContainer">
                <img
                  src={det.projectIcon}
                  alt={`logo du ${parag.title}`}
                  className={`projectIcon`}
                ></img>
              </div>
              <h3 className="projectTitle">{det.projectTitle}</h3>
              <h4 className="pragraphTitle">DESCRIPTION du PROJET</h4>
              <p className="projectDescription">{det.projectDescription}</p>
              <h4 className="pragraphTitle">OBJECTIFS</h4>
              {/* {console.log((parag.details[index]).projectObjective )} */}

              {Array.isArray(parag.details[index].projectObjective) ? (
                det.warning !== undefined ? (
                  <div className="projectOjectiveWarningContainer">
                    <ul className="projectOjectiveWarningUl">
                      {parag.details[index].projectObjective.map(
                        (obj, index) => (
                          <li key={index} className="projectOjectiveLi">
                            {obj.objectif}
                          </li>
                        )
                      )}
                    </ul>
                    <p className="warning">&#x26A0; : {det.warning}</p>
                  </div>
                ) : (
                  <ul className="projectOjectiveUl">
                    {parag.details[index].projectObjective.map((obj, index) => (
                      <li key={index} className="projectOjectiveLi">
                        {obj.objectif}
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