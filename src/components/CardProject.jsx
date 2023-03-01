import { StyledCardProject } from '../StyledComponents/StyledCardProject';
import { StyledImg } from '../StyledComponents/StyledImg';
import TagLinkProject from './TagLinkProject';
import lessonsLearnedImg from '../images/projetos/lessons-learned.jpg';
import pixelsArtImg from '../images/projetos/pixels-art.jpg';
import solarSystemImg from '../images/projetos/solar-system.jpg';
import tryunfoImg from '../images/projetos/tryunfo.jpg';
import trybeTunesImg from '../images/projetos/trybe-tunes.jpg';
import trybeWalletImg from '../images/projetos/trybe-wallet.jpg';
import triviaImg from '../images/projetos/trivia.jpg';
import starWarsImg from '../images/projetos/star-wars.jpg';
import recipesAppImg from '../images/projetos/recipes-app.jpg';
import tfcImg from '../images/projetos/tfc.jpg';
import deliveryAppImg from '../images/projetos/delivery-app.jpg';
import myPokedexImg from '../images/projetos/my-pokedex.jpg';

export default function CardProject({ project }) {
  const images = {
    lessonsLearned: lessonsLearnedImg,
    pixelsArt: pixelsArtImg,
    solarSystem: solarSystemImg,
    tryunfo: tryunfoImg,
    trybeTunes: trybeTunesImg,
    trybeWallet: trybeWalletImg,
    trivia: triviaImg,
    starWars: starWarsImg,
    recipesApp: recipesAppImg,
    tfc: tfcImg,
    deliveryApp: deliveryAppImg,
    myPokedex: myPokedexImg,
  };

  return (
    <StyledCardProject>
      <StyledImg
        src={images[project.image]}
        alt={project.name}
        width="100%"
        height="100%"
        borderRadius="8px"
      />
    <TagLinkProject github={project.github} url={project.url} />
    </StyledCardProject>

  )
};