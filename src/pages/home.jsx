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
    gsap.set('.mouseScroll', {
      display: 'block',
      scrollTrigger: {
        trigger: '.paragraphContainer2',
        start: '650px center',
        toggleActions: 'play none none none',
        onEnter: () => {
          window.addEventListener('scroll', function () {
            const scrollPosition = window.pageYOffset;
            if (scrollPosition > 3300) {
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
            }
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

  useLayoutEffect(() => {
    gsap.set('.upWindow', {
      display: 'none',
      scrollTrigger: {
        trigger: '.bannerHome',
        start: 'top 140px',
        toggleActions: 'play none none none',
        onEnter: () => {
          gsap.set('.mouseScroll', { display: 'block' });
          gsap.set('.upWindow', { display: 'none' });
        },
        // markers: {
        //   startColor: 'purple',
        //   endColor: 'purple',
        //   fontSize: '2rem',
        //   indent: 500,
        // },
      },
    });
  }, []);
  return (
    <main>
      <section className="bannerHome">
        <div className="imageContainer">
          <img src={Photo} alt="Profil"></img>
        </div>
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
