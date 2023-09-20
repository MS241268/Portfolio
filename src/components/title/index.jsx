import './index.css';

function Title({ content }) {
  const charactersArray = content.split('');
  return charactersArray.map((char, index) => (
    <div
      className={`letterContainer letterContainer${index}`}
      style={{ animationDelay: `${index * 0.2}s` }}
      key={index}
    >
      <span
        className={
          char === ' '
            ? `charFront charFornt${index} charFrontBlank`
            : `charFront charFront${index}`
        }
        key={index}
      >
        {char}
      </span>
    </div>
  ));
}

export default Title;
