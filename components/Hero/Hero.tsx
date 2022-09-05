import { StyledDivImageWrapper, StyledImagePartWrapper } from "./Hero.styled"
import Image from "next/image"
import { size } from "../../theme/sizes"
import { ImageText } from "../ClientNote/components/ImageText"
import { Hero as HeroImg } from "../../mockData"

export const Hero = () => (
  <StyledImagePartWrapper>
    <StyledDivImageWrapper>
      <Image
        priority
        style={{ opacity: size.opacity }}
        src={HeroImg}
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
