import {
  StyledFontVariant,
  StyledNoteInstance,
  StyledSpan,
  StyledSpanMid,
  StyledTextWrapper,
} from "../ClientNote.styled"
import { Dot } from "../../../svg"
import { IImageText, INote } from "../types"
import { FC } from "react"

export const Note: FC<Required<INote>> = ({ notes }) => (
  <StyledTextWrapper>
    {notes.map((note, i) => (
      <NoteInstance key={i} {...note} />
    ))}
  </StyledTextWrapper>
)

const NoteInstance: FC<IImageText> = ({ mid, readMore = "Read more", top }) => (
  <StyledNoteInstance>
    <StyledFontVariant>{top}</StyledFontVariant>
    <StyledSpanMid>{mid}</StyledSpanMid>
    <div>
      <Dot />
      <StyledSpan>{readMore}</StyledSpan>
    </div>
  </StyledNoteInstance>
)
