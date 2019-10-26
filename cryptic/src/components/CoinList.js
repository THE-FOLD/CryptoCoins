import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import {apiKey} from '../ApiKey';

import { endpoint } from '../endpoint';

import CoinCard from './CoinCard'
import styled from "styled-components";
import {Spinner} from "reactstrap";

const coinList = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin 2% auto;
    // border: 1px solid black;
    @media (max-width: 500px){
        flex-direction: column;
    }
`

const CoinList = () => {
    
    const [bitCoin, setBitCoin] = useState(null);


    useEffect(() => {
      const getBitcoin = () => {
        axios
          .get(`${endpoint}market/?marketName=Bitcoin&fiat=USD`)
          .then(response => {
            setBitCoin(response.data);
            // console.log(response.data);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
      
      getBitcoin();
    }, []);
    
    console.log("bitcoin",bitCoin);
  

    if(bitCoin === null){
      return(
        <Spinner color= "info"/>
      );
    }

    return (
      <>
      <CoinCard label ={bitCoin.Label} name={bitCoin.Name} price={bitCoin.Price} volume={bitCoin.Volume_24h} timestamp={new Date(bitCoin.Timestamp)} />
     </>
    )
    
  }

export default CoinList;
//YEET