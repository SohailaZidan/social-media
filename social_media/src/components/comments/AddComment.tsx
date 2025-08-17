import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import type { Comment } from "../../interfaces/comment";
import { postsService } from "../../services/postService";
import { usersService } from "../../services/usersService";

interface Props {
  postId: number;
  onCommentAdded: (comment: Comment) => void;
}

const AddComment = ({ postId, onCommentAdded }: Props) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    if (!text.trim()) return;
    setLoading(true);

    try {
      const user = await usersService.getCurrentUser();
      const newComment = await postsService.createComment({
        postId,
        name: "Current User",
        email: user.email,
        body: text,
      });

      onCommentAdded(newComment);
      setText("");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-3 border-t border-gray-200 pt-3">
      <FontAwesomeIcon icon={faUserCircle} className="text-gray-400 text-3xl" />
      <input
        type="text"
        placeholder="Write a comment..."
        className="flex-1 px-4 py-2 text-sm bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleAdd}
        disabled={loading}
        className="px-3 py-2 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 transition cursor-pointer disabled:opacity-50"
      >
        {loading ? (
          "..."
        ) : (
          <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
        )}
      </button>
    </div>
  );
};

export default AddComment;
