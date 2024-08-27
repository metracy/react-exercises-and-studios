import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{label: 'canned foods', value: 'canned foods' },{label: 'hawaiian food', value: 'hawaiian food'},{label: 'minerals', value: 'minerals'}];

   [boardName, setboardName] = useState{0};
   const handleChange = (event) => {
      
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
