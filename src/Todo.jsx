import React, { useState } from "react";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const InputChange = (e) => {
    setInputValue(e.target.value);
  };

  const AddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-3xl font-bold mb-4">To do</h1>
      <div className="flex gap-2">
        <input
          className="bg-gray-900 text-white w-80"
          type="text"
          placeholder="Add a new task"
          value={inputValue}
          onChange={InputChange}
        />
        <button className="bg-blue-500 w-5" onClick={AddTask}>
          +
        </button>
      </div>
      <h2 className="mt-3 mb-3">Tasks to do</h2>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="qoshish"
            style={{
              border: "1px solid black",
              width: "350px",
              padding: "0px",
              marginBottom: "15px",
            }}
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
