import React,{Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ArtItem from './ArtItem';
import artItemInfo from '../data/artInfo.json';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import DeviceContext from '../components/DeviceContext'


class ArtListPage extends React.Component{
     
    static contextType = DeviceContext
    constructor(props){
        super(props);
        const HeaderInfo = styled.div`
        color: ${artItemInfo[this.props.medium].textColor};
        `;
    
    }
        
    



  render(){


        return(
        <>
            <Container className="artlist-header-container" >
            <div  className="artlist-header-image-container"  xs={12} md={6}>
              <Fade>

             
              <img  src={process.env.PUBLIC_URL + '/images/artlistHeaderImages/' +this.props.medium+this.context}
              />
           </Fade>
             
          </div>
       
          <Row className='artlist-header-container' >
           
           <Col className="artlist-header-content" xs={12} md={6}>
            
               <div className="artlist-header">
               <h1 className="artlist-header" style={{color:artItemInfo[this.props.medium].textColor}} > 
               {artItemInfo[this.props.medium].title}</h1>
               </div>
               
               <h3 className="artlist-header-subtitle" style={{color:artItemInfo[this.props.medium].textColor}}> {artItemInfo[this.props.medium].subtitle}</h3>

               <p className="artlist-header-info" style={{color:artItemInfo[this.props.medium].textColor}} > {artItemInfo[this.props.medium].info}</p>
              
           </Col>

           </Row>
              
        

    </Container>

            <Container  className="art-list-container">

                {Object.keys(artItemInfo[this.props.medium]['artItems']).map(i => {
                    return  <Fade><ArtItem info={artItemInfo[this.props.medium]['artItems'][i]}/></Fade>;
                })}
                
                
            </Container>
        </>
    )
          
  }


}

export default ArtListPage