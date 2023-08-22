import './index.css';

function Footer() {
  const instantYear = new Date().getFullYear();
  return (
    <footer>
      <p>© {instantYear} Marc Schonne. All rights reserved</p>
    </footer>
  );
}
export default Footer;
