import axios from "axios";

import { fetchGitHubUser } from "../helpers/gitHubFetch";

jest.mock("axios");

describe("fetchGitHubUser", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("the request must be sent to the server and return the requested data", async () => {
    const mockUserData = {
      login: "testuser",
      avatar_url: "https://example.com/avatar.jpg",
    };
    axios.get.mockResolvedValue({ data: mockUserData });
    const result = await fetchGitHubUser("testuser");
    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/users/testuser",
    );
    expect(result).toEqual(mockUserData);
  });

  test("if there is no such user then a message should be displayed", async () => {
    axios.get.mockRejectedValue(new Error("Not found"));
    await expect(fetchGitHubUser("nonexistentuser")).rejects.toThrow(
      "Not found",
    );
    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/users/nonexistentuser",
    );
  });
});
