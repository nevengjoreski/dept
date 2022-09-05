import { ImageProps } from "next/image"

export interface IImageText {
  top: string
  mid: string
  readMore?: string
}

export type INote = {
  notes: Array<IImageText>
}

type TNoteImage = {
  type: "image-note" | "note-image"
  image: ImageProps["src"]
} & INote

export type TClientNote = TNoteImage

export type TClientImageImage = {
  primaryImage: ImageProps["src"]
  secondaryImage: ImageProps["src"]
}

export interface IImageWithText {
  image: ImageProps["src"]
}
