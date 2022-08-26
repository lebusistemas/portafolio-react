import React from 'react'
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import Slides from './Slides'
import "./Slider.css"

const Slider = () => {
  return (
    <div className='carousel-container'>
      <div className='carousel-title'>
        <h2>Mis Proyectos</h2>
      </div>
      <Carousel
        plugins={[        
          'infinite',
          'arrows',
          'centered',
          {
            resolve: slidesToShowPlugin,
            options: {
             numberOfSlides: 3
            }
          },
        ]}        
        animationSpeed={200}
        offset={50}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          960: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                 numberOfSlides: 2
                }
              },
            ],
            infinite: true,
            centered: true,
            arrows: false,
            itemWidth: 250,
          }
        }}
      />
    </div>
  )
}

export default Slider
