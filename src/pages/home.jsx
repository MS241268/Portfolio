import '../css/home.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import Title from '../components/title/index';
import Photo from '../assets/moi.jpg';
import Mouse from '../assets/icons/computer_mouse_icon_126666.svg';
import Paragraph from '../components/paragraph/index';
import DownArrow from '../assets/icons/down_arrow.svg';

gsap.registerPlugin(ScrollTrigger);
console.clear();

function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
    const tlDown = gsap.timeline({ repeat: -1 });
    tlDown.fromTo(
      '.downArrow',
      {
        opacity: 0.2,
      },
      {
        opacity: 1,
        stagger: '0.5',
      }
    );
  }, []);

  useLayoutEffect(() => {
    // Récupérer la dernière ligne de la grid
    const skillsContainer = document.querySelector('.skillsContainer');
    const lastRow = skillsContainer.lastElementChild;
    if (!lastRow) return;

    let scrollHandlerAdded = false; // <-- ajout minimal pour éviter les doublons

    gsap.set('.mouseScroll', {
      display: 'block',
      scrollTrigger: {
        trigger: lastRow,
        start: 'top bottom',
        // markers: true,
        toggleActions: 'play none none reverse',
        onEnter: () => {
          // Empêcher l'empilement → ton bug venait d’ici
          if (scrollHandlerAdded) return;
          scrollHandlerAdded = true;

          window.addEventListener('scroll', function () {
            const mouseScroll = document.querySelector('.mouseScroll');
            const mouseTop =
              mouseScroll.getBoundingClientRect().top + window.scrollY;
            const lastRowTop =
              lastRow.getBoundingClientRect().top + window.scrollY;

            // Déclenchement légèrement avant le top
            if (mouseTop >= lastRowTop - 20) {
              gsap.set('.mouseScroll', { display: 'none' });
              gsap.set('.arrowScroll', {
                display: 'block',
                onEnter: () => {
                  gsap.set('.upWindow', {
                    display: 'block',
                    scrollTrigger: {},
                  });
                },
              });
            } else {
              gsap.set('.arrowScroll', { display: 'none' });
              gsap.set('.mouseScroll', {
                display: 'block',
                onEnter: () => {
                  gsap.set('.upWindow', {
                    display: 'block',
                    scrollTrigger: {},
                  });
                },
              });
              ScrollTrigger.refresh();
            }
          });
        },
      },
    });
  }, []);
  return (
    <main>
      <section className="bannerHome">
        <img src={Photo} alt="Profil" className="image"></img>
        <h1 className="h1Title">
          <Title content="Marc SCHONNE" />
        </h1>
      </section>
      <div className="wrapper">
        <Paragraph></Paragraph>
      </div>
      <div className="arrowScroll">
        <img
          className="upWindow"
          src={DownArrow}
          alt="Flèche vers le haut"
          onClick={scrollToTop}
        ></img>
      </div>
      <div className="mouseScroll">
        <img
          className="mouseIcon"
          src={Mouse}
          alt="Icône souris ordinateur"
        ></img>
        <div className="downArrowsContainer">
          <img
            className="arrowMouse downArrow"
            src={DownArrow}
            alt="Flèche vers le bas"
          ></img>
          <img
            className="arrowMouse downArrow"
            src={DownArrow}
            alt="Flèche vers le bas"
          ></img>
          <img
            className="arrowMouse downArrow"
            src={DownArrow}
            alt="Flèche vers le bas"
          ></img>
        </div>
      </div>
    </main>
  );
}

export default Home;
