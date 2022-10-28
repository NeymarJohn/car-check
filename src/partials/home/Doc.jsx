import React from 'react';

function Doc() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-orange-400">How It works</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-orange-400 rounded shadow-xl">
              <p className="text-white text-center">Enter any vehicle reg for a free report in seconds</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-orange-400 rounded shadow-xl">
              <p className="text-white text-center">We'll check it with the DBLA, DVSA & others</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-orange-400 rounded shadow-xl">
              <p className="text-white text-center">Enter any vehicle reg for a free report in seconds</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-orange-400 rounded shadow-xl">
              <p className="text-white text-center">We'll check it with the DBLA, DVSA & others</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Doc;
