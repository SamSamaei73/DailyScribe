import React, { useState } from "react";
import Navbar from './Nvbar';
import Employer from './Employer';
import Chart from './Chart';
import Gallery from './Gallery';
import About from './About';
import Footer from './Footer';
import { animateScroll as scroll } from "react-scroll";
import scrollToComponent from "react-scroll-to-component";




const MainPage = () => {
  



  // const scrollToAbout = () => {
  //   scroll.scrollTo('About', {
  //     duration: 1500,
  //     delay: 100,
  //     smooth: true,
  //   });
  // };
  // const scrollToActive = () => {
  //   scroll.scrollTo("500", {
  //     duration: 1500,
  //     delay: 100,
  //     smooth: true,
  //   });
  // };
  // const scrollToEmployer = () => {
  //   scroll.scrollTo("1500", {
  //     duration: 1500,
  //     delay: 100,
  //     smooth: true,
  //   });
  // };
  // const scrollToMap = () => {
  //   scroll.scrollTo("2250", {
  //     duration: 1500,
  //     delay: 100,
  //     smooth: true,
  //   });
  // };

  // const ScrollerAbout = ()=> {
  //   scrollToComponent('About', {
  //     offset: 0,
  //     align: "top",
  //     duration: 500,
  //     ease: "linear",
  //   });

  // }

  const [sectionData,setSectionData]=useState([]);

const scrollC = (Id)=>{
  scrollToComponent(sectionData[Id], { offset: 0, align: 'top', duration: 1500})
}

  return (
    <div>
      <Navbar
        ScrollerAbout={(Id)=>scrollC(Id)}
        scrollToActive={(Id)=>scrollC(Id)}
        scrollToEmployer={(Id)=>scrollC(Id)}
        scrollToChart={(Id)=>scrollC(Id)}
        scrollToMap={(Id)=>scrollC(Id)}
        
      />
     
      <section ref={(section) => {
                    sectionData[1] = section;
                  }}>
      <Employer    />
      </section>
    
      <section ref={(section) => {
                    sectionData[3] = section;
                  }}>
      <Gallery    />
      </section>
      <section ref={(section) => {
                    sectionData[4] = section;
                  }}>
      <About    />
      </section>
      <section ref={(section) => {
                    sectionData[2] = section;
                  }}>
      <Chart    />
      </section>
      <section ref={(section) => {
                    sectionData[5] = section;
                  }}>
      <Footer />
      </section>
     
      
    </div>
  );
};

export default MainPage;
