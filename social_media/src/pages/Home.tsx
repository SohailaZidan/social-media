import { useEffect, useState } from "react";
import PostCard from "../components/post/PostCard";
import CommentsModal from "../components/post/CommentsModal";
import AddPostForm from "../components/post/AddPostForm";
import type { Post } from "../interfaces/post";
import type { Comment } from "../interfaces/comment";
import { postsService } from "../services/postService";
import type { User } from "../interfaces/user";
import { usersService } from "../services/usersService";
import LoadingCard from "../components/LoadingCard";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [allComments, setAllComments] = useState<Comment[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadingComments, setLoadingComments] = useState(false);

  // Load Posts + Users
useEffect(() => {
    Promise.all([
      postsService.getPosts(),
      usersService.getUsers(),
      postsService.getAllComments(),
    ])
      .then(([postsData, usersData, commentsData]) => {
        setPosts(postsData);
        setUsers(usersData);
        setAllComments(commentsData);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoadingPosts(false));
  }, []);

  const handlePostAdded = (post: Post) => {
    setPosts((prev) => [post, ...prev]);
  };

  const openComments = async (postId: number) => {
    setSelectedPostId(postId);
    setLoadingComments(true);
    try {
      const data = await postsService.getComments(postId);
      setComments(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingComments(false);
    }
  };

  const closeComments = () => {
    setSelectedPostId(null);
    setComments([]);
  };

if (loadingPosts)
  return (
    <>
    <LoadingCard/>
    </>
  );


  return (
    <div className="flex flex-col gap-3 p-2">
      <div className="flex justify-between items-center border px-4 py-3 sticky top-0 bg-white dark:bg-[#15202b]  border-gray-200 dark:border-gray-700">
        <h4 className="text-gray-800 dark:text-gray-100 font-bold ">Home</h4>
        <i className="fa-brands fa-twitter  text-lg  text-blue-400"></i>
      </div>
      {/* Add Post Form */}
      <div className="w-full">
        <AddPostForm onPostAdded={handlePostAdded} />
      </div>

      {/* Posts Grid */}
      <div className="grid gap-4">
        {posts.length === 0 ? (
          <div className="flex dark:bg-[#15202b] flex-col items-center justify-center py-16 text-center border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 h-14 text-gray-400 mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 16h10M5 12h14M5 4h14M5 20h14"
              />
            </svg>
            <p className="text-gray-600 text-lg font-medium">No posts yet</p>
            <p className="text-gray-400 text-sm mt-1">
              Be the first one to share something!
            </p>
          </div>
        ) : (
          posts.map((post) => {
            const user = users.find((u) => u.id === post.userId);
            return (
              <PostCard
                key={post.id}
                post={post}
                user={user}
                onOpenComments={openComments}
                commentsCount={allComments.filter(c => c.postId === post.id).length}
              />
            );
          })
        )}
      </div>

      {selectedPostId && (
        <CommentsModal
          comments={comments}
          loading={loadingComments}
          onClose={closeComments}
        />
      )}

      
      <div className=" p-4 border border-gray-200 dark:border-gray-700"></div>
    </div>
  );
}
