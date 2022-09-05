import { StyledList, StyledTextHeader } from "./ClientList.styled"
import { TextMSh, TextXsBody } from "../common/Text.styled"
import {
  Asos,
  Audi,
  Ayden,
  Fujitsu,
  Google,
  Levis,
  Netflix,
  Patagonia,
  Spotify,
  Takeaway,
  Tesla,
  Triumph,
} from "../../svg"

export const ClientList = () => {
  return (
    <section>
      <StyledTextHeader>
        <TextMSh>Clients</TextMSh>
        <TextXsBody>
          We value a great working relationship with our clients above all else.
          It’s why they often come to our parties. It’s also why we’re able to
          challenge and inspire them to reach for the stars.
        </TextXsBody>
      </StyledTextHeader>
      <StyledList>
        <Google />
        <Levis />
        <Netflix />
        <Spotify />
        <Patagonia />
        <Fujitsu />
        <Ayden />
        <Audi />
        <Triumph />
        <Tesla />
        <Asos />
        <Takeaway />
      </StyledList>
    </section>
  )
}
