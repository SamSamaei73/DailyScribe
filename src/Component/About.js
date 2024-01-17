import React, { useEffect, useState, useContext, useRef } from "react";
import "../Css/About.css";
import Clip from "../img/clip.mp4";
import AboutPhoto from "../img/about.jpg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Photo from "../img/09.jpg";

const About = () => {
  // const [section1,setSection1]=useState(null);
  return (
    <div id="about">
      {/* <section className='About' ref={(section) => { setSection1(section) }}>Violet</section> */}

      <div className="InfoAbout">
        <h1>
          {" "}
          درباره <span id="primery">ما</span>{" "}
        </h1>
        <p>
          مجموعه دیلی اسکرایب یک تیم استارتاپی است که از سال 2018 با تعدادی از
          شرکت ها ، دانشگاه ها ، مراکز و موسسات آموزشی معتبر خارجی در زمینه
          بایگانی و آرشیو اطلاعات و داده ها (به صورت دور کاری و اینترنتی) همکاری
          می کند.
        </p>
        <Popup
          trigger={<button className="BtnMore">اطلاعات بیشتر</button>}
          modal
        >
          <div className="TranceStyle1">
            <div className="MainTranc">
              <div className="ImageTrance">
                <img src={Photo} alt="Tranc" />
              </div>
              <div className="InfoAboutPop">
                <h4>
                  دیلی اسکرایب در سال 2018 برای اولین بار در ایران باآموزش و جذب
                  فریلنسر از همه جای ایران همکاریشو با سایت‌ها و شرکت‌های
                  ترنسکریپشن به صورت مستقل شروع کرد افتخار می کنیم که به بیش از
                  150 کارجو و هنرجو ده ها ساعت آموزش صوتی و تمرین اختصاصی ارائه
                  کردیم تا سال 2021رسید و تصمیم گرفتیم مجموعه خودمون را به یک
                  شرکت ترنسکریپشن حرفه ای تبدیل کنیم و بتونیم تمام وقت از طریق
                  سایت اینترنشنال خودمون هم پروژه های بیشتری بگیریم و انجام بدیم
                  ، دیگه الان با ماهرترین و با تجربه ترین ترنسکرایبر ها در ایران
                  همکاری داریم . حالا با جذب و آموزش بیش از 100 ترنسکرایبر حرفه
                  ای و افراد ماهر و جلب اعتماد متقاضیان این نوع فرآیندها روز به
                  روز با تلاش ، آموزش و جذب کارجوهای بیشتر ،پروژه های بیشتری
                  علاوه بر تبدیل صوت به متن در زمینه های مرتبطی مانند کپشن نویسی ،
                  تولید محتوا و ... قادر به انجام هستیم .
                </h4>
              </div>
            </div>
          </div>
        </Popup>
      </div>
      <div className="imgAbout">
        <img src={AboutPhoto} alt="AboutPhoto" />
      </div>
    </div>
  );
};

export default About;
