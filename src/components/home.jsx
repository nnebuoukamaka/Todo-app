import React, { useState, useEffect, useref, useRef } from "react";

const Home = (props) => {
  const [task, setTask] = useState(props.edit ? props.edit.value : "");
  const [error, setError] = useState("");


  useEffect( () =>{
    setError("");
  },[task])

  const inputRef = useRef(null);
  useEffect( () =>{
    inputRef.current.focus();
  },[])

  const handleSubmit = (e) => {
        e.preventDefault();

        if (!task) {
            setError("Please enter a task");
            return;
            };


        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: task
        });
        
     setTask("");
  };

 
  

  return (
    <div className="">
        {error && (
        <div className="" style={{ textAlign: "center", color: "red" }}>
          
          {error}
        </div>
      )}
      <form className="todo-form" onSubmit={handleSubmit} >
        {props.edit ? (
            <>
            <input 
            className="todo-input edit"
            type="text"
            name="text"
            placeholder="Update Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            ref={inputRef}
            />
            <button 
            type="submit"
            className="todo-button edit"
            >
                Update
            </button>
            </>
        ) : (
            <>
            <input 
        className="todo-input"
        type="text"
        name="text"
        placeholder="Enter New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        ref={inputRef}
        />
        <button 
        type="submit"
        className="todo-button"
        >
            Add Task
        </button>
        </>
        )}
        
      </form>
    </div>
  );
};

export default Home;
