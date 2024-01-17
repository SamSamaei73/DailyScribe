import React from "react";
import "../Css/Exam.css";
import Footer from "../Component/Footer";
import Logo from "../img/dailyscribe-01.png";
import { NavLink } from "react-router-dom";
import Photo1 from "../img/15.jpg";
import Photo2 from "../img/layi.jpg";
import GuideLine from '../img/guidelines.pdf';
import Students from '../img/فرم اطلاعات کارجو.docx';
import Voice from '../img/AUD-20230108-WA0015.mp3';

const Exam = () => {
  return (
    <div id="Exam">
      <div className="ExamHeader">
        <div className="Back">
          <NavLink to="/">
            <button>←</button>
          </NavLink>
        </div>
        <h2>
          آزمون <span id="primery">استخدامی</span>{" "}
        </h2>
        <NavLink className="LogoE" to="/">
          <img src={Logo} alt="" />
        </NavLink>
      </div>
      <div className="MainExam">
        <div className="imageExam">
          <div className="imgExami">
            <img src={Photo1} alt="Photo1" />
          </div>
          <div className="imgExami">
            <img src={Photo2} alt="Photo1" />
          </div>
        </div>
        <div className="InfoExam">
          <div className="itemInfo">
            <p>
              1. با توجه به تجربه و سابقه تیم دیلی اسکرایب در زمینه
              transcription به صورت عمومی و تخصصی وهمچنین تعدد پروژه ها در این
              بخش ، معیار و ملاک مجموعه برای جذب نیرو فعالیت مذکور می باشد .
            </p>
          </div>
          <div className="itemInfo">
            <p>
              2. در صورت داشتن رزومه معتبر و تجربه حرفه ای در زمینه
              transcription از طریق سایت های معتبری مانند: fiverr ، upwork ، Rev
              ، happyscribe و ... قبل از شرکت در آزمون مجموعه ، مسئولین مربوطه
              را مطلع نمایید.
            </p>
          </div>
          <div className="itemInfo">
            <p>
              3. فرم اطلاعات کارجو رو از طریق لینک زیر دانلود و اطلاعات لازم رو
              تکمیل فرمایید وهمراه فایل آزمون برای Email زیر ارسال نمایید .
              <a href="dailyscriber.exam@gmail.com">
                <br />
                dailyscriber.exam@gmail.com
              </a>
            </p>
          </div>
          <a href={Students} data-effect="solid" download>
        <button className="ExamButton"> فرم اطلاعات کارجو </button>
        </a>
          <div className="itemInfo">
            <p>
              4. برای شرکت در آزمون لطفا فایل{" "}
              <span>
                <a>guidelines</a>{" "}
              </span>{" "}
              را از طریق لینک زیر دانلود نمایید و مطالعه کنید تا با قواعد و
              ساختار این فعالیت آشنا شوید .
            </p>
          </div>
          <a href={GuideLine} data-effect="solid" download>
          <button className="ExamButton"> Guidelines </button>
        </a>
          <div className="itemInfo">
            <p>
              5. پس از مطالعه guidelines ، فایل آزمون را از لینک زیر دانلود
              فرمایید و تا ساعت 12 شب همان روز، فایل متنی را در قالب word همراه
              با فرم اطلاعات کارجو به{" "}
              <span>
                <a href="dailyscriber.exam@gmail.com">E-mail</a>
              </span>{" "}
              مجموعه ارسال فرمایید .
            </p>
          </div>
          <div className="itemInfo">
            <p>
              6. با توجه به عرف دقت این فعالیت و تقاضای کارفرما برای قبولی شما
              در آزمون غیر حضوری و آزمون حضوری دقت 94% به بالا مطلوب است .
            </p>
          </div>
          <div className="itemInfo">
            <p>
              7. پس از قبولی شما در آزمون غیر حضوری و حضوری دوره ی کوتاه
              کارآزمایی وآزمایشی برگزار خواهد شد و شروع فعالیت کاری منوط به
              گذراندن دوره با عملکرد مناسب و وقت شناسی شما می باشد .
            </p>
          </div>
          <div className="itemInfo">
            <p>
              8. با توجه به تعدد کارجویان و آزمون ها ، فایل های شما در اسرع وقت
              تصحیح خواهند شد. لطفا صبور باشید .
            </p>
          </div>
          <div className="itemInfo redAlert">
            <p>توجه : تکمیل فرم اطلاعات کارجو و ارسال آن همراه فایل آزمون الزامی می باشد . در غیر این صورت فایل شما بررسی نخواهد شد .
            </p>
          </div>
        </div>
      </div>
      <div className="btnPlace">
        
      <a href={Voice} data-effect="solid" download>
        <button className="ExamButton Mainbtn" >
           فایل صوتی آزمون </button></a>
        
      </div>
      <Footer />
    </div>
  );
};

export default Exam;
