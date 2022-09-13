import React from "react";

const List =(props)=>{
    return(
        <>
        <li>{props.txt}<span className="icon" onClick={()=>{props.onSelect(props.id)}}><i className="fas fa-trash"></i></span></li>
            {/* <div className="todo-style">
                <i className="fa-solid fa-trash" onClick={()=>{
                    props.onSelect(props.id)
                }}></i>
                <li>{props.txt}</li>
            </div> */}
        </>
       
    )
}

export default List;