import type { Post } from "../../interfaces/post";
import type { User } from "../../interfaces/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faRetweet,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { getProfileImage } from "../../shared/images";

interface Props {
  post: Post;
  user?: User;
  onOpenComments: (postId: number) => void;
  commentsCount?: number;
}
export default function PostCard({
  post,
  user,
  commentsCount,
  onOpenComments,
}: Props) {
  return (
    <div className="border border-gray-200 dark:border-[#38444d] cursor-pointer pb-4 rounded-2xl hover:shadow-md transition">
      <div className="flex p-4 pb-0">
        <img
          className="h-9 w-9 rounded-full"
          src={getProfileImage(user?.id ?? 0)}
          alt={user?.name || "user"}
        />
        <p className="ml-2 flex flex-shrink-0 items-center font-medium text-gray-800 dark:text-white">
          {user?.name || "Anonymous"}
          <span className="ml-1 text-sm leading-5 text-gray-400">
            @{user?.username || "unknown"} · {new Date().toDateString()}
          </span>
        </p>
      </div>

      <div className="pl-8 xl:pl-16 pr-4">
        <p className="w-auto font-medium text-gray-800 dark:text-white mb-3">
          {post.body}
        </p>

        <img
          className="rounded-2xl border border-gray-600 my-3 mr-2 w-full"
          src="https://images.nature.com/original/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459150.jpg"
        />

        <div className="flex items-center w-full justify-between">
          <div
            onClick={() => onOpenComments(post.id)}
            className="flex items-center dark:text-white text-xs text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 cursor-pointer"
          >
            <FontAwesomeIcon icon={faComment} className="mr-2 text-lg" />
            {commentsCount || 0}
          </div>
          <div className="flex items-center dark:text-white text-xs text-gray-400 hover:text-green-400 dark:hover:text-green-400 cursor-pointer">
            <FontAwesomeIcon icon={faRetweet} className="mr-2 text-lg" />
            14k
          </div>
          <div className="flex items-center dark:text-white text-xs text-gray-400 hover:text-red-600 dark:hover:text-red-600 cursor-pointer">
            <FontAwesomeIcon icon={faHeart} className="mr-2 text-lg" />
            14k
          </div>
          <div className="flex items-center dark:text-white text-xs text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 cursor-pointer">
            <FontAwesomeIcon icon={faShare} className="mr-2 text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
