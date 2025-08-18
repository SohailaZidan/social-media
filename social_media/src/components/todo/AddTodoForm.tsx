import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";

interface AddTodoFormProps {
  onAdd: (title: string) => Promise<void>; 
}

const AddTodoForm = ({ onAdd }: AddTodoFormProps) => {
  const [newTitle, setNewTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setLoading(true);
    await onAdd(newTitle);
    setNewTitle("");
    setLoading(false);
  };

  return (
    <div className="w-full mx-auto mb-6">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200"
      >
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 outline-none"
          disabled={loading}
        />
        <button
          type="submit"
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white px-6 py-3 font-medium   disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} spin />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
          {loading ? "Adding..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
