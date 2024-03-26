"use client";

import Head from 'next/head';


import {
  About,
  Experience,
  Feedbacks,
  Hero,
  Footer,
  Tech,
  Works,
  Contact,
  Navbar,
  StarsCanvas,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Amirhossein Mirshahi</title>
        <meta name="description" content="Portfolio of Amirhossein Mirshahi" />
        <meta property="og:title" content="Amirhossein Mirshahi profile Summary" />
        <meta property="og:url" content="www.amirmsh.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </main>
  );
}
