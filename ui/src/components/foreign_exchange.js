import React, { useEffect, useState } from "react";
import FetchAndUpdate from '../Middleware/fetch_data';
import * as k from '../constants'

function ForeignExchange(props) {
  const [fxData, setFxData] = useState([]);

  useEffect(() => {
    FetchAndUpdate(k.FX).then((data) => {
      setFxData(data)
    });
  }, []);

  return(
    <>
      <h2>Foreign Exchange Data</h2>
      <h3>{fxData.id}</h3>
      <h3>{fxData.fx_rates['AUD']}</h3>
    </>
  );
}

export default ForeignExchange;