import React, { useState } from 'react';
import './HomeStyles.css';


const Home = () => {

  const [todoList, setTodoList] = useState([]);
  const [curentTodoItem, setCurrentTodoLitem] = useState([]);

  const handleClick = (e) => {
    console.log("event", e);
    e.preventDefault();
    const curentItem = e.target[0].value;
    setCurrentTodoLitem([...curentTodoItem, curentItem]);
  }

  return (
    <div className='wholeBackgroundStyle'>
      <div>Todos</div>
      <form onSubmit={handleClick}>
        <input 
          type="text" 
          placeholder="What needs to be done"
        >
        </input>
        <button className = 'button'
          type="submit"
        > Add todo
        </button>
      </form>
      <div>{curentTodoItem?.map((item) => {
        console.log("item", item);
        return <ul>{item}</ul>;
      })}</div>
    </div>
  );
}

export default Home;