import React from 'react';
import './style/loading.css' 


function loading() {
  return (
     <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span>Guzzler</span>
    </div>
  )
}


export default loading;
