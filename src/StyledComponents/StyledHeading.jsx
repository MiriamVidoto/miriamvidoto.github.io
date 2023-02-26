import styled,  {css} from "styled-components";

export const StyledHeading = styled('h1').attrs(({level}) => ({
  as: `h${level}`
}))`
${({ color, size, theme }) => css`
  color: ${color ? color : theme.colors.title};
  font-size: ${size};
`}`
