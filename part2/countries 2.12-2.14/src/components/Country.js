import React from 'react';
import Language from './Language';
import WeatherData from './Weather'

const Country = ({countryDetail}) => (
    <div>
        <h2>{countryDetail.name.common}</h2>
        <h3>Capital: {countryDetail.capital}</h3>
        <h3>Area: {countryDetail.area} km2</h3>
        <Language lang={countryDetail.languages} />
        <div>
        <img src={countryDetail.flags.png} alt="img" style={{ width: '10%', marginLeft: '10px' }}></img>
        <WeatherData city={countryDetail.capital} />
      </div>
    </div>  
    )

export default Country