import { useState } from "react";
import type { Todo } from "../../interfaces/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faSave } from "@fortawesome/free-solid-svg-icons";

interface TodoItemProps {
  todo: Todo;
  onToggle: (todo: Todo) => void;
  onDelete: (id: number) => void;
  onEdit: (todo: Todo) => void;
}

const TodoItem = ({ todo, onToggle, onDelete, onEdit }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

 const handleSave = async () => {
  if (!editTitle.trim()) return;
  try {
    await onEdit({ ...todo, title: editTitle });
    setIsEditing(false);
  } catch (err) {
    console.error("Failed to save:", err);
  }
};


  return (
    <li
      className="flex items-center justify-between bg-white shadow-sm dark:bg-[#253341]
      rounded-xl px-4 py-3 transition transform hover:scale-[1.02] hover:shadow-lg"
    >
      <div className="flex items-center flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
          className="mr-3 h-5 w-5 accent-blue-500 cursor-pointer"
        />
        {isEditing ? (
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            autoFocus
            className="border rounded-lg px-2 py-1 flex-1 dark:text-white focus:outline-none 
              focus:ring-2 focus:ring-blue-400"
          />
        ) : (
          <span
            className={`flex-1 text-lg ${
              todo.completed
                ? "line-through text-gray-400 dark:text-gray-100 "
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {todo.title}
          </span>
        )}
      </div>
      {isEditing ? (
        <button
          onClick={handleSave}
          className="bg-green-100 text-green-600 hover:bg-green-200 
          rounded-full p-2 ml-2 transition"
          title="Save"
        >
          <FontAwesomeIcon icon={faSave} />
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-100 text-blue-600 hover:bg-blue-200 
          rounded-full p-2 ml-2 transition"
          title="Edit"
        >
          <FontAwesomeIcon icon={faPen} />
        </button>
      )}

      <button
        onClick={() => onDelete(todo.id)}
        className="bg-red-100 text-red-600 hover:bg-red-200 
        rounded-full p-2 ml-2 transition"
        title="Delete"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default TodoItem;
