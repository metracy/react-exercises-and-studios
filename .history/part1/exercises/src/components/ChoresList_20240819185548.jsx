import classes from './ChoresList.module.css';
export default function ChoresList () {
   return(
      <div>
         <h2 className={classes.choresHeading}>Movies I Watched This Month</h2>
         <ol>
            <li className={classes.choresText}>Laundry</li>
            <li className={classes.choresText}>Groceries</li>
            <li className={classes.choresText}>Touch Grass</li>
            <li className={classes.choresText}>Activate Robot Vacuum Cleaner</li>
         </ol>
      </div>
   );
}