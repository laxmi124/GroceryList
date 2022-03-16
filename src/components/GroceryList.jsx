import React from "react";

const GroceryList =({title,id,deleteHndle})=>{
   return (
       <div>
           <h1> {title} </h1> 
           <button onClick={()=>deleteHndle(id)}>DELETE</button>
       </div>
   )
}

export default GroceryList;