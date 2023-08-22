import Slider from '../components/slider/slider';
import Title from '../components/title';
import '../css/diplomes.css';
import Cap1 from '../assets/degrees/CAP_Electrotech.jpg';
import Cap2 from '../assets/degrees/CAP_Electronique.jpg';
import Bep from '../assets/degrees/BEP_Electronique.jpg';
import Bac from '../assets/degrees/BAC_Electronique.jpg';
import Bts from '../assets/degrees/BTS_Electronique.jpg';
import Att from '../assets/degrees/Attestation_OC.jpg';

const images = [Cap1, Cap2, Bep, Bac, Bts, Att];
function Diplomes() {
  return (
    <main>
      <section className="degreesSection banner">
        <h1 className="h1TitleDegreesContainer">
          <Title content="MES DIPLÔMES" />
        </h1>
      </section>
      <Slider images={images}></Slider>
    </main>
  );
}

export default Diplomes;
