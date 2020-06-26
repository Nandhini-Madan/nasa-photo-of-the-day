import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
 

const Photocard=({date1 ,url,explaination,title})=>{
    return(
 <div>
           
            <Card>
                <CardImg top width="20%" height="200px" src={url} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{date1}</CardSubtitle>
                    <CardText>{explaination}</CardText>
                    <Button color="primary">Button</Button>{' '}
                </CardBody>
            </Card>

</div>
    );
};



export default Photocard;