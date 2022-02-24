import React from 'react';
import { Toast, Container, Row, Col } from 'react-bootstrap';
import { motion } from "framer-motion";
import axios from 'axios';

class ContactPage extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            disabled: true
        })

        // database.ref('emails/' +(+new Date).toString(60)).set({
        //     name: this.state.name,
        //     email: this.state.email,
        //     message : this.state.message
        //   });


        axios({
            method: "POST", 
            url:"https://rkart.studio:443/send", 
            data:  this.state
          }).then((response)=>{
            if (response.data.status === 'success'){
              this.setState({emailSent: true, disabled: false});
              this.setState({name: '', email: '', message: '', phone:''})
            }else if(response.data.status === 'fail'){
              alert("Oops! Please drop me a text on Instagram or Facebook")
            }
          })
        }
    render(){return (
        < div>
            
            <h1 className="contact-page-title">Contact Me</h1>

            <p className="contact-page-title">Interested in ordering or gifting a portrait or want to know my process? I would love to hear from you.</p>

        
            <Col >
                        <Container className="contact-icons-container"  >

                
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
                    <Toast className = "email-sent-toast" onClose={() => this.setState({ emailSent: !this.state.emailSent })} show={this.state.emailSent} delay={4000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">I've recieved your message</strong>
            </Toast.Header>
            <Toast.Body>I'll get back to you as soon as possible. Thanks!</Toast.Body>
          </Toast>
                        
                    <div className="contact-page-form">
       
           
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Phone no.</label>
        <input type="tel"  className="form-control" aria-describedby="numberHelp" value={this.state.phone} onChange={this.onPhonechange.bind(this)} />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" placeholder="Let me know if you have any specific requirements" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
    </div>
    <button type="submit" className="btn btn-primary"  disabled={this.state.disabled}> Submit </button>
    </form>
            </div>
    
        </div>

    )}

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    onPhonechange(event) {
        this.setState({ phone: event.target.value })
    }

}



export default ContactPage