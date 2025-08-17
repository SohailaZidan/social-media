import type { Comment } from "../../interfaces/comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faComments,
  faUserCircle,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
interface Props {
  comments: Comment[];
  loading: boolean;
  onClose: () => void;
}

export default function CommentsModal({ comments, loading, onClose }: Props) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        className={`bg-white dark:bg-[#15202b]  w-11/12 md:w-2/3 lg:w-1/2 rounded-2xl shadow-2xl p-6 relative 
        ${closing ? "animate-scaleOut" : "animate-scaleIn"}`}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 cursor-pointer text-gray-400 hover:text-red-500 transition text-lg"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h2 className="text-2xl font-bold mb-5 flex items-center gap-2 text-blue-500 dark:text-white">
          <FontAwesomeIcon icon={faComments}  />
          Comments
        </h2>

        {loading ? (
          <p className="text-gray-600 animate-pulse">Loading comments...</p>
        ) : comments.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-10 text-gray-500">
            <FontAwesomeIcon
              icon={faComments}
              className="text-4xl mb-3 text-gray-400"
            />
            <p className="font-medium">No comments yet</p>
            <p className="text-sm text-gray-400">
              Be the first to start the conversation
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar pr-2 mb-4">
              {comments.map((c) => (
                <div
                  key={c.id}
                  className="flex gap-3 items-start border-b border-gray-100 pb-3"
                >
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className="text-gray-400 text-4xl"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-400">{c.email}</h3>
                    <p className="text-gray-600 dark:text-gray-200 text-sm">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 border-t border-gray-200 pt-3">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-gray-400 text-3xl"
              />

              <input
                type="text"
                placeholder="Write a comment..."
                className="flex-1 px-4 py-2 text-sm bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button className="px-3 py-2 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 transition cursor-pointer">
                <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
