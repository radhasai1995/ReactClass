import React, { useState } from 'react';


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
    <div>
      <div>todos</div>
      <form onSubmit={handleClick}>
        <input type="text" placeholder="What needs to be done"></input>
        <button type="submit">Add todo</button>
      </form>
      <div><ul>{curentTodoItem?.map((item) => {
        console.log("item", item);
        return <li>{item}</li>;
      })}</ul></div>
    </div>
  );
}

export default Home;