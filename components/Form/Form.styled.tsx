import styled from "styled-components"
import { size } from "../../theme/sizes"

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  padding: 3%;
  @media (max-width: ${size.breakpoint.tablet}) {
    flex-wrap: wrap;
  }
`
export const StyledForm = styled.form`
  width: 100%;
  margin-left: ${size.rems.m};
`
export const StyledHug = styled.h3`
  font-weight: 400;
  font-size: ${size.rems.xl};
  max-width: ${size.input.desktop};

  @media (max-width: ${size.breakpoint.tablet}) {
    max-width: initial;
    margin-bottom: ${size.rems.xl};
  }
`
export const StyledFormFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${size.breakpoint.tablet}) {
    flex-direction: column;
  }
`
export const StyledFormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${size.rems.m} ${size.rems.l} ${size.rems.m} 0;
  @media (max-width: ${size.breakpoint.tablet}) {
    margin: ${size.rems.m} 0;
  }
`
export const TextLine = styled.input`
  outline-style: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.shadowGrey};
  padding: ${size.rems.m} 0;
  width: ${size.input.desktop};
  @media (max-width: ${size.breakpoint.tablet}) {
    width: 100%;
  }
`
export const TextLineArea = styled.textarea`
  background-color: transparent;
  outline-style: none;
  outline-offset: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.shadowGrey};
  padding: ${size.rems.m} 0;
  resize: none;
  width: ${size.input.desktop};
  @media (max-width: ${size.breakpoint.tablet}) {
    width: 100%;
  }
`
export const StyledLabel = styled.label`
  text-transform: uppercase;
`

export const StyledButton = styled.button`
  width: ${size.button.desktop};
  border: 1px solid;
  border-radius: 50px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${size.rems.m};
  margin-top: ${size.rems.m};
  @media (max-width: ${size.breakpoint.tablet}) {
    width: 100%;
  }
`
