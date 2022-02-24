import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from "framer-motion";

function Footer() {

    return (
        <footer className="mt-5 footer-container">
            <Container>
                <Row>
                
                    <Col >
                        <Container className="contact-icons-container"  >

                    Renu Indapurkar
                        <a target="_blank" href="https://www.instagram.com/rk_artworks16/">
                            <motion.img className="contact-icon" src={process.env.PUBLIC_URL + "/icons/instagram.svg"}
                                whileHover={{
                                    
                                    opacity: 1,
                                    transition: { duration: 0.3 },
                                }} />
                        </a>

                        <a target="_blank" href="https://www.facebook.com/renuvindapurkar/">

                            <motion.img className="contact-icon" src={process.env.PUBLIC_URL + "/icons/facebook.svg"}
                                whileHover={{
                                    
                                    opacity: 1,
                                    transition: { duration: 0.3 },
                                }} />
                        </a>


                        <a target="_blank" href="mailto:renu@rkart.studio" >
                            <motion.img className="contact-icon" href="mailto:renu@rkart.studio" src={process.env.PUBLIC_URL + "/icons/email.svg"}
                                whileHover={{
                                    
                                    opacity: 1,
                                    transition: { duration: 0.3 },
                                }} />

                        </a>


                            
                        </Container>
                    </Col>

                </Row>
                <Row>
                    <Col className="p-0 d-flex justify-content-center" >
                        RK Art Studio 2020. All Rights Reserved.
                    </Col>


                </Row>
            </Container>

        </footer>
    )

}

export default Footer