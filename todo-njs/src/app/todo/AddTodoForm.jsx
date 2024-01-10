'use client';

import React, { useState } from "react";
import SubmitButton from '../components/forms/SubmitButton';
import InputField from '../components/forms/InputField';

export default function AddTodoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.length > 0) {
      addTask(userInput);
    }
    setUserInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row flex items-center">
          <div className="col-7">
            <label htmlFor="todo" className="form-label font-semibold text-[navy]">
              Add New Todo
            </label>
            <InputField value={userInput} onChange={handleChange} />
          </div>

          <div className="col-5">
            <SubmitButton />
          </div>
        </div>
      </form>
    </div>
  );

};
