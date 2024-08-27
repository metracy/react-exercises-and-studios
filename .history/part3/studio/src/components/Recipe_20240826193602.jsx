import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://en.wikipedia.org/wiki/Jay_Catherwood_Hormel";
   let authorPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jay_C._Hormel%2C_Austin%2C_Minn.%2C_packer%2C_before_Senate_Unemployment_Comm._LCCN2016878034.jpg/220px-Jay_C._Hormel%2C_Austin%2C_Minn.%2C_packer%2C_before_Senate_Unemployment_Comm._LCCN2016878034.jpg";
   let authorName = "Jay Catherwood Hormel";

   return (
      <div>
         <img src={authorPhoto} alt = "Testifying" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ['Pork and ham meat','Salt','Water','Potato Starch','Sodium Nitrate'];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
