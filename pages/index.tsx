import type { NextPage } from "next"
import Head from "next/head"
import { NavBar } from "../components/NavBar/NavBar"
import { ClientNote } from "../components/ClientNote/ClientNote"
import { Quote } from "../components/Quote/Quote"
import { ClientList } from "../components/ClientList/ClientList"
import { Form } from "../components/Form/Form"

import {
  quote,
  notes,
  text,
  navBarItems,
  Lantern,
  Painting,
  Weirdo,
  Headphones,
  Summer,
  Lamps,
  Books,
  Choko,
  Servers,
  Protein,
  Board,
  Laptop,
  Image3,
} from "../mockData"
import { ClientImageImage } from "../components/ClientNote/ClientImageImage"
import { Hero } from "../components/Hero/Hero"
import { Filters } from "../components/Filters/Filters"
import { BEMFooter } from "../components/Footer/BEMFooter"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dept + Neven</title>
      </Head>
      <NavBar items={navBarItems} />
      <main>
        <Hero />
        <Filters />
        <ClientImageImage images={[Summer, Laptop]} text={text} />
        <ClientImageImage images={[Lamps, Painting]} text={text} />
        <ClientNote
          type={"image-note"}
          notes={notes}
          image={Image3}
          text={text}
        />
        <ClientImageImage images={[Lantern, Weirdo]} text={text} />
        <ClientNote
          type={"note-image"}
          notes={notes}
          image={Image3}
          text={text}
        />
        <ClientImageImage images={[Choko, Headphones]} text={text} />
        <ClientImageImage images={[Board, Books]} text={text} />
        <Quote {...quote} />
        <ClientImageImage images={[Servers, Protein]} text={text} />
        <ClientList />
        <Form />
      </main>
      {/* how not to work */}
      <BEMFooter />
    </>
  )
}

export default Home
