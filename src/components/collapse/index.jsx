import { useState } from 'react';
import './index.css';
import downArrow from '../../assets/icons/down_arrow.svg';

function Collapse({ label, content }) {
  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen(!open);
  }

  return (
    <article className="articleCollapse">
      {/* {console.log(`valeur content:`, content)} */}
      <button onClick={toggle} className="btnCollapse">
        <p>{content.date}</p>
        {/* {console.log(
          `typeof content.jobDescription:`,
          typeof content.jobDescription,
          'valeur de content.jobDescription:',
          content.jobDescription
        )} */}
        {/* <span className="companyName"> */}
        <img
          src={content.iconCompany}
          alt={`Logo Société${content.company}`}
          className="logoCompany"
        />
        <h2 className="companyCollapse">{label}</h2>
        <p className="placeCollapse">{content.place}</p>
        {/* </span> */}
        <img
          src={downArrow}
          alt="Ouverture ou fermeture de l'élément"
          className={open ? 'arrowCollapseRotate' : 'arrowCollapse'}
        />
      </button>

      {
        Array.isArray([content.jobDescription]) //Le contenu est il un tableau ?
          ? [content.jobDescription].map((job) => (
              <div className={open ? 'collapseContent' : 'hidden'}>
                <h3 className="functionTitle">{content.function}</h3>
                <p className="departmentParagraph">{content.department}</p>
                <ul>
                  {/* {console.log(
                    `typeof content:`,
                    typeof content,
                    `valeurs content:`,
                    job
                  )} */}
                  {job.map((job) => (
                    <li key={job}>{job}</li>
                  ))}
                </ul>
              </div>
            ))
          : null //Le contenu n'est pas un tableau
      }
    </article>
  );
}
export default Collapse;
