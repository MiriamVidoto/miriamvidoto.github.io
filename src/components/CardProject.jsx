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
import { useState } from 'react';
import { StyledTag } from '../StyledComponents/StyledTag';
import { StyledHeading } from "../StyledComponents/StyledHeading";


export default function CardProject({ project }) {
  const [showInformation, setShowInformation] = useState(false);

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
      {
        showInformation && (
          <StyledTag
            direction='column'
            justifyContent='center'
            position='absolute'
            zIndex='1'
            width='100%'
            height='100%'
            opacity='0.95'
            fontSize='1.2rem'
            onMouseEnter={() => setShowInformation(true)}
            onMouseLeave={() => setShowInformation(false)}
          >
            <StyledHeading level='3'>{project.name}</StyledHeading>
            <p>{project.description}</p>
            <TagLinkProject github={project.github} url={project.url} />
          </StyledTag>
        )
      }
      <StyledImg
        src={images[project.image]}
        alt={project.name}
        width="100%"
        height="100%"
        borderRadius="8px"
        onMouseEnter={() => setShowInformation(true)}
        onMouseLeave={() => setShowInformation(false)}
      />
    <TagLinkProject github={project.github} url={project.url} />
    </StyledCardProject>

  )
};