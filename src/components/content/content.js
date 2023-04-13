
import React from "react";

import "./content.css"
import hotel from "../content/data/hotel.jpg"

const Content = () =>{
    return(
        <div>
            
            <div className="content-image">
            <img src={hotel} alt="hotel"/>
            
                
            <h1><b> OUR SERVICES</b></h1>
           
        </div>
        <div className="section">
        <section style={{width:"50%"}}>
            
        
           
            </section>
    
    
    </div>
    <div className="table">
    <table style={{border:"collapse"}}>
        <tr>
            <td style={{width:"50%"}} ><p><i>You all know us. And we all 
                know you. We are getting married lorem 
                ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna
                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Excepteur sint occaecat cupidatat non proident, sunt in
                   culpa qui officia deserunt mollit anim id est laborum 
                   consectetur adipiscing elit, sed do eiusmod tempor 
                   incididunt ut labore et dolore magna aliqua. Ut enim 
                   ad minim veniam, quis nostrud exercitation ullamco 
                   laboris nisi ut aliquip ex ea commodo consequat.</i>
                </p>
            </td>

            <td style={{width:"50%"}}><p><i>You all know us. And we all 
                know you. We are getting married lorem 
                ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna
                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Excepteur sint occaecat cupidatat non proident, sunt in
                   culpa qui officia deserunt mollit anim id est laborum 
                   consectetur adipiscing elit, sed do eiusmod tempor 
                   incididunt ut labore et dolore magna aliqua. Ut enim 
                   ad minim veniam, quis nostrud exercitation ullamco 
                   laboris nisi ut aliquip ex ea commodo consequat.</i>
                </p></td>
        </tr>
        </table>
        </div>
        
        </div>
    )
}

export default Content
