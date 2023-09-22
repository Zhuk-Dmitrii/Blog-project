export function Sorting ({selected, onChange, disabled=false}) {
   function handleChangeSelected (event) {
      onChange(event.target.value)
   }

   return (
      <select className="form-select mb-4 float-end" style={{width: '200px'}} disabled={disabled} value={selected} onChange={handleChangeSelected}>
         <option value="date">date</option>
         <option value="title">title</option>
         <option value="text">text</option>
         <option value="lesson_num">lesson num</option>
      </select>
   )
}