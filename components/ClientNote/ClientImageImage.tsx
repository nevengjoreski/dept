import { StyledSection } from "./ClientNote.styled"
import { ImageWithText } from "./components/ImageWithText"
import { FC } from "react"
import { TClientImageImage } from "./types"

export const ClientImageImage: FC<TClientImageImage> = ({
  primaryImage,
  secondaryImage,
}) => (
  <StyledSection>
    <ImageWithText image={primaryImage} />
    <ImageWithText image={secondaryImage} />
  </StyledSection>
)
