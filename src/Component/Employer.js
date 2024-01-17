import React from "react";
import "../Css/Employer.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Tranc from "../img/trance.jpg";
import { NavLink } from "react-router-dom";

const Employer = () => {
  return (
    <div id="employer">
      <div className="sectionOne">
        <div className="sectionImg"></div>
        <div className="sectionInfo">
          <h1>
            شرایط <span id="primery">همکاری</span>{" "}
          </h1>
          <div className="styleli">
            <ul>
              <li>
                ■ تسلط کامل به زبان انگلیسی ( مهارت شنیداری و نوشتاری بالا )
              </li>
              <li> ■ متعهد ، وقت شناس و حرفه ای </li>
              <li>■ 4 یا 5 ساعت وقت آزاد به صورت روزانه </li>
              <li style={{ lineHeight: "50px" }}>
                ■ در صورت داشتن شرایط بالا برای شرکت در آزمون استخدامی مجموعه در
                رابطه با{" "}
                <Popup
                  trigger={
                    <span className="redColor pointer">Transcription</span>
                  }
                  modal
                >
                  <div className="TranceStyle">
                    <h2 id="primery">Transcription & Captioning</h2>
                    <div className="MainTranc">
                      <div className="ImageTrance">
                        <img src={Tranc} alt="Tranc" />
                      </div>
                      <div className="InfoTrance">
                        <p>
                          تبدیل صوت به متن به منظور آرشیو و بایگانی جلسات ،
                          گزارشات ، مصاحبه ها ، سخنرانی ها و .... برای شرکت ها ،
                          مراکز تجاری ، حقوقی ، آموزشی ، پژوهشی ، مالی و ...
                          صورت می گیرد . با توجه به اهمیت بالای فایل های صوتی و
                          ویدویی در زمینه ی آموزش ، پژوهش ، سرگرمی و تعدد نفراتی
                          که زبان انگلیسی را به عنوان زبان دوم دنبال می کنند ،
                          متن و کپشن برای درک و فهم فایل های مذکور اهمیت پیدا می
                          کنند و از طرفی چنین فعالیت هایی به SEO و Marketing کمک
                          شایانی خواهند کرد .
                        </p>
                      </div>
                    </div>
                  </div>
                </Popup>{" "}
                ( تبدیل فایل صوتی به متن به زبان انگلیسی ) لطفا به قسمت آزمون
                استخدامی مراجعه کنید{" "}
              </li>
            </ul>
          </div>
          <NavLink to="/Exam">
            <button className="EnterExam">آزمون استخدامی</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Employer;
