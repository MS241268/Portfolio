import './index.css';
import { AiTwotoneMail } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
const linkedIn = `https://www.linkedin.com/in/?${process.env.LINKEDIN}`;
function Footer() {
  const instantYear = new Date().getFullYear();
  return (
    <footer>
      <div className="contactDiv">
        <a href={`${linkedIn}`}>
          <span>
            <BsLinkedin className="iconsFooter"></BsLinkedin>
            LinkedIn
          </span>
        </a>

        {/*cryptage adresse mail */}
        <a href="mailto:%73&#99;h&#111;&#110;ne%2e%6d&#97;&#114;&#99;&#64;&#111;%72a&#110;g%65%2e%66r">
          {/*****/}
          <span>
            <AiTwotoneMail className="iconsFooter"></AiTwotoneMail>
            Me Contacter
          </span>
        </a>
      </div>
      <p>© {instantYear} Marc Schonne. All rights reserved</p>
    </footer>
  );
}
export default Footer;
