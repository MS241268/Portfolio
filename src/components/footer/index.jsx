import './index.css';
import { AiTwotoneMail, AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
const linkedIn = `https://www.linkedin.com/in/?${process.env.LINKEDIN}`;
const gitHub = `https://github.com/?${process.env.GITHUB}`;
function Footer() {
  const instantYear = new Date().getFullYear();
  return (
    <footer>
      <div className="contactDiv">
        {/*cryptage adresse mail */}
        <a href="mailto:%73&#99;h&#111;&#110;ne%2e%6d&#97;&#114;&#99;&#64;&#111;%72a&#110;g%65%2e%66r">
          {/*****/}
          <i className="iconsFooter">
            <AiTwotoneMail className="iconsLink"></AiTwotoneMail>
          </i>
          <span> Me Contacter</span>
        </a>
        <a href={`${linkedIn}`}>
          <i className="iconsFooter">
            <BsLinkedin className="iconsLink"></BsLinkedin>
          </i>
          <span>LinkedIn</span>
        </a>
        <a href={`${gitHub}`}>
          <i className="iconsFooter">
            <AiOutlineGithub className="iconsLink"></AiOutlineGithub>
          </i>
          <span>Github</span>
        </a>
      </div>
      <p>© {instantYear} Marc Schonne. All rights reserved</p>
    </footer>
  );
}
export default Footer;
