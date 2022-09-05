import styled from "styled-components"
import { size } from "../../theme/sizes"

export const StyledTextHeader = styled.section`
  & > p {
    margin: ${size.rems.l};
  }
`

export const StyledList = styled.div`
  margin: 0 10%;
  padding-bottom: 3%;
  display: flex;
  flex-wrap: wrap;

  & > * {
    flex: 1 0 33%;
    margin: ${size.rems.xl} 0;
  }

  @media (max-width: ${size.breakpoint.tablet}) {
    margin: 0;
    & > * {
      flex: 1 0 50%;
      margin: ${size.rems.xl} 0;
    }
  }
`
