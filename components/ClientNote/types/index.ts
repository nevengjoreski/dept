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
  text: IImageText
} & INote

export type TClientNote = TNoteImage

export type TClientImageImage = {
  images: [ImageProps["src"], ImageProps["src"]]
  text: IImageText
}

export interface IImageWithText {
  image: ImageProps["src"]
  text: IImageText
}
