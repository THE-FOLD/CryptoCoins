import React, { useState } from 'react';
import axios from 'axios';

import {apiKey} from '../ApiKey';

import CoinCard from './CoinCard'


const CoinList = () => {
    const [apiData, setApiData] = useState(null);

  axios
    .get(`https://www.worldcoinindex.com/apiservice/ticker?key=${apiKey}&label=btcbtc-ethbtc-ltcbtc-xrpbtc&fiat=usd`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    }); 

    return (
      <>
      
      <h1>Yeet</h1>
      <CoinCard />
     </>
    )
  }

export default CoinList;
//YEET