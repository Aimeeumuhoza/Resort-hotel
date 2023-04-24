
import React from "react";
import "./content.css"
import back from "../../assets/images/back.jpg"
import resort from "../../assets/images/resort.jpg"

const Content = () => {
  return (
    <div>
    <div className="content-image">
      
      <img src={back} alt="hotel" style={{ width: '100%' }} />
      <div className="container1">
        <h1 style={{ fontSize: '5rem' }}><b>RESORT HOTEL </b></h1>
      </div>
      <div className="box">
        <div className="boxes">
          <h4>Booking</h4> <br />
        </div>
        <div className="boxe">
          <div className="sub-box" style={{ backgroundColor: 'white ', width: '38%', height: '120px' }}>
            <div className="text" >
              <h6 style={{ paddingTop: '20px' }}>from</h6>
              <input style={{ paddingTop: '0px' }} type='date' name="date"></input>
            </div>
          </div>
          <div className="sub-box" style={{ backgroundColor: 'white', width: '38%', height: '120px' }}>
            <div className="text">
              <h6 style={{ paddingTop: '20px' }}>to</h6>
              <input style={{ paddingTop: '0px' }} type='date' name="date"></input>
            </div>
          </div>
         
          <div className="sub-box" style={{ backgroundColor: 'white', width: '53%', height: '120px' }}>
         
  <select id="type">
    <option value="hotel">Hotel</option>
    <option value="motel">Motel</option>
    <option value="motel">fgfffff</option>
  </select>
          </div>
          <div className="sub-box" style={{ backgroundColor: 'bisque', width: '16%', height: '80px',marginTop:'23px' }}>
          <div className="text" >
            <h3 style={{marginTop:'18px',marginLeft:'1px'}}><b>Check</b></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cadret">
      <div>
      <div style={{display:'flex'}}>
        
      <div style={{ position: 'relative', width: '25%', padding: '24px' }}>
    <img src={resort} alt="hotel" style={{ width: '100%', height: 'auto' }} />
    <div style={{ position: 'absolute', bottom:' 25px', left: '30px', width: '80%', color: 'white' ,backgroundColor: 'rgba(0, 0, 0, 0.2)',fontStyle: 'bold' }}>
      <h4> La posh hotel</h4>
      <div className="li">
      <a href='https://www.youtube.com/watch?v=zfHbuTG8IHE' style={{color:'white',textDecoration: 'none', fontWeight: 'bold'}}> More....</a></div>
    </div>
  </div>
      <img src={resort} alt="hotel" style={{ width: '25%',height:'25%' ,padding:'24px' }} />
      <img src={resort} alt="hotel" style={{ width: '25%',height:'25%' ,padding:'24px'}} />
      <img src={resort} alt="hotel" style={{ width: '25%',height:'25%' ,padding:'24px'}} />
      </div>
      <div style={{display:'flex', flexDirection: 'column'}}>
  <div style={{display:'flex'}}>
    <img src={resort} alt="hotel" style={{ width: '25%',height:'25%' ,padding:'24px'}} />
    <img src={resort} alt="hotel" style={{ width: '25%',height:'25%' ,padding:'24px'}} />
    <img src={resort} alt="hotel" style={{ width: '25%',height:'25%' ,padding:'24px'}} />
    <img src={resort} alt="hotel" style={{ width: '20%',height:'15%' ,padding:'24px'}} />
  </div>
  
</div>
       </div>
       </div>
    </div>
  )
}

export default Content
