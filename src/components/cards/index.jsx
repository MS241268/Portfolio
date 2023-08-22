import React from 'react';
import './cards.css';
import Datas from '../../datas/about';

function Cards(content) {
  return Datas.map((parag) =>
    Array.isArray(content) ? (
      <section className="projectsContainer">
        {console.log(content)}
        {content.map((det, index) => (
          <article key={index} className={`project${index} project`}>
            {/* {console.log(`project${index}`)} */}
            <div className="imgContainer">
              <img
                src={det.projectIcon}
                alt={`logo du ${content.title}`}
                className={`projectIcon`}
              ></img>
            </div>
            <h3 className="projectTitle">{det.projectTitle}</h3>
            <h4 className="pragraphTitle">DESCRIPTION du PROJET</h4>
            <p className="projectDescription">{det.projectDescription}</p>
            <h4 className="pragraphTitle">OBJECTIF</h4>
            <p className="projectOjective">{det.projectObjective}</p>
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
    ) : null
  );
}
export default Cards();
