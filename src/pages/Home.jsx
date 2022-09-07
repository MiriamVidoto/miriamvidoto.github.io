import Footer from '../components/Footer';
import Header from '../components/Header';
import office from '../images/office-light.png';
import picture from '../images/picture.png';
import './styles/Home.css';

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="my-code">
          <img src={office} alt="office" />
          <div className="list-code">
            <h2>Está no meu código</h2>
            <ul>
              <li>{'< Buscar conhecimento />'}</li>
              <li>{'< Achar soluções />'}</li>
              <li>{'< Aprimorar habilidades />'}</li>
              <li>{'< Lapidar ideias />'}</li>
            </ul>
          </div>
        </section>
        <section className="about">
          <div className="text-about">
            <h2> Eu sou meu maior projeto em desenvolvimento</h2>
            <p>Olá, tudo bem? </p>
            <p>
              Meu nome é Miriam, tenho 32 anos , sou filha da Sueli e do Junior,
              esposa do Diego e mãe da Heloísa de 10 anos, da Giulia de 6 anos e
              da Mag (minha bebê de 4 patas), sou brasileira e atualmente meu
              lar está em Guarujá - SP.
            </p>
            <p>
              Sou estudante de Desenvolvimento na
              <a href="https://www.betrybe"> Trybe </a>, onde aprendo um pouco
              mais a cada dia para me tornar uma Dev Full Stack
            </p>
          </div>
          <div className="img-about">
            <img src={picture} alt="myPicture" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
