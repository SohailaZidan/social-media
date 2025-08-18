import type { Todo } from "../interfaces/todo";
import { authService } from "./authService";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const todoService = {
  async getTodos(): Promise<Todo[]> {
    const userId = authService.getCurrentUserId();
    if (!userId) throw new Error("User not logged in");

    const res = await fetch(`${BASE_URL}?userId=${userId}`);
    return res.json();
  },

  async addTodo(title: string): Promise<Todo> {
    const userId = authService.getCurrentUserId();
    if (!userId) throw new Error("User not logged in");

    const newTodo: Omit<Todo, "id"> = {
      userId,
      title,
      completed: false,
    };

    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });

    return res.json();
  },

  async updateTodo(todo: Todo): Promise<Todo> {
    const res = await fetch(`${BASE_URL}/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });

    return res.json();
  },

  async deleteTodo(id: number): Promise<void> {
    await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  },
};
