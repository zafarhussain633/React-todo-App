import React from 'react'

function ListItem(props) {

    let date = new Date().toLocaleString();
    return (
       
        <div id="item">
               <div> 
                    <div style={{fontSize:"1.5rem"}} >{props.item}</div>
                    <p>{date}</p> 
                </div>

                <div style={{fontSize:"1.4rem"}}><i className=" fa fas fa-times-circle" onClick={props.click} ></i></div>
                
        </div>   
       
        
    )
}

export default ListItem;
