import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-blue-500 p-10'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-sm text-white mr-4">
            <p className='uppercase text-5xl'>Car Check</p>
            <p className='text-xl'>Get a FREE Vehicle History report, check <br /> for write-off, outstanding finance, <br /> stolen, scrapped, MOT and a free baluation..</p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
