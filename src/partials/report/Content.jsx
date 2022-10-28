import React, { useState, useRef, useEffect } from 'react';

function Content({data}) {
  console.log(data)
  return (
    data ?
    (<section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {JSON.stringify(data)}
        </div >
      </div >
    </section >): (<div>loading</div>)
  );
}

export default Content;
