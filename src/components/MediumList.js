import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MediumItem from './MediumItem';
import Link  from "react-router-dom/Link";
import artItemInfo from '../data/artInfo.json';
function MediumList(){
    
    


    return(
        <div>
        <Container fluid='true' className="medium-list-container">
            
         <Row>
         {Object.keys(artItemInfo).map(i => {
        return   <Col    className="mb-5 mb-md-0 medium-item-container" xs={12} md={4}> <Link className="medium-list-link" to={"/arts/"+i}><MediumItem info={artItemInfo[i]}/></Link></Col>  ;})
        }
           
         </Row>
       </Container>
       </div>
    )

}

export default MediumList