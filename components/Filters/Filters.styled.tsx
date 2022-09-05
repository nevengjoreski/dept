import styled from "styled-components"
import { TextSh2 } from "../common/Text.styled"
import { size } from "../../theme/sizes"

export const StyledSection = styled.section`
  height: ${size.section.filters.desktop};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${size.rems.xl};

  @media (max-width: ${size.breakpoint.tablet}) {
    padding: ${size.rems.m};
    flex-direction: row-reverse;
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: ${({ theme }) => theme.colors.black};
  }
`

export const StyledTextSSh2 = styled(TextSh2)`
  color: ${({ theme }) => theme.colors.darkGrey};

  & span {
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
    text-decoration: underline 1px;
    text-underline-offset: 5px;
  }

  @media (max-width: ${size.breakpoint.tablet}) {
    font-size: ${size.rems.m};
    line-height: 18.16px;

    & span {
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
    }
  }
`
