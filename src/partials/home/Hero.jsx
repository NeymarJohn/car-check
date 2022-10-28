import classNames from 'classnames';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Hero() {
  const [key_VRM, setKey_VRM] = useState(null);
  const navigate = useNavigate();

  const onSubmit = () => {
    key_VRM && navigate({pathname: 'report', search: `?${key_VRM}`});
    // key_VRM && fetch(`https://uk1.ukvehicledata.co.uk/api/datapackage/VehicleData?v=2&api_nullitems=1&auth_apikey=${apiKey}&user_tag=&key_VRM=${key_VRM}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     navigate("/report", data);
    //   })
    //   .catch(console.error);
  }

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      {/* <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div> */}

      <div id='hero'>
        {/* Hero content */}
        <div className="max-w-6xl pt-32 pb-12 md:pt-40 md:pb-20 flex justify-end m-auto">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl text-yellow-400 font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Find Your <br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Car Here</span></h1>
            <div className="max-w-3xl mx-auto">
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:flex-col sm:justify-center">
                <div>
                  <input onChange={(e) => { setKey_VRM(e.target.value) }} className='btn text-white bg-blue-500 w-full text-center sm:ml-4 placeholder:text-white placeholder:opacity-50 mb-3' placeholder='Enter Reg Number' />
                </div>
                <div>
                </div>
                <button onClick={() => onSubmit()} className="btn text-white bg-yellow-400 hover:bg-yellow-500 w-full sm:ml-4" >Check Vehicle Now &gt;&gt;</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;