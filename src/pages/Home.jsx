import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/home/Hero';
import FeaturesHome from '../partials/home/Features';
import Doc from '../partials/home/Doc';
import Footer from '../partials/Footer';
import Why from '../partials/home/Why';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <Doc />
        <Why />
        <FeaturesHome />
      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;