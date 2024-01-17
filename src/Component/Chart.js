import React from 'react';
import '../Css/Chart.css';
import Photo1 from '../img/brown.png'
import Photo2 from '../img/rev.png'
import Photo3 from '../img/omega.png'
import Photo4 from '../img/meee.webp'
import Photo5 from '../img/bose.png'

const Chart = () => {
  return <div id='Chart'>
    <h3>همکاران <span id='primery'>ما</span></h3>
      <div className='cover'>
        <div className="itemCompany">
          <img src={Photo1} alt="Photo1" />
        </div>
        <div className="itemCompany">
          <img src={Photo2} alt="Photo1" />
        </div>
        <div className="itemCompany">
          <img src={Photo3} alt="Photo1" />
        </div>
        <div className="itemCompany">
          <img src={Photo4} alt="Photo1" />
        </div>
        <div className="itemCompany">
          <img src={Photo5} alt="Photo1" />
        </div>
      </div>
  </div>;
};

export default Chart;
