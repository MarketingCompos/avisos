import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Slide.css"

import imgs from './app.json'


function Slide() {
  return (
    <Carousel>
      {imgs.map((img) => {
        if (img.type) {
          return <Carousel.Item Key={imgs.id} interval={img.time} className='Img'>
            <video className="w-100" autoPlay loop muted>
              <source
                src={img.url}
                type={img.type}
                allowFullScreen
              />
            </video>;
          </Carousel.Item>

        } else
          return <Carousel.Item Key={imgs.id} interval={1000} className='Img'>

            <img src={img.url} alt="" className='w-100' />
            <iframe className="d-block w-100 h-100" src={img.url} title="description"
            allowfullscreen
            ></iframe>
            

          </Carousel.Item>



      })}
    </Carousel>





  );
}

export default Slide;