import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from '../images/bus1.jpg';
import Image2 from '../images/bus2.jpg';
import Image3 from '../images/bus3.jpg';


export default class Slick extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        rtl: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              rtl: true,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              rtl: true,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <>
            <div className="container my-5">
                    <div className="row">
                        <div>
                            <p className="mb-4" style={{fontWeight:'700',fontSize:'17px',color:'#656565'}}>موضوعات متفرقه</p>
                        </div>
                    </div>
                    
                    <div className="row">
                    <div>
                
                <Slider {...settings}>
                    <div>
                        <div className="task px-3">
                            <img className="tasvir" src={Image} alt="" />
                            <p style={{color:'#fff',position:'relative',bottom:'50px',right:'15px',textAlign:"right"}}>رفت و برگشت به صرفه و ارزان</p>
                        </div>
                    </div>
                    <div>
                        <div className="task px-3">
                            <img className="tasvir" src={Image2} alt="" />
                            <p style={{color:'#fff',position:'relative',bottom:'50px',right:'15px',textAlign:"right"}}>رفت و برگشت به صرفه و ارزان</p>
                        </div>
                    </div>
                    <div>
                        <div className="task px-3">
                            <img className="tasvir" src={Image3} alt="" />
                            <p style={{color:'#fff',position:'relative',bottom:'50px',right:'15px',textAlign:"right"}}>رفت و برگشت به صرفه و ارزان</p>
                        </div>
                    </div>
                </Slider>
                </div>
                    </div>
            </div>
        </>
      );
    }
  }