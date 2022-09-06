import {
  StyledDeptLogoA,
  StyledList,
  StyledMenu,
  StyledSection,
  StyledThreeDots,
} from "./NavBar.styled"

export const NavBar = ({ items }: { items: Array<string> }) => {
  return (
    <StyledSection>
      <StyledDeptLogoA />

      <StyledList>
        <ul>
          {items.map((nav) => (
            <li key={nav}>{nav}</li>
          ))}
        </ul>

        <StyledThreeDots />
      </StyledList>

      <StyledMenu>MENU</StyledMenu>
    </StyledSection>
  )
}
