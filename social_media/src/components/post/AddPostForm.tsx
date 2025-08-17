import { useState } from "react";
import type { Post } from "../../interfaces/post";
import { postsService } from "../../services/postService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

interface Props {
  onPostAdded: (post: Post) => void;
}

const AddPostForm = ({ onPostAdded }: Props) => {
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim()) return;

    setLoading(true);
    try {
      const newPost = await postsService.createPost({
        userId: 1,
        title: "Auto Title", 
        body,
      });
      onPostAdded(newPost);
      setBody("");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border pb-3 border-gray-200 dark:border-[#38444d] rounded-lg"
    >
      <div className="flex p-4">
        <img
          className="w-10 h-10 rounded-full"
          src="https://tse4.mm.bing.net/th/id/OIP.5QylMk-hjGNwEP548-V_QQHaLF?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="profile"
        />
        <textarea
          className="p-2 dark:text-white text-gray-900 w-full h-16 bg-transparent focus:outline-none resize-none"
          placeholder="What's on your mind ?"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <div className="flex p-4 w-full items-center">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="text-blue-400 rounded-full p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-700"
          >
            <FontAwesomeIcon icon={faImage} className="text-lg" />
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="font-bold bg-blue-400 cursor-pointer text-white rounded-full px-6 ml-auto mr-1 flex items-center justify-center hover:bg-blue-500 transition disabled:opacity-50"
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </div>
    </form>
  );
};

export default AddPostForm;
