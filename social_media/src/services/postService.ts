import type { Comment } from "../interfaces/comment";
import type { Post } from "../interfaces/post";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const postsService = {
  async getPosts(limit: number = 50): Promise<Post[]> {
    const res = await fetch(`${BASE_URL}/posts?_limit=${limit}`);
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
  },

  async getComments(postId: number): Promise<Comment[]> {
    const res = await fetch(`${BASE_URL}/posts/${postId}/comments`);
    if (!res.ok) throw new Error("Failed to fetch comments");
    return res.json();
  },
   async getAllComments(): Promise<Comment[]> {
    const res = await fetch(`${BASE_URL}/comments`);
    if (!res.ok) throw new Error("Failed to fetch comments");
    return res.json();
  },

  async createPost(newPost: Omit<Post, "id">): Promise<Post> {
    const res = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    if (!res.ok) throw new Error("Failed to create post");
    return res.json();
  },

  async createComment(newComment: Omit<Comment, "id">): Promise<Comment> {
  const res = await fetch(`${BASE_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComment),
  });
  if (!res.ok) throw new Error("Failed to create comment");
  return res.json();
},

};
