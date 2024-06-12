import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Input } from "./Style";
import { EditForm } from "./Style";

export default function Index() {
  const [task, settask] = useState(""); // State for New Todos
  const [todoList, settodoList] = useState([]); // State For TodoList
  let [edittodo, setedittodo] = useState(""); // State For Existing Todo
  const url = "https://jsonplaceholder.typicode.com/todos"; // Url to fetch Todo
  
  // Using this to fetch todo's at time of mounting 
  useEffect(() => {
    fetch(url)
      .then((response) => {
        let data = response.json();
        return data;
      })
      .then((data) => {
        let result = data;
        let updatedData = result.map((item) => {
          item.flag = true;
          return item;
        });
        settodoList(updatedData);
      });
  }, []);

  // On Click of Add This will be called and Post Request has been made 
  function handleSubmit(e) {
    e.preventDefault();
    fetch(url, {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        userId: 1,
        id: Date.now(),
        title: task,
        completed: false,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting Response to JSON
      .then((response) => response.json())

      // Displaying Updating results in Browser
      .then((json) => {
        let newTask = json;
        newTask.flag = true;
        settodoList([newTask, ...todoList]);
      });
    settask("");// After adding New todo Resseting the state
  }
  // delete request using fetch api 
  function handleDelete(item) {
    let index = todoList.indexOf(item);
    todoList.splice(index, 1); // Deleting the Todo from TodoList
    settodoList([...todoList]); // pdating Todo List using State
    fetch(`https://jsonplaceholder.typicode.com/todos/${item.id}`, {
      method: "DELETE",
    });
  }
  // Toggling the Flag Basis which edit window will open
  function handleEdit(item) {
    item.flag = false;
    settodoList([...todoList]); // Updating the state
  }
   // Toggling the Flag Basis which edit window will close
  function handleCancel(item) {
    item.flag = true;
    settodoList([...todoList]); // Updating the state
  }
  // put request handled when user request to update todo 
  function handleToedittodo(e, item) {
    e.preventDefault();
    let index = todoList.indexOf(item);
    item.title = edittodo;
    item.flag = true;
    fetch(`https://jsonplaceholder.typicode.com/todos/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((data) => {
        let result = data;
        todoList[index] = result;
        settodoList([...todoList]);// updating Todo List
      });

    setedittodo(""); // Updating Edittodo State
  }
 
  return (
    <Input>
      <form onSubmit={handleSubmit} className="addTaskForm">
        <div>
          <input
            type="text"
            placeholder="Add your task"
            value={task}
            onChange={(e) => settask(e.target.value)}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/889/889648.png"
            alt="error"
          />
        </div>
        <button>
          Add
          <img
            src="https://cdn-icons-png.flaticon.com/512/4903/4903809.png"
            alt="error"
          />
        </button>
      </form>
      <div>
        <ul>
          {todoList.map((item) => ( // Rendering Each Todo in Browser from TodoList
            <li key={item.id}>
              {item.flag ? ( // if Flag is true this will be rendered 
                <>
                  <span>{item.title}</span>

                  <div className="Icon_button">
                    <span>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
                        alt="error"
                        id="edit"
                        onClick={() => handleEdit(item)} // Execute handleEdit function and pass the current todo as argument
                      />
                    </span>
                    <span>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/484/484662.png"
                        alt="error"
                        id="delete"
                        onClick={() => handleDelete(item)} // Execute handleDelete function and pass the current todo as argument
                      />
                    </span>
                  </div>
                </>
              ) : ( // Conditional Rendering on Basis of Flag  if its value is false
                <>
                  <EditForm onSubmit={(e) => handleToedittodo(e, item)}>
                    <input
                      type="text"
                      placeholder="edit your task"
                      className="editInput"
                      value={edittodo}
                      onChange={(e) => setedittodo(e.target.value)} // Execute setEdittod function and pass the current Value of textbox as argument
                      required
                    ></input>
                    <div className="buttonWrapper">
                      <button className="editButton">Done</button>
                      <span className="editCancelButton" id="back">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2874/2874787.png"
                          alt="error"
                          onClick={() => handleCancel(item)}
                          
                        />
                      </span>
                    </div>
                  </EditForm>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Input>
  );
}
