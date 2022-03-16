import {useState} from "react";

const GroceryInput =({addToList})=>{

    const [value, setValue] = useState('');

    const handleInputValue=(e)=>{
        setValue(e.target.value)
    }

   return (
       <>
            <input type="text" onChange={(e)=>handleInputValue(e)} value={value} Placeholder="add items..."/>
            <button onClick={()=>{ addToList(value); setValue('') }}>ADD</button>
       </>
   )
}

export default GroceryInput;