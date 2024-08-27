import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{label: 'canned foods', value: 'canned foods' },{label: 'hawaiian food', value: 'hawaiian food'},{label: 'minerals', value: 'minerals'}];



   [boardName, setboardName] = useState({

    
   });

   function DaysOfTheWeek() {
      const ListOfDays = (props) => {
      return props.map((day) => <li key={props.index}>{day}</li>);
      };
      return <ul>{ListOfDays(weekDays)}</ul>;
      }

   const handleChange = (event) => {
      
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>

      boards.map( (item) => <option value={item.value}  >   item.label</option>);
   
      
      boards.map (function(ele) {
         (
         <option value={ele.value}>{ele.label}</option>
      )
      })
      <option value='canned foods'>canned foods</option>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
