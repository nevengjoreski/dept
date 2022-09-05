import {
  StyledButton,
  StyledForm,
  StyledFormControl,
  StyledFormFields,
  StyledHug,
  StyledLabel,
  StyledSection,
  TextLine,
  TextLineArea,
} from "./Form.styled"

export const Form = () => {
  return (
    <StyledSection>
      <StyledHug>
        QUESTION? <br /> WE ARE HERE TO HELP!
      </StyledHug>

      <StyledForm>
        <StyledFormFields>
          <StyledFormControl>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <TextLine id="name" type="text" />
          </StyledFormControl>
          <StyledFormControl>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <TextLine id="email" type="text" required />
          </StyledFormControl>
        </StyledFormFields>

        <StyledFormControl>
          <StyledLabel htmlFor="message">Message</StyledLabel>
          <TextLineArea id="message" rows={5} />
        </StyledFormControl>
        <StyledButton type="submit">Send</StyledButton>
      </StyledForm>
    </StyledSection>
  )
}
