import { ReactElement, ReactPortal } from "react";

type ReactText = string | number
type ReactChild = ReactElement | ReactText

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined

export type Props = {
  children: ReactNode
}

export interface IBook {
  id: number
  title: string
  description: string
  status: boolean
}


export interface IBooks {
  url?:           string;
  name:          string;
  isbn?:          string;
  authors:       string | string[];
  numberOfPages?: number;
  publisher?:     string;
  country?:       string | string[];
  mediaType?:     string;
  released:      Date | string;
  characters?:    string[];
  povCharacters?: string[];
}