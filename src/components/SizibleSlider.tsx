import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { SizibleSlider } from '../types/SizibleTypes';
import { slideData } from '../data/SideData';

const initialdata: SizibleSlider = {
  Neck: "",
  Shoulder: "",
  Arms: "",
  Leg: "",
  Height: "",
  Chest: "",
  Waist: "",
  Hips: "",
  Shoe: ""
}

const SizerSlider: React.FC = () => {
  const [data, setData] = useState(initialdata);

  console.log("size data...", data);
  return (
    <div className="sizer-slider">
      <Carousel interval={null}>
        {slideData.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="slide-image-parent">
              <img
                className="w-100 h-100 object-fit-fill"
                src={`/assests/slideImages/${slide.url}`}
                alt={slide.title}
              />
            </div>
            <Carousel.Caption className='bg-caption'>
              <h3>{slide.title}</h3>
              <select name={slide.title} id={slide.title}
                onChange={(e) => {
                  setData({ ...data, [e.target.name]: e.target.value })
                }}
              >
                <option value="">select</option>
                {
                  slide.sizes.map((item, index) => {
                    return <option key={index} value={item}>
                      {
                        slide.title === "Shoe" ? `${item} Uk` : slide.title === "Chest" || slide.title === "Neck" ? `${item}"` : `${item} cm`
                      }
                    </option>
                  })
                }
              </select>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default SizerSlider;
