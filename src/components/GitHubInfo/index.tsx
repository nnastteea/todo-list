import React, { useState } from "react";
import { ReactComponent as Search } from "@assets/search.svg";
import axios from "axios";

import * as S from "./style";
import { GitHubUser } from "./types";

function GitHubInfo() {
  const [inputSearch, setInputSearch] = useState("");
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value);
  };

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${inputSearch}`,
      );
      const { login, avatar_url } = response.data;
      setUserData({ login, avatar_url });
      setError("");
    } catch (err) {
      setUserData(null);
      setError("Not found");
    }
  };

  return (
    <S.FormGitHubSearch onSubmit={handleSearch}>
      <S.LabelSearch>GitHub info</S.LabelSearch>
      <S.InputSearchContainer>
        <S.InputSearch placeholder="Search name..." onChange={handleChange} />
        <S.SearchButton type="submit" aria-label="Search">
          <Search alt="search icon" />
        </S.SearchButton>
      </S.InputSearchContainer>

      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

      {userData && (
        <S.UserCard>
          <div>Login: {userData.login}</div>
          <img src={userData.avatar_url} alt={`${userData.login}'s photo`} />
        </S.UserCard>
      )}
    </S.FormGitHubSearch>
  );
}

export default GitHubInfo;
