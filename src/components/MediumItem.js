import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import DeviceContext from '../components/DeviceContext'

class MediumElement extends React.Component {
    static contextType = DeviceContext
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <div   >
                <Container
              >
                    <Row>
                        <Col>
                            <img className="medium-header-image d-block w-100" src={process.env.PUBLIC_URL + this.props.info.headerImage+this.context}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="medium-header-title-container">
                            <h2 className="medium-header"> {this.props.info.title}</h2>
                            <img id="right-arrow"
                            className="medium-header-arrow" src={process.env.PUBLIC_URL + "/icons/right-arrow.svg"}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="medium-header"> {this.props.info.subtitle}</p>
                        </Col>
                    </Row>
                </Container>
            </div>


        )
    }
}

export default MediumElement