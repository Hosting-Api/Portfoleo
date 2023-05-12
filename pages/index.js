import Head from "next/head";
import { Hero, About, Projects, Experiences, Footer } from "../components";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Vinit Patel - Portfolio</title>
    <meta name="google-site-verification" content="Fp6rZx9_R5lCi1zABXUh5pdevWK-T790siAH9KxF57I" />
    <meta name="Description" content="Vinit Patel's portfolio " />
    <meta
          property="og:description"
          content="About Vinit Patel"
        />
        <meta name="keywords" content="Next.js" />
    <link rel="canonical" href="https://vinitservers.ml/#about" />
        
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
