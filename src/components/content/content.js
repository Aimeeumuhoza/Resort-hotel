
import React from "react";

import "./content.css"
import back from "../content/data/back.jpg"



const Content = () =>{
    return(
        <div className="content-image">
            
        <img src={back} alt="hotel" style={{ width: '100%'}} />
        <div className="container1">
            <h1 style={{ fontSize: '5rem' }}><b>RESORT HOTEL </b></h1>
        </div>
        <div className="box">
            
        
        <div className="boxes">
        <h4>Booking</h4> <br/>
        </div>
        <div className="boxe">
      <div className="sub-box" style={{ backgroundColor: 'white ', width: '38%', height: '120px' }}>
        <div className="text">
        <h5>from</h5>
        </div>
      </div>
      <div className="sub-box" style={{ backgroundColor: 'white', width: '38%', height: '120px'}}> 
      <div className="text">
        <h5>from</h5>
        </div>
      </div>
      <div className="sub-box" style={{ backgroundColor: 'white', width: '53%', height: '120px' }}>
      <div className="text">
        <h5>from</h5>
        </div>
      </div>
      <div className="sub-box" style={{ backgroundColor: 'white', width: '53%', height: '120px' }}></div>
      <div className="sub-box" style={{ backgroundColor: 'white', width: '25%', height: '120px' }}></div>
            
            </div>
            </div>
        

        
            </div>
        )
}

export default Content
