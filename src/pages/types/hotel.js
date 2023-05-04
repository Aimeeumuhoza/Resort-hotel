
import NavigationBar from "../../components/nav/nav";
import image from "../../assets/images/about-4.jpg";
import "./hotel.css"

const Hotel = () => {
return(
    <div>
<NavigationBar/>
<div>
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
        <img src={image} alt="hotel" class="imagee" />
      </td>
    </tr>
  </tbody>
</table>
</div>
</div>
)
};
export default Hotel;
