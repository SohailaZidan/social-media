import type { User } from "../interfaces/user";
import { usersService } from "./usersService";
const AUTH_STORAGE_KEY = "auth_state";

interface AuthState {
  isLoggedIn: boolean;
  currentUserId: number | null;
}

function saveAuthState(state: AuthState) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(state));
}

function loadAuthState(): AuthState {
  const stored = localStorage.getItem(AUTH_STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return { isLoggedIn: false, currentUserId: null };
}

let authState: AuthState = loadAuthState();

export const authService = {
  login: async (email: string, password: string): Promise<User> => {
    const users: User[] = await usersService.getUsers();
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      throw new Error("User not found");
    }

    const expectedPassword = user.email.split("@")[0] + "123";

    if (password !== expectedPassword) {
      throw new Error("Invalid password");
    }

    authState = { isLoggedIn: true, currentUserId: user.id };
    saveAuthState(authState);

    return user;
  },

  logout: () => {
    authState = { isLoggedIn: false, currentUserId: null };
    saveAuthState(authState);
  },

  isLoggedIn: (): boolean => {
    return authState.isLoggedIn;
  },

  getCurrentUserId: (): number | null => {
    return authState.currentUserId;
  },
};