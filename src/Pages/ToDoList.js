import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import "./ToDoList.css";
const ToDoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.length === 0) {
      return;
    }
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isCompleted: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    let newUpdatedTask = todoList.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: true };
      }
      return task;
    });
    setTodoList(newUpdatedTask);
  };
  return (
    <>
      <div className="addTask">
        <h1>Todo List</h1>
        <div>
          <input
            className="taskInput"
            onChange={handleTaskChange}
            id="taskInput"
          />
          <button className="addTaskButton" type="button" onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>
      <div className="list">
        {todoList.length === 0 && (
          <p className="noTaskText">No Task Availabe</p>
        )}
        {todoList?.map((task) => {
          return (
            <div
              key={task?.id}
              className={`task ${task.isCompleted ? "completedTask" : ""}`}
            >
              <h3 className="taskName">{task?.taskName}</h3>
              <div className="actions">
                {task.isCompleted ? (
                  <p className="taskCompletedText pe-2">Task Completed</p>
                ) : (
                  <button
                    className="completeTaskButton actionButton"
                    onClick={() => completeTask(task?.id)}
                  >
                    <IoMdCheckmarkCircleOutline />
                  </button>
                )}
                <button
                  className="deleteTaskButton actionButton"
                  onClick={() => deleteTask(task?.id)}
                >
                  <MdDeleteForever className="deleteTaskIcon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ToDoList;
