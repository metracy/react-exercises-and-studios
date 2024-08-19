
import React from 'react';
import classes from './ChoreList.module.css';

class ChoreList extends React.Component {
   render() {
      const movies = ["Pride and Prejudice", "Howl's Moving Castle", "Joker", "Batman Begins", "Avengers"];
      return (
      <div>
         <h3 className = {classes.choresHeading}>Movies I Watched This Month</h3>
         <ol>
            <li className={classes.choresText}>Laundry</li>
            <li className={classes.choresText}>Groceries</li>
            <li className={classes.choresText}>Touch Grass</li>
            <li className={classes.choresText}>Activate Robot Vacuum Cleaner</li>
         </ol>
      </div>
      );
   }
}

export default ChoreList;