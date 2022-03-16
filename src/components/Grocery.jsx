import {useState} from 'react';
import GroceryInput from '../components/GroceryInput';
import GroceryList from '../components/GroceryList';
import { v4 as uuid } from 'uuid';

const Grocery =()=>{
   const [list,setList] = useState([]);    

    const addToList=(value)=>{
         let obj = {
             title:value,
             id:uuid(),
         }
         setList([...list,obj]);
    }
    const deleteHndle=(id)=>{
        let updateList = list.filter((item)=> id !== item.id);
        setList(updateList);
    }

   return (
       <>
        <GroceryInput addToList={addToList}/>
        {

        list.map((item,id)=>(
        <GroceryList {...item} key ={item.id} deleteHndle={deleteHndle}/>
        ))
        }
       </>
   )
}
export default Grocery;