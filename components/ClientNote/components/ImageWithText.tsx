import {
  StyledDivImageWrapper,
  StyledImagePartWrapper,
} from "../ClientNote.styled"
import Image from "next/image"
import { size } from "../../../theme/sizes"
import { ImageText } from "./ImageText"
import { FC } from "react"
import { IImageWithText } from "../types"

export const ImageWithText: FC<IImageWithText> = ({ image }) => (
  <StyledImagePartWrapper>
    <StyledDivImageWrapper>
      <Image
        style={{ opacity: size.opacity }}
        src={image}
        alt={"Image 3"}
        layout={"fill"}
        objectFit="cover"
        objectPosition={"right bottom"}
      />
      <ImageText
        top={"FLORENSIS"}
        mid={"Rethinking the entire online ecosystem"}
      />
    </StyledDivImageWrapper>
  </StyledImagePartWrapper>
)
