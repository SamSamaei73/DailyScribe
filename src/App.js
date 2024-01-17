import { useState } from "react";
import "./App.css";
import MainPage from "./Component/MainPage";
import { animateScroll as scroll } from "react-scroll";
import React from "react";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route , withRouter} from "react-router-dom";
import Exam from "./Component/Exam";
import ScrollToTop from "./Component/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(false);



  const override = css`
    display: block;
    margin: 15rem auto;
  `;

  return (
    <div className="App">
      {loading ? (
        <PuffLoader
          color={"#192e37"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div className="container">
          <BrowserRouter basename="/">
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/Exam" element={<Exam/>} />
            </Routes>
              <ScrollToTop/>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
