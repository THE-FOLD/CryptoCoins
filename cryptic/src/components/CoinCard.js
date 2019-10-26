import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from 'axios';


const CoinCard = (props) => {

  const label = props.label;
  const name = props.name;
  const price = props.price;
  const volume = props.volume;
  const timeStamp = props.timestamp;
  console.log("time",timeStamp);

  //yeet

  return (
    <div className='Div-Card'>
      <Card>
        <CardImg src="https://cryptocoins-server.herokuapp.com/images/xrp" top width="100%" alt="Card image cap" style={{width: '32px', height: '32px'}} />
        <CardBody>
          <CardTitle>Name: {name}</CardTitle>    
          <CardSubtitle>Price: {price}</CardSubtitle>
          <CardText>Volume:{volume}</CardText>
          <CardText>timeStamp: {timeStamp}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CoinCard;