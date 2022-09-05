import styled from "styled-components"
import { size } from "../../theme/sizes"

export const StyledSection = styled.section`
  text-align: center;
  padding: 5% 0;
  & > * {
    margin: ${size.rems.l};
  }
`
