import { authService } from "./authService";

const API_URL = "https://jsonplaceholder.typicode.com";

export const usersService = {
  getUsers: async () => 
    {
    const res = await fetch(`${API_URL}/users`);
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
  },
 getCurrentUser: async () => {
    const id = authService.getCurrentUserId();
    if (!id) throw new Error("No logged in user");
    const res = await fetch(`${API_URL}/users/${id}`);
    if (!res.ok) throw new Error("Failed to fetch user");
    return res.json();
  },

};
