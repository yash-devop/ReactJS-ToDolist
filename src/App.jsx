import React,{useState,useEffect}from "react";
import List from './List';

const App =()=>{

    //Local Storage has 2 steps: 1)Setitem 2) getitem 
    // getItem to store the value after refresh of page.
    const getLocalItems=()=>{
        let list = localStorage.getItem('toDoListData');
        if(list){ //means if localStorage has the list data then only add. 
            return JSON.parse(localStorage.getItem('toDoListData')); //converting the array to string using json.parse
        }
        else{
            return [];
        }
    } 

    const [usertask,setTask] = useState("");
    // whenever I click the button, we are storing input value in an array.

    // const [arrItem,setArrItem] = useState([]);
    const [arrItem,setArrItem] = useState(getLocalItems());   //storing emptyArray in hook useState 
    const [increment,setIncrement] = useState(0); //created this hook to set Pending task value.s

    const inputEvent = (event) =>{
        setTask(event.target.value); //event.target.value is used to get the value of the input field.
    }

    // When we click the + button:
    const btnClick =(event)=>{
        setArrItem((oldItems)=>{
            console.log(oldItems);
            return[...oldItems,usertask]
            
        })
        setTask(''); // when we click button, it will clear/empty '' the input field.
        setIncrement(increment+1); //this is for Your pending task when we click Add
    }

    // When we click the delete button:
    const deleteItem=(id)=>{
        console.log('deletd');
        setArrItem((oldItems)=>{
            return(
                oldItems.filter((arrItem,index)=>{
                    return index !== id;
                })
            )
        })
        setIncrement(increment-1)  //this is for Your pending task when we click Delete
    }



    // ClearAll button functioning.:
    const removeAll=()=>{
        setArrItem([]);
        // console.log('deleted alllllll');
        setIncrement(0);
    }


    //Local Storage has 2 steps: 1)Setitem 2) getitem  
    // setItem
    useEffect(()=>{
        localStorage.setItem('toDoListData',JSON.stringify(arrItem));
    },[arrItem]);




    return(
    <>
        <div className="wrapper">
            <header>ToDo List</header>
            <div className="inputField">
                <input type="text" placeholder="Enter ur task..."  onChange={inputEvent} value={usertask}/>
                {/* <li><span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li> */}
                <button id="add" onClick={btnClick} disabled={!usertask}><i className="fa fa-plus"></i></button>
            </div>
            <ul className="todoList">
                {arrItem.map((itemval,index)=>{
                    return (
                        <List
                            /*props*/
                            key = { index }
                            id  = { index }
                            txt = { itemval }
                            onSelect = {deleteItem}
                        />
                    );
                })}
            </ul>
            <div className="footer">
                <span>You have {increment} <span className="pendingTasks"></span> pending tasks</span>
                <button onClick = {removeAll}>ClearAll</button>
            </div>
        </div>
        <div class="copyright"><p>© Copyright 2022, designed &amp; developed by <a href="https://github.com/yash-devop" target='_blank' rel="noreferrer">Yash Kamble</a></p></div>
    </>
    )
}
export default App;