import React, { useState } from 'react';

function Hero() {


  return (
    <section className="relative">
      <div id='report_hero'>
        {/* Hero content */}
        <div className="max-w-6xl pt-32 pb-12 md:pt-40 md:pb-20 flex justify-center m-auto">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl text-yellow-500 font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Free Vehicle <br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Check</span></h1>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;