import { StyledHeading } from "../StyledComponents/StyledHeading";
import { StyledCardSkill } from "../StyledComponents/styledCardSkill";
import htmlImg from '../images/skills/html.jpg';
import cssImg from '../images/skills/css.jpg';
import javascriptImg from '../images/skills/javascript.jpg';
import reactImg from '../images/skills/react.jpg';
import reduxImg from '../images/skills/redux.jpg';
import nodeImg from '../images/skills/node.jpg';
import typescriptImg from '../images/skills/typescript.jpg';
import expressImg from '../images/skills/express.jpg';
import mysqlImg from '../images/skills/sql.jpg';
import sequelizeImg from '../images/skills/sequelize.jpg';
import mongodbImg from '../images/skills/mongo.jpg';
import mongooseImg from '../images/skills/mongoose.jpg';
import pythonImg from '../images/skills/python.jpg';
import jestImg from '../images/skills/jest.jpg';
import reactTestingLibraryImg from '../images/skills/rtl.jpg';
import mochaImg from '../images/skills/mocha.jpg';
import chaiImg from '../images/skills/chai.jpg';
import dockerImg from '../images/skills/docker.jpg';
import styledComponentsImg from '../images/skills/styled-components.jpg';
import gitImg from '../images/skills/git.jpg';
import githubImg from '../images/skills/github.jpg';
import { StyledImg } from "../StyledComponents/StyledImg";
import PortfolioContext from "../context/PortfolioContext";
import { useContext } from "react";

export default function CardSkill({ skill }) {
  const { setSkillSelected } = useContext(PortfolioContext);

  const images = {
    html: htmlImg,
    css: cssImg,
    javascript: javascriptImg,
    react: reactImg,
    redux: reduxImg,
    node: nodeImg,
    typescript: typescriptImg,
    express: expressImg,
    mysql: mysqlImg,
    sequelize: sequelizeImg,
    mongodb: mongodbImg,
    mongoose: mongooseImg,
    python: pythonImg,
    jest: jestImg,
    reactTestingLibrary: reactTestingLibraryImg,
    mocha: mochaImg,
    chai: chaiImg,
    docker: dockerImg,
    styledComponents: styledComponentsImg,
    git: gitImg,
    github: githubImg,
  }

  return (
    <StyledCardSkill type="button" onClick={() => setSkillSelected(skill)}>
      <StyledImg src={images[skill.image]} alt={skill.name} width='100%' borderRadius='4px'/>
      <StyledHeading level="2" size='.8em'>{skill.name}</StyledHeading>
    </StyledCardSkill>
  )
};
