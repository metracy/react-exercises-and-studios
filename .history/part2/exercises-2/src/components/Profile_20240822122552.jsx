import './styles.css';
import oceans from './oceans.json';

import Button from './Button';

const listItem = oceans.map(ocean =>
   <div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
      <img src={ocean.image} alt={ocean.name} className="img"/> 
   </div>)

function Profile()
{
   return(
      <>
         
         <ul>
            {listItem}
         </ul>  
         <Button />
      </>
      
   );
}

export default Profile;