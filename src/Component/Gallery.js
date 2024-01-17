import React from "react";
import "../Css/Gallery.css";
import Photo1 from "../img/01.jpg";
import Photo2 from "../img/02.jpg";
import Photo3 from "../img/03.jpg";
import Photo4 from "../img/04.jpg";
import Photo5 from "../img/05.jpg";
import Photo6 from "../img/trance.jpg";
import Photo7 from "../img/07.jpg";
import Photo8 from "../img/08.jpg";
import Photo9 from "../img/09.jpg";
import Photo10 from "../img/10.jpg";
import Photo11 from "../img/11.jpg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Gallery = () => {
  return (
    <div id="Gallery">
      <div className="GalleryTitle">
        <h2>
          گالری <span id="primery">تصاویر</span>{" "}
        </h2>
      </div>

      <div className="external">
        <div className="horizontal-scroll-wrapper">
          <div className="img-wrapper slower">
            <Popup
              trigger={
                <a>
                  <img src={Photo1} alt="Photo1" />
                </a>
              }
              modal
            >
               <img src={Photo1} alt="Photo1" />
            </Popup>
          </div>

          <div className="img-wrapper faster">
          <Popup
              trigger={
                <a>
                  <img src={Photo2} alt="Photo1" />
                </a>
              }
              modal
            >
               <img src={Photo2} alt="Photo1" />
            </Popup>
           
          </div>

          <div className="img-wrapper slower vertical">
          <Popup
              trigger={
                <a>
                  <img src={Photo3} alt="Photo1" />
                </a>
              }
              modal
            >
               <img src={Photo3} alt="Photo1" />
            </Popup>
          </div>

          <div className="img-wrapper slower slower-down">
          <Popup
              trigger={
                <a>
                  <img src={Photo4} alt="Photo1" />
                </a>
              }
              modal
            >
               <img src={Photo4} alt="Photo1" />
            </Popup>
          </div>

          <div className="img-wrapper">
          <Popup
              trigger={
                <a>
                  <img src={Photo5} alt="Photo1" />
                </a>
              }
              modal
            >
               <img src={Photo5} alt="Photo1" />
            </Popup>
          </div>

          <div className="img-wrapper slower">
          <Popup
              trigger={
                <a>
                  <img src={Photo6} alt="Photo1" />
                </a>
              }
              modal
            >
               <img src={Photo6} alt="Photo1" />
            </Popup>
          </div>

          <div className="img-wrapper faster1">
          <Popup
              trigger={
                <a>
                  <img src={Photo7} alt="Photo1" />
                </a>
              }
              modal
            >
               <img src={Photo7} alt="Photo1" />
            </Popup>
          </div>

          <div className="img-wrapper slower slower2">
          <Popup
              trigger={
                <a>
                  <img src={Photo8} alt="Photo1" />
                </a>
              }
              modal
            >
               <img src={Photo8} alt="Photo1" />
            </Popup>
          </div>

          <div className="img-wrapper">
          <Popup
              trigger={
                <a>
                  <img src={Photo9} alt="Photo1" />
                </a>
              }
              modal
            >
               <img src={Photo9} alt="Photo1" />
            </Popup>
          </div>

          <div className="img-wrapper slower">
          <Popup
              trigger={
                <a>
                  <img src={Photo10} alt="Photo1" />
                </a>
              }
              modal
            >
               <img src={Photo10} alt="Photo1" />
            </Popup>
          </div>

          <div className="img-wrapper slower last">
          <Popup
              trigger={
                <a>
                  <img src={Photo11} alt="Photo1" />
                </a>
              }
              modal
            >
               <img src={Photo11} alt="Photo1" />
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
