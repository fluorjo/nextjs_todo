"use client";
import React, { useTransition } from "react";
import { Todo } from "./TodoList";
import { updateTodo } from "@/lib/actions";

const CheckBox = ({ todo }: { todo: Todo }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <input
      type="checkbox"
      checked={todo.completed}
      id="completed"
      name="completed"
      disabled={isPending}
      onChange={() => startTransition(() => updateTodo(todo))}
      className="min-w-[2rem] min-h-[2rem]"
    />
  );
};

export default CheckBox;
