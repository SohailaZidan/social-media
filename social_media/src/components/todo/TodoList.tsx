import { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";
import type { Todo } from "../../interfaces/todo";
import { todoService } from "../../services/todoService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faClipboardList, faWifi } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    setLoading(true);
    setError(false);
    try {
      const data = await todoService.getTodos();
      setTodos(data);
    } catch (err) {
      setError(true); 
      setTodos([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (title: string) => {
    try {
      const todo = await todoService.addTodo(title);
      setTodos([todo, ...todos]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggle = async (todo: Todo) => {
    try {
      const updated = { ...todo, completed: !todo.completed };
      const saved = await todoService.updateTodo(updated);
      setTodos(todos.map((t) => (t.id === saved.id ? saved : t)));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await todoService.deleteTodo(id);
      setTodos(todos.filter((t) => t.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

 const handleEdit = async (todo: Todo) => {
  try {
    const saved = await todoService.updateTodo(todo);
    setTodos(todos.map((t) => (t.id === saved.id ? saved : t)));
    return saved; 
  } catch (err) {
    console.error(err);
    throw err; 
  }
};


  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">My Todos</h1>

      <AddTodoForm onAdd={handleAdd} />

      {loading ? (
        <div className="flex justify-center py-6 text-blue-500 text-xl">
          <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
          Loading todos...
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center py-10 text-red-400">
          <FontAwesomeIcon icon={faWifi} size="3x" className="mb-4" />
          <p className="text-lg font-medium mb-2">No Internet Connection</p>
          <p className="text-sm text-red-500">
            Please check your network and try again.
          </p>
          <button
            onClick={loadTodos}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Retry
          </button>
        </div>
      ) : todos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-400">
          <FontAwesomeIcon icon={faClipboardList} size="3x" className="mb-4" />
          <p className="text-lg font-medium mb-2">No tasks yet</p>
          <p className="text-sm text-gray-500">
            Add your first todo using the form above!
          </p>
        </div>
      ) : (
        <ul className="space-y-2 mt-4">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
