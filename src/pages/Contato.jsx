import Header from "../components/Header";
import github from '../images/git.png'
import linkedin from '../images/linkedin.png'
import facebook from '../images/face.png';
import instagram from '../images/insta.png';

function Contato() {
  return (
    <>
      <Header />
      <main>
        <h2>Meus contatos:</h2>
        <a href="https://github.com/MiriamVidoto">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/miriam-vidoto/">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://www.facebook.com/miriamvidoto.hdg">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/miriamsvidoto/">
          <img src={instagram} alt="instagram" />
        </a>
      </main>
    </>
  );
}

export default Contato;
