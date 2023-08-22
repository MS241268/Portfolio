import './index.css';

function Title({ content }) {
  const charactersArray = content.split('');
  const urlContent =
    document.location.hash.split('/'); /* Prélèvement de l'url*/

  return charactersArray.map((char, index) => (
    <span
      className={
        urlContent[1] === '' ? 'letterContainer' : 'letterContainerOtherPages'
      }
      style={{ animationDelay: `${index * 0.2}s` }}
      key={index}
    >
      <span className="charFront" key={index}>
        {char}
      </span>
    </span>
  ));
}

export default Title;
