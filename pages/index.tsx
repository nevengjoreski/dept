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
      <NavBar />
      <main>
        <Hero />
        <Filters />
        <ClientImageImage primaryImage={Summer} secondaryImage={Laptop} />
        <ClientImageImage primaryImage={Lamps} secondaryImage={Painting} />
        <ClientNote type={"image-note"} notes={notes} image={Image3} />
        <ClientImageImage primaryImage={Lantern} secondaryImage={Weirdo} />
        <ClientNote type={"note-image"} notes={notes} image={Image3} />
        <ClientImageImage primaryImage={Choko} secondaryImage={Headphones} />
        <ClientImageImage primaryImage={Board} secondaryImage={Books} />
        <Quote {...quote} />
        <ClientImageImage primaryImage={Servers} secondaryImage={Protein} />
        <ClientList />
        <Form />
      </main>
      {/* how not to work */}
      <BEMFooter />
    </>
  )
}

export default Home
