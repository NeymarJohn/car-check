import React, { useEffect, useState } from 'react';

import Header from '../partials/Header';
import Hero from '../partials/report/Hero';
import Content from '../partials/report/Content';
import Footer from '../partials/Footer';
import { useLocation } from 'react-router-dom';
import { apiKey } from '../utils/constants';

function Report() {
  const [data, setData] = useState();
  const { search } = useLocation();

  useEffect(() => {
    async function fetchData() {
      await search && fetch(`https://uk1.ukvehicledata.co.uk/api/datapackage/VehicleData?v=2&api_nullitems=1&auth_apikey=${apiKey}&user_tag=&key_VRM=${search}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res)
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <Hero />
        <Content data={data} />
      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Report;