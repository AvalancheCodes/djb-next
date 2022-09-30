import Head from 'next/head'
import React from "react";
import Illustrated from "../components/hero/illustrated/illustrated";

export default function Home() {
  return (
    <>
        <Head>
          <title>David J. Barel Creative Full Stack Developer</title>
          <meta name="description" content="David J. Barel is a top rated full stack developer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Illustrated />
    </>
  )
}
