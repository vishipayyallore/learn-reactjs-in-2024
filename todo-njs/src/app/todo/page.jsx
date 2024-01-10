'use client';

import React, { useState } from 'react'
import TodoListing from './Listing'
import AddTodoForm from './AddTodoForm'

export default function TodoHome() {
  const [toDoList, setToDoList] = useState([
    { text: "Buy Sugar", id: 1656632538430 },
    { text: "Eat Carrots", id: 1656632478827 },
  ]);

  function deleteItem(id) {
    setToDoList((toDoList) => toDoList.filter((rec) => id !== rec.id));
  }

  const addTask = (userInput) => {
    const newValue = { text: userInput, id: Date.now() };
    setToDoList((toDoList) => [newValue, ...toDoList]);
  };

  return (
    <div>
      <div className='shadow-sm p-2 bg-[#F8F4EC] mb-2 rounded-sm border-2 border-[#B19470]'>
        <AddTodoForm addTask={addTask} />
      </div>

      <div className='shadow-sm p-2 bg-[#F8FAE5] mb-2 rounded-sm border-2 border-[#b1be3b] text-[navy] font-semibold'>
        <TodoListing entries={toDoList} deleteItem={deleteItem} />
      </div>
    </div>
  )
}
