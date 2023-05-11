
import NavigationBar from "../../components/nav/nav";
import image from "../../assets/images/about-4.jpg";
import "./hotel.css"

const Hotel = () => {
return(
    <div>
<NavigationBar/>
<div>
  <h4 style={{color:'black',marginLeft:'560px',marginTop:'45px'}}> For Booking</h4>
<table>
  <tbody>
    <tr>
      <td class="left-column">
        <img src={image} alt="hotel" class="image" />
        <div > 
          <img src={image} alt="hotel" class="small-image" />
          <img src={image} alt="hotel" class="small-image" />
          <img src={image} alt="hotel" class="small-image" />
          <img src={image} alt="hotel" class="small-image" />
        </div>
      </td>
      <td class="Right-column">
        <h4>Contact owner</h4>
       
      </td>
    </tr>
  </tbody>
</table>
</div>
</div>
)
};
export default Hotel;
