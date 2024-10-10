import axios from "axios";

import { GitHubUser } from "../components/GitHubInfo/types";

export const fetchGitHubUser = async (
  username: string,
): Promise<GitHubUser> => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  const { login, avatar_url } = response.data;
  return { login, avatar_url };
};
