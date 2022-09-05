import { Note } from "./components/Note"
import { StyledSection } from "./ClientNote.styled"
import { ImageWithText } from "./components/ImageWithText"
import { FC } from "react"
import { TClientNote } from "./types"

export const ClientNote: FC<TClientNote> = ({ image, notes, type }) => (
  <StyledSection>
    {type === "image-note" && (
      <>
        <ImageWithText image={image} />
        <Note notes={notes} />
      </>
    )}
    {type === "note-image" && (
      <>
        <Note notes={notes} />
        <ImageWithText image={image} />
      </>
    )}
  </StyledSection>
)
