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
         {boards.map((board) => (
            <option value={board.value}>{board.label}</option>
         ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
