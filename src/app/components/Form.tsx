import { addTodo } from "@/lib/actions";
import React from "react";

const Form = () => {
  return (
    <form action={addTodo} className="flex items-center gap-2">
      <input
        type="text"
        name="title"
        className="flex-grow w-full p-1 text-2xl rounded-lg"
        placeholder="add new todo"
        autoFocus
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
