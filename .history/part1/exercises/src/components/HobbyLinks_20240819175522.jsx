 export default function HobbyLinks () {
    const hobbyLinks = ["dota2.com", "youtube.com"];
    return(
       <div>
          <h1>Hobbies</h1>
          <ul>
             <li><a href = {hobbyLinks[0]}>Dota 2</a></li>
             <li><a href = {hobbyLinks[1]}>YouTube</a></li>
          </ul>
       </div>
    );
 }