import React, { useState } from 'react'
import ListItem from "./listItem"




function TodoList() {


   const [listItem, setlistItem] = useState([]);

   const [NewlistItem, setNewlistItem] = useState([])
   
  

   function handleEvent(event){
    const item =  event.target.value
    setlistItem(item)
   }

   function  changeEvent(e) {
       e.preventDefault();
       setNewlistItem(prev=>{
           return[...prev,listItem]
       });

       if(listItem.length===0){
           alert("please enter first")
        
       }
       setlistItem([])

   }

   function deleteItem(i){
    
    let remove =  NewlistItem.splice(i,1);
     setlistItem(remove);
   }

   
    return (
        <>
            <form onChange={handleEvent}>
            <h1>To-do List</h1>
            <div id="item">
                <div><input type="text" name="text" onChange={handleEvent} value={listItem} /  > </div>
                <div> <button onClick={changeEvent}>+</button> </div>
            </div>
           
                {
                   
                    NewlistItem.map((val,index)=><ListItem click={()=>{deleteItem(index)}} key={index} item={val}  />)
                       
                }
            </form>
        </>
    )
}

export default TodoList
