import styled,  {css} from "styled-components";

export const StyledHeading = styled('h1').attrs(({level}) => ({
  as: `h${level}`
}))`
${({ color, size }) => css`
  color: ${color};
  font-size: ${size};
`}`
