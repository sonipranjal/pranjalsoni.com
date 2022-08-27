import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaCuttlefish,
} from 'react-icons/fa';

const skills = [
  {
    title: 'Html5',
  },
  {
    title: 'Css3',
  },
  {
    title: 'Js',
  },
  {
    title: 'React',
  },
  {
    title: 'Python',
  },
  {
    title: 'NodeJs',
  },
  {
    title: 'C++',
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
  centerPadding: '10px',
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
        <div className="flex flex-col justify-center text-center sm:flex-row">
          <h1 className="text-4xl font-semibold tracking-widest text-red-500">
            {`<Technologies/>`}
          </h1>
          <br className="block sm:hidden" />
          <h1 className="pt-0 mt-0 mb-10 text-4xl font-semibold tracking-widest text-red-500">
            &nbsp;I use
          </h1>
        </div>
        <Slider {...settings}>
          {skills.map(({ title }) => (
            <div key={title}>
              <div className="flex items-center justify-center h-20">
                <span className="text-gray-900 transition text-7xl hover:text-red-500">
                  {title === 'Html5' && <FaHtml5 title="Html5" />}
                  {title === 'React' && <FaReact title="React" />}
                  {title === 'Css3' && <FaCss3 title="Css3" />}
                  {title === 'Js' && <FaJs title="JavaScript" />}
                  {title === 'Python' && <FaPython title="Python" />}
                  {title === 'NodeJs' && <FaNodeJs title="Nodejs" />}
                  {title === 'C++' && (
                    <>
                      <FaCuttlefish className="inline-block" />
                      <span>++</span>
                    </>
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
