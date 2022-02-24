import React,{Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutInfo from '../data/about.json';
import Fade from 'react-reveal/Fade';
import ProgressiveImage from "react-progressive-image"
import DeviceContext from '../components/DeviceContext'


class AboutPage extends React.Component{
    static contextType = DeviceContext

    render(){
     
    return (
        <Container>
            <Container className='inspiration-header-container' >


                <Row className="inspiration-header-image-container"  >
                    <Fade>

                        
                        <ProgressiveImage src={process.env.PUBLIC_URL + aboutInfo[1].headerImage +this.context} placeholder={process.env.PUBLIC_URL + aboutInfo[1].headerThumbnailImage +this.context}
                        >
                            {src => <img className="inspiration-header-image" src={src} />}
                        </ProgressiveImage>
                    </Fade>
                </Row>
                <Row className="inspiration-header-content">
                    <div className="inspiration-header">
                        <p className="inspiration-header"> {aboutInfo[1].title}</p>
                    </div>

                    <p className="inspiration-header-info"> {aboutInfo[1].info}</p>

                </Row>
                <hr className="line-break"></hr>
            </Container>



            <p className="aboutme-text"> About Me</p>



            <Row className='about-header-container' >


                <Col className="about-header-image-container" xs={12} md={4}>

                    <Fade>



                        <ProgressiveImage src={process.env.PUBLIC_URL + aboutInfo[2].headerImage +this.context} placeholder={process.env.PUBLIC_URL + aboutInfo[2].headerThumbnailImage+this.context}
                        >
                            {src => <img className="about-header-image" src={src} />}
                        </ProgressiveImage>

                    </Fade>
                </Col>
                <Col className="about-header-content" xs={12} md={8}>

                    <div className="about-header">
                        <h1 className="about-header"> {aboutInfo[2].title}</h1>
                    </div>

                    <p className="about-header-subtitle"> {aboutInfo[2].subtitle}</p>

                    <p className="about-header-info"> {aboutInfo[2].info}</p>

                </Col>

            </Row>

        </Container>
    )
            
}
}

export default AboutPage