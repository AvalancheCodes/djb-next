import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from "../components/header";
import Offcanvas from "../components/offcanvas";
import Preloader from "../components/preloader";

export default function Home() {
  return (
    <>
      <Head>
        <title>David J. Barel Creative Full Stack Developer</title>
        <meta name="description" content="David J. Barel is a top rated full stack developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Preloader />
        <Header />

      <main>

      </main>

      <footer>
      </footer>
    </>
  )
}
