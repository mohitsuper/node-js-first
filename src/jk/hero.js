import React from 'react'

export default function Hero(props) {

  return (

    <div className={`heros position-relative overflow-hidden text-center bg-${props.mode} text-${props.modetext}
    `}>
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 font-weight-normal">Punny headline</h1>
      <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
      <a className="btn btn-outline-secondary" href="#">Coming soon</a>
    </div>
    <div className="product-device box-shadow d-none d-md-block"></div>
    <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
  </div>
    
  )
};
