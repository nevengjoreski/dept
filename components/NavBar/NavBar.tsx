import {
  StyledDeptLogoA,
  StyledList,
  StyledMenu,
  StyledSection,
  StyledThreeDots,
} from "./NavBar.styled"

export const NavBar = () => {
  return (
    <StyledSection>
      <StyledDeptLogoA />

      <StyledList>
        <ul>
          <li>Work</li>
          <li>Culture</li>
          <li>Services</li>
          <li>Insights</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>

        <StyledThreeDots />
      </StyledList>

      <StyledMenu>MENU</StyledMenu>
    </StyledSection>
  )
}
