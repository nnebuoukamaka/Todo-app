import React, {useState, useEffect} from 'react';
import Home from './home';
import Todo from './todo';


function HomeWrap() {
    const [todos, setTodos] = useState([]);
    const [date, setDate] = useState(new Date());


   
    const addTodo = (todo) => {
        if(/^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);

        // console.log(todo, ...todos)
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text))
        {return;}
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
               todo.isComplete = !todo.isComplete 
            }
            return todo;
        })
        setTodos(updatedTodos)
    }
    

  return (
    <div>
        <h2>My Todo List for {date.toDateString()}</h2>
        
    <Home  onSubmit={addTodo}/>
    <Todo  todos = {todos} completeTodo = {completeTodo} removeTodo = {removeTodo} updateTodo ={updateTodo}/>
    </div>
  )
} 

export default HomeWrap