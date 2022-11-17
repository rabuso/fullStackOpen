import React from 'react';

const Language = ({lang}) => {
       
    if (typeof lang === 'object') {
      return (<>
      <h4>Languages</h4>
      <ul>
          {Object.values(lang).map((l) => (<li key={l}>{l}</li>))}
      </ul></>) }
    else 
    {   return(<><h4>Language not defined</h4></>)}  
    }

export default Language