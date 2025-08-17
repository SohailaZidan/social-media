const API_URL = "https://jsonplaceholder.typicode.com";

export const usersService = {
  getUsers: async () => 
    {
    const res = await fetch(`${API_URL}/users`);
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
  },
};
