import { StyledMain } from "../StyledComponents/StyledMain";
import { projects } from "../data/projects";
import CardProject from "../components/CardProject";

export default function Projetos() {
  return (
    <>
            <StyledMain minHeight='80vh' gap='0.5rem' wrap='wrap'>
          {
            projects.map((project, index) => <CardProject key={index} project={project} />)
          }
        </StyledMain>
    </>
  );
}
