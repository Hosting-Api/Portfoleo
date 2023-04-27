import Head from "next/head";
import { Hero, About, Projects, Experiences, Footer } from "../components";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Vinit Patel - Portfolio</title>
        <meta name="description" content="Vinit Patel's portfolio developed using Next.js." />
        <meta name="keywords" content="Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Footer />
    </div>
  );
}
