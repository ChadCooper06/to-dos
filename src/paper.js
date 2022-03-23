import React from "react";
import "./App.css";
import Todos from "./todos";
//import App from "./App";


export default function Paper() {
    return(
        <div className="toDoPage">
            <h1 className="title">To Do List</h1>
            <div className="inputDiv">
                <input className="inputBox" type='text'></input>
            </div>
                    {/* this div below will be a child that is imported that is made up of other children that all have 
                    onclicks and buttons as well as a label that is the prop of the input value */}
            <div className="tasks">
                <Todos />
                <ul>
                    <li>create my app</li>
                    <li>make it work</li>
                    <li>try not to break it</li>
                </ul>
            </div>
            <button className="all">All</button>
            <button className="active">Active</button>
            <button className="done">Done</button>
                {/* this div will update based on the current active count */}
            <div className="counter">displays left to do</div>
            <button className="clearAll">Clear All</button>
        </div>
    )
};