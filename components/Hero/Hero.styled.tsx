import styled from "styled-components"
import { size } from "../../theme/sizes"

export const StyledImagePartWrapper = styled.section`
  height: ${size.section.hero.desktop};
  @media (max-width: ${size.breakpoint.tablet}) {
    height: ${size.section.hero.mobile};
  }
`

export const StyledDivImageWrapper = styled.div`
  height: 100%;
  position: relative;
`
