import styled from "styled-components"
import { size } from "../../theme/sizes"
import { DeptLogoA, ThreeDots } from "../../svg"

export const StyledSection = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.colors.black};
  justify-content: space-between;
  align-items: center;
  height: ${size.section.navBar.desktop};
  padding: 0 4%;
  @media (max-width: ${size.breakpoint.tablet}) {
    height: ${size.section.navBar.mobile};
    background-color: white;
    color: black;
  }
`
export const StyledList = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;

  & > ul > li {
    list-style-type: none;
    display: inline-block;
    padding: ${size.rems.xs};
  }

  & > ul > li:hover {
    padding-bottom: ${size.rems.xs};
    text-decoration: underline 1px;
    text-underline-offset: 5px;
  }

  @media (max-width: ${size.breakpoint.tablet}) {
    display: none;
  }
`

export const StyledMenu = styled.div`
  display: none;
  cursor: pointer;
  font-weight: 400;
  @media (max-width: ${size.breakpoint.tablet}) {
    display: inline;
  }
`

export const StyledDeptLogoA = styled(DeptLogoA)`
  display: inline;
  height: 25px;
  @media (max-width: ${size.breakpoint.tablet}) {
    color: ${({ theme }) => theme.colors.black};
    height: 15px;
  }
`

export const StyledThreeDots = styled(ThreeDots)`
  margin-left: 3rem;
`
