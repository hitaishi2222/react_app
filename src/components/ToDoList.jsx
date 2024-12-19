import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    setTasks((t) => [...t, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1 className="text-6xl mb-3">To-Do-List</h1>
      <div>
        <input
          className="border border-black text-[1.2rem] rounded-md text-gray-500"
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="btn bg-green-500 hover:bg-green-600"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li
            className="p-2 my-2 border border-y-2 flex items-center justify-center"
            key={index}
          >
            <span className="text-2xl">{task}</span>
            <button
              className="btn bg-red-500 hover:bg-red-600"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              className="btn border border-blue-300 hover:bg-slate-200"
              onClick={() => moveTaskUp(index)}
            >
              ⬆️
            </button>
            <button
              className="btn border border-blue-300 hover:bg-slate-200"
              onClick={() => moveTaskDown(index)}
            >
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
