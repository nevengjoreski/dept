import styled from "styled-components"
import { size } from "../../theme/sizes"
import { TextXxsBodyP, TextXxsBodySpan } from "../common/Text.styled"

export const StyledSection = styled.section`
  display: flex;
  height: ${size.section.clientNode.desktop};
  @media (max-width: ${size.breakpoint.tablet}) {
    height: 100%;
    flex-direction: column;
  }
`

// Image Text
export const StyledImagePartWrapper = styled.section`
  width: calc(100% * 2 / 3);
  height: 100%;
  @media (max-width: ${size.breakpoint.tablet}) {
    width: 100%;
  }
`

export const StyledDivImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: ${size.breakpoint.tablet}) {
    height: ${size.section.clientNode.mobile};
  }
`
export const StyledImageTextWrapper = styled.div`
  position: absolute;
  bottom: ${size.rems.l};
  padding: 0 ${size.rems.l};
  & > * {
    margin: ${size.rems.m} 0;
  }
`

export const StyledFontVariant = styled(TextXxsBodyP)`
  text-transform: uppercase;
`

export const StyledSpan = styled(TextXxsBodySpan)`
  padding-left: ${size.rems.s};
`

// Note Text
export const StyledTextWrapper = styled.div`
  width: calc(100% / 3);
  padding: ${size.rems.l};
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > * {
    // for the border
    margin-top: ${size.rems.l};
    padding-bottom: ${size.rems.l};
  }
  @media (max-width: ${size.breakpoint.tablet}) {
    width: 100%;
  }
`

export const StyledSpanMid = styled(TextXxsBodyP)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const StyledNoteInstance = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.shadowGrey};

  & > *:not(:last-child) {
    // read more section margin to not be applied
    margin-bottom: ${size.rems.s};
  }
  :last-child {
    border-bottom: none;
  }
`
