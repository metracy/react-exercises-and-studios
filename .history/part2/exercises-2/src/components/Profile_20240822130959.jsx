import './styles.css';
import oceans from './oceans.json';

import Button from './Button';

const listItem = oceans.map(ocean =>
   <div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
      <h1>{ocean.name}</h1>
      	
      <h3>Fun Facts:</h3>
      <ul>
         <Button />
         <li>{ocean.fact1}</li>
         <li>{ocean.fact2}</li>
         <li>{ocean.fact3}</li>
      </ul>
      
      <img src={ocean.image} alt={ocean.name} className="img"/> 
   </div>)

function Profile()
{
   return(
         <ul>
            {listItem}
         </ul>  
   );
}

export default Profile;