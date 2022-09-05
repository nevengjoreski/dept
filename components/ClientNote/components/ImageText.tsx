import {
  StyledFontVariant,
  StyledImageTextWrapper,
  StyledSpan,
} from "../ClientNote.styled"
import { Dot } from "../../../svg"
import { FC } from "react"
import { TextLH3 } from "../../common/Text.styled"
import { IImageText } from "../types"

export const ImageText: FC<IImageText> = ({
  mid,
  readMore = "Read more",
  top,
}) => (
  <StyledImageTextWrapper>
    <StyledFontVariant>{top}</StyledFontVariant>
    <TextLH3>{mid}</TextLH3>
    <div>
      <Dot />
      <StyledSpan>{readMore}</StyledSpan>
    </div>
  </StyledImageTextWrapper>
)
