import {
  StyledDivImageWrapper,
  StyledImagePartWrapper,
} from "../ClientNote.styled"
import Image from "next/image"
import { size } from "../../../theme/sizes"
import { ImageText } from "./ImageText"
import { FC } from "react"
import { IImageWithText } from "../types"

export const ImageWithText: FC<IImageWithText> = ({ image, text }) => (
  <StyledImagePartWrapper>
    <StyledDivImageWrapper>
      <Image
        style={{ opacity: size.opacity }}
        src={image}
        alt={"Image Alt"} // to be dynamic
        layout="fill"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <ImageText {...text} />
    </StyledDivImageWrapper>
  </StyledImagePartWrapper>
)
