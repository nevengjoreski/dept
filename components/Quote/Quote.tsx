import { TextSh2, TextXsBody } from "../common/Text.styled"
import { StyledSection } from "./Quote.styled"

interface IQuote {
  quote: string
  author: string
}

export const Quote = ({ author, quote }: IQuote) => (
  <StyledSection>
    <TextSh2>{quote}</TextSh2>
    <TextXsBody>{author}</TextXsBody>
  </StyledSection>
)
