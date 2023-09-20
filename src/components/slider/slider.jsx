import { useCallback, useState, useEffect } from 'react';
import leftArrow from '../../assets/icons/left_arrow.svg';
import './slider.css';

function Slider({ images }) {
  const [currentPicture, setCurrentPicture] = useState(0);

  const previousPicture = () => {
    setCurrentPicture(
      currentPicture !== 0 ? currentPicture - 1 : images.length - 1
    );
  }; /*Condition si clic sur la flèche 'previous' et 1ère image courante => Retour sur la dernière image*/

  const nextPicture = useCallback(
    () => {
      setCurrentPicture(
        currentPicture !== images.length - 1 ? currentPicture + 1 : 0
      );
    } /*Condition si clic sur la flèche 'next' et dernière image courante => Retour sur la 1ère image*/,
    [currentPicture, images.length]
  ); //Déclaration des dépendances : servent à observer les arguments pour lesquels la fonction doit s'exécuter

  //Timer slider automatique
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        nextPicture(currentPicture, images.length);
      }, 5000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [currentPicture, nextPicture, images.length]); //Facultatif car les dépendences "[...]" sont déjà dans la fonction "nextPicture"

  return (
    <section className="slider">
      <div
        className="picturesContainer"
        style={{ transform: `translateX(-${currentPicture * 100}%)` }}
      >
        {images.map((picture, index) => (
          <img
            src={picture}
            alt={`Présentation  ${index + 1} sur ${images.length} des diplômes`}
            key={index}
            className="picturesDegrees"
          />
        ))}
      </div>
      {images.length > 1 ? (
        <div className="arrow_navigate">
          <img
            className="arrow"
            src={leftArrow}
            onClick={previousPicture}
            alt="Flèche gauche"
          />
          <img
            className="arrow rightArrow"
            src={leftArrow}
            onClick={nextPicture}
            alt="Flèche droite"
          />
        </div>
      ) : null}
      <div className="numberPicture">
        {currentPicture + 1}/{images.length}
      </div>
    </section>
  );
}
export default Slider;
