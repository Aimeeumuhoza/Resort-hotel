
import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import "./content.css"
import back from "../../assets/images/back.jpg"
import resort from "../../assets/images/resort.jpg"
import about from "../../assets/images/about-1.jpg"
import about2 from "../../assets/images/about-2.jpg"
import about3 from "../../assets/images/about-3.jpg"
import about4 from "../../assets/images/about-4.jpg"

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
            <div className="sub-box" style={{ backgroundColor: 'bisque', width: '16%', height: '80px', marginTop: '23px' }}>
              <div className="text" >
                <h3 style={{ marginTop: '18px', marginLeft: '1px' }}><b>Check</b></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cadret">

        <div style={{ display: 'flex' }}>

          <div style={{ position: 'relative', width: '25%', padding: '24px',border: '2px solid black '}}>
            <img src={resort} alt="hotel" style={{ width: '100%', height: 'auto' }} />
            <div style={{ position: 'absolute', bottom: ' 90px', left: '30px', width: '80%', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', fontStyle: 'bold' }}>
              <h4> La posh hotel</h4>
            </div>
            <figcaption>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Kigali, Nyarugenge
            </figcaption>
            <figcaption>
              <div className="li">

                <Link as={Link} to="/hotel" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> More....</Link>
              </div>
            </figcaption>
          </div>

          <div style={{ position: 'relative', width: '25%', padding: '24px' }}>
            <img src={resort} alt="hotel" style={{ width: '100%', height: 'auto' }} />
            <div style={{ position: 'absolute', bottom: ' 85px', left: '30px', width: '80%', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', fontStyle: 'bold' }}>
              <h4> La millieur</h4>
            </div>
            <figcaption>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Kigali, Gasabo
            </figcaption>
            <figcaption>
              <div className="li">
                <a href='https://www.youtube.com/watch?v=zfHbuTG8IHE' style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> More....</a>
              </div>
            </figcaption>
          </div>
          <div style={{ position: 'relative', width: '25%', padding: '24px' }}>
            <img src={resort} alt="hotel" style={{ width: '100%', height: 'auto' }} />
            <div style={{ position: 'absolute', bottom: ' 85px', left: '30px', width: '80%', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', fontStyle: 'bold' }}>
              <h4> NYC</h4>
            </div>
            <figcaption>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Kigali, Gasabo
            </figcaption>
            <figcaption>
              <div className="li">
                <a href='https://www.youtube.com/watch?v=zfHbuTG8IHE' style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> More....</a>
              </div>
            </figcaption>
          </div>
          <div style={{ position: 'relative', width: '25%', padding: '24px' }}>
            <img src={resort} alt="hotel" style={{ width: '100%', height: 'auto' }} />
            <div style={{ position: 'absolute', bottom: ' 85px', left: '30px', width: '80%', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', fontStyle: 'bold' }}>
              <h4> NYC</h4>
            </div>
            <figcaption>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Kigali, Gasabo
            </figcaption>
            <figcaption>
              <div className="li">
                <a href='https://www.youtube.com/watch?v=zfHbuTG8IHE' style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> More....</a>
              </div>
            </figcaption>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <figure style={{ width: '25%', padding: '24px' }}>
              <img src={resort} alt="hotel" style={{ width: '100%', height: 'auto' }} />
              <figcaption>Image 1</figcaption>
            </figure>
            <img src={resort} alt="hotel" style={{ width: '25%', height: '25%', padding: '24px' }} />
            <img src={resort} alt="hotel" style={{ width: '25%', height: '25%', padding: '24px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20%', padding: '24px' }}>
              <img src={resort} alt="hotel" style={{ width: '100%', height: '100%' }} />
              <div className="lin">
                <a href='https://www.youtube.com/watch?v=zfHbuTG8IHE' style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> More....</a></div>
            </div>
          </div>

        </div>
      </div>

      <div style={{ marginLeft: '90px', marginTop: '23Px', backgroundColor: '#ecf3f3' }}>
        <table style={{ width: '100%', display: 'flex' }}>


          <td style={{ width: '50%' }}>
            <div style={{ display: 'block', marginTop: '23px' }}>

              <h1>About us</h1><br />

              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.
                Donec in sodales dui,
                a blandit nunc.
                Pellentesque id eros venenatis, sollicitudin neque sodales, vehicula nibh. Nam massa odio, porttitor vitae efficitur non, ultricies volutpat tellus.
                Dolor sit amet, consectetur adipiscing elised do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</h4><br /><br />

              <button style={{ width: '345px' }}>Make Reservation</button>
            </div>
          </td>


          <td style={{ width: '50%' }}>
            <div style={{ display: 'flex', marginTop: '23px', padding: '3px' }}>

              <div style={{ position: 'relative', width: '100%', padding: '2px' }}>
                <img src={about} alt="hotel" style={{ width: '50%', height: '75%', padding: '14px' }} />
                <img src={about2} alt="hotel" style={{ width: '50%', height: 'auto', padding: '17px' }} />
              </div>
            </div>
            <div style={{ display: 'flex', marginTop: '1px', padding: '3px' }}>
              <div style={{ position: 'relative', width: '100%', padding: '14px' }}>
                <img src={about3} alt="hotel" style={{ width: '50%', height: 'auto', padding: '23px' }} />
                <img src={about4} alt="hotel" style={{ width: '50%', height: 'auto', padding: '23px' }} />
              </div>
            </div>
          </td>
        </table>
      </div>

    </div>

  )
}

export default Content
