import React from 'react';
import img from '../../images/undraw_speed_test_re_pe1f.svg'

function Why() {
  return (
    <section className="relative bg-blue-500">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-white underline">Why Choose Us?</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img src={img} alt="" width={100}/>
              <p className=" text-center font-bold">More data -More sources</p>
              <p className=" text-center">From the DBLA, Motor Insurers' Bureau(MIB), the Police National Database + more - leaving no stone unturned</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img src={img} alt="" width={100}/>
            <p className=" text-center font-bold">More data -More sources</p>
              <p className=" text-center">From the DBLA, Motor Insurers' Bureau(MIB), the Police National Database + more - leaving no stone unturned</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src={img} alt="" width={100}/>
              <p className=" text-center font-bold">More data -More sources</p>
              <p className=" text-center">From the DBLA, Motor Insurers' Bureau(MIB), the Police National Database + more - leaving no stone unturned</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
