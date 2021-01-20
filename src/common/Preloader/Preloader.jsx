import React from 'react';
import preloader from './../../assets/images/loader.png';

let Preloader = (props) => {
   return <div>
      {/* styles (in the jsx) are connected as objects*/}
      <img src={preloader} style={{width: '50px', height:'50px'}} />
   </div>
}

export default Preloader;