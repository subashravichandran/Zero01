import React, { useEffect, useState } from "react";
import FetchAndUpdate from '../Middleware/fetch_data';
import * as k from '../constants'

function ForeignExchange(props) {
  const [fxData, setFxData] = useState([]);
  const [filteredData, setFilteredData] = useState('');

  useEffect(() => {
    FetchAndUpdate(k.FX).then((data) => {
      setFxData(data)
    });
  }, []);

  const handleFilter = (event) => {
    var selectedValue = event.target.value
    setFilteredData(selectedValue.toUpperCase());
  }

  return(
    <>
      <h2>Foreign Exchange Data</h2>
      <h3>Todays Data</h3>
      <input
        id='curreccy_filter'
        type="text"
        value={filteredData}
        onChange={handleFilter}
        placeholder="Filter currency..."
      />
      {fxData.fx_rates ? FxData({rates: fxData.fx_rates, selected: filteredData}) : 'Loading' }
    </>
  );
}

function FxData(props) {
  return(
    <ul>
      { props.selected === '' ?
          Object.entries(props.rates).map(([currency, rate]) => (
            <li key={currency}>{currency}: {rate}</li>
          )) : <li key={props.selected}> {props.selected.toUpperCase()}: {props.rates[props.selected]} </li> }
    </ul>
  );
}

export default ForeignExchange;