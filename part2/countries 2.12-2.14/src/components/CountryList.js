import React from 'react';
import Country from './Country';

const CountryList = ({countries, setCountry}) =>
{   if (countries.length > 1)
     return (countries.map( (country,i) => 
        <div key={i}>
          <h4>{country.name.common}
          <button onClick={() => setCountry([country])}>show</button>
          </h4>
       </div>)
      ) 
   else {
     return( 
        <Country countryDetail={countries[0]}></Country>)
      


   }
}
export default CountryList