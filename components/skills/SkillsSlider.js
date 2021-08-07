import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaCuttlefish,
} from "react-icons/fa";
import { Fragment } from "react-is";

const skills = [
  {
    title: "Html5",
  },
  {
    title: "Css3",
  },
  {
    title: "Js",
  },
  {
    title: "React",
  },
  {
    title: "Python",
  },
  {
    title: "NodeJs",
  },
  {
    title: "C++",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 3,
  draggable: true,
  pauseOnHover: true,
  centerPadding: "10px",
  swipeToSlide: true,
  arrows: false,
  accessibility: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function SkillsSlider() {
  return (
    <div className="flex justify-center my-5">
      <div className="container">
        <div className="flex justify-center flex-col sm:flex-row text-center">
          <h1 className="text-4xl font-semibold text-red-500 tracking-widest">
            {`<Technologies/>`}
          </h1>
          <br className="block sm:hidden" />
          <h1 className="text-4xl mb-10 font-semibold text-red-500 tracking-widest mt-0 pt-0">
            &nbsp;I use
          </h1>
        </div>
        <Slider {...settings}>
          {skills.map(({ title }) => (
            <div key={title}>
              <div className="flex h-20 justify-center items-center">
                <span className="text-7xl text-gray-900 hover:text-red-500 transition">
                  {title === "Html5" && <FaHtml5 title="Html5" />}
                  {title === "React" && <FaReact title="React" />}
                  {title === "Css3" && <FaCss3 title="Css3" />}
                  {title === "Js" && <FaJs title="JavaScript" />}
                  {title === "Python" && <FaPython title="Python" />}
                  {title === "NodeJs" && <FaNodeJs title="Nodejs" />}
                  {title === "C++" && (
                    <Fragment>
                      <FaCuttlefish className="inline-block" />
                      <span>++</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
