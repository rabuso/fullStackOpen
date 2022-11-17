import React from 'react';
const Filter = ({searchOn, handler}) => {
    return (
    <div>
      <input value={searchOn}
             onChange={handler}/>
    </div>)
    }   

export default Filter