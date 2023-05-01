import { http } from "./_http";

const BASE_URL = `${process.env.API_BASE_URL}/login`;

const AuthService = {
  login: async (username: string, password: string) =>
    await http("POST", `${BASE_URL}`, { username, password }),
};

export default AuthService;
