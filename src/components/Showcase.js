import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import showcaseInfo from '../data/showcaseInfo.json'
import DeviceContext from '../components/DeviceContext'
import Fade from 'react-reveal/Fade';
class Showcase extends React.Component {
  static contextType = DeviceContext
  render() {
    return (
    <div className="showcase-image-container">
      <Fade>

    
      <Carousel>

      {Object.keys(showcaseInfo).map(i => {
                    return   <Carousel.Item>
                    <img 
                      className="showcase d-block w-100"
                      src={process.env.PUBLIC_URL + "/images/showcaseImages/showcase-" + i+this.context}
                    />
                  </Carousel.Item>;
                })}
    

    </Carousel>
    </Fade>
    </div>
    );
  }
}

export default Showcase