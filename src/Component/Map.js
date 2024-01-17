import React from 'react';
import '../Css/Map.css';

const Map = () => {
  return (
    <div id="Contact">
      <div className="contactTittle">
        <h1>
          تماس با <span id="primery">مشاورین</span>{' '}
        </h1>
      <p>از ساعت ۱۰ تا ۱۶ می توانید با شماره های زیر در تماس باشید در غیر این صورت در <span><a className='callWhats' href="whatsapp://send?text=Hello World!&phone=+989359252119">واتساپ</a></span> پاسخگوی شما هستیم</p>
      </div>
      
      {/* <div className="contactinfo">
        <div className="person">
          <div className="photoPerson1"></div>
          <div className="infoPerson">
            <h5>فرشته فراهانی</h5>
            <a href="tel:09120603560" >
              <h6>09120603560 </h6>
            </a>
          </div>
          <a href="tel:09120603560" className='callPerson'>
          <div className="callPerson">
            <h5>تماس</h5>
          </div>
            </a>
        </div>
        <div className="person">
          <div className="photoPerson2"></div>
          <div className="infoPerson">
            <h5>نارسیس احسانپور</h5>
            <a href="tel:09120603460" >
            <h6>09120603460</h6>
            </a>
          </div>
          <a href="tel:09120603460" className='callPerson'>
          <div className="callPerson">
            <h5>تماس</h5>
          </div>
            </a>
        </div>
        
      </div> */}
    </div>
  );
};

export default Map;
