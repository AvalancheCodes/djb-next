import Script from "next/script";
import Illustrated from "../components/hero/illustrated/illustrated";
import Testimonials from "../components/testimonials/testimonials";

export default function Home() {


  return (
    <>
        <title>David J. Barel Creative Full Stack Developer</title>
        <meta name="description" content="David J. Barel is a top rated full stack developer" />
        <link rel="icon" href="/favicon.ico" />
        {/*<script type="text/javascript" src="/test.js" />*/}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossOrigin="anonymous"
                type={"module"}
        ></Script>
        <section className="pt-4">
            <Illustrated />
        </section>
        {/* END HEAD */}
        <Testimonials />
    </>
  )
}
