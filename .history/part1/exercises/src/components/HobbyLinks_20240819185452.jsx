import classes from './HobbyLinks.module.css'; 
 export default function HobbyLinks () {
    const hobbyLinks = ["dota2.com", "youtube.com"];
    return(
       <div>
          <h1 className={classes.hobbyHeading}>Hobbies</h1>
          <ul>
             <li className={classes.hobbyText}><a href = {hobbyLinks[0]}>Dota 2</a></li>
             <li className={classes.hobbyText}><a href = {hobbyLinks[1]}>YouTube</a></li>
          </ul>
       </div>
    );
 }