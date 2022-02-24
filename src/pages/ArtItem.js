import React from "react";
import { Container, Row, Col, Button, Fade, Collapse } from "react-bootstrap";
import {CSSTransition} from "react-transition-group"

import ProgressiveImage from "../components/ProgressiveImage"
import DeviceContext from '../components/DeviceContext'

class ArtItem extends React.Component {
    static contextType = DeviceContext
    constructor(props) {
        super(props)
        this.state = {
            open: false

        };


    }


    render() {
      
        return (
            <div>

                <Row className='art-item-info-container'>
                    <Col className="art-item-image-container" xs={12} md={6}>
                        
                        <img className="art-item-image" src={process.env.PUBLIC_URL + this.props.info.imgUrl +this.context}
                        />
                    </Col>
                    <Col className="art-item-text-container d-flex flex-column justify-content-md-end" xs={12} md={3}>
                        <p className="art-item-size text-center text-md-left"> Size: {this.props.info.size}</p>


                        <p className="art-item-reference-link text-center text-md-left "
                            onClick={() => this.setState({ open: !this.state.open })}
                            aria-controls="example-fade-text"
                            aria-expanded={this.state.open}
                        >
                            Reference Photo
        </p>

                    </Col>
                    <Col className="d-flex flex-column justify-content-md-end" xs={12} md={3}>
                   
                        <CSSTransition in={this.state.open} classNames='reference-image' unmountOnExit  timeout={300}>

                            <div className="art-item-reference-image-container" >

                                <img className="art-item-reference-image" src={process.env.PUBLIC_URL + this.props.info.refImgUrl+this.context}
                                />

                            </div>
                        </CSSTransition>
                        

                    </Col>
                </Row>

            </div>


        )
    }
}

export default ArtItem