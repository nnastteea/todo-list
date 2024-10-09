import axios from "axios";

import { GitHubUser } from "../components/GitHubInfo/types";

export const fetchGitHubUser = async (
  username: string,
): Promise<GitHubUser> => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  const { login, avatar_url } = response.data;
  console.log(`User login: ${login}`);
  console.log(`Avatar URL: ${avatar_url}`);
  return { login, avatar_url };
};
