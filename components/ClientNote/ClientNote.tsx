import { Note } from "./components/Note"
import { StyledSection } from "./ClientNote.styled"
import { ImageWithText } from "./components/ImageWithText"
import { FC } from "react"
import { TClientNote } from "./types"

export const ClientNote: FC<TClientNote> = ({ image, notes, text, type }) => (
  <StyledSection>
    {type === "image-note" && (
      <>
        <ImageWithText image={image} text={text} />
        <Note notes={notes} />
      </>
    )}
    {type === "note-image" && (
      <>
        <Note notes={notes} />
        <ImageWithText image={image} text={text} />
      </>
    )}
  </StyledSection>
)
