import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Slide.css"
import imgs from "./app.json"

function Slide() {
  return (
    <Carousel>
      {imgs.map((img) =>(

        <Carousel.Item Key={imgs.id} interval={1000} className='Img'>
            <iframe className="d-block w-100 h-100" src={img.urlImage} title="description"></iframe>

          
            <Carousel.Caption>
                <h3>{img.caption}</h3>
                <p>{img.description}</p>
            </Carousel.Caption>
        </Carousel.Item>

      ))}
    </Carousel>
  );
}

export default Slide;