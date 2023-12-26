"use server";

import { Todo } from "@/app/components/TodoList";
import { revalidatePath } from "next/cache";
import sleep from "./sleep";

export async function addTodo(data: FormData) {
  const title = data.get("title");
  await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
      title,
      completed: false,
    }),
  });
  //원래 케시돼 있던 데이터를 purge하는 것. 이걸 해줘야 바로 새로고침돼서 반영됨.
  revalidatePath("/");
}

export async function deleteTodo(todo: Todo) {
  const res = await fetch(`http://localhost:3001/todos/${todo.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      id: todo.id,
    }),
  });

  await res.json();
  revalidatePath("/");
}

export async function updateTodo(todo: Todo) {
  const res = await fetch(`http://localhost:3001/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      ...todo,
      completed: !todo.completed,
    }),
  });

  await res.json();
  await sleep(50);
  revalidatePath("/");
}

