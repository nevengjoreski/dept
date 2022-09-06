import { StyledSection } from "./ClientNote.styled"
import { ImageWithText } from "./components/ImageWithText"
import { FC } from "react"
import { TClientImageImage } from "./types"

export const ClientImageImage: FC<TClientImageImage> = ({
  images: [primaryImage, secondaryImage],
  text,
}) => (
  <StyledSection>
    <ImageWithText image={primaryImage} text={text} />
    <ImageWithText image={secondaryImage} text={text} />
  </StyledSection>
)
