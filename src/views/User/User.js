import React from "react";
import { useParams } from "react-router-dom";
import { Profile } from "../Profile/Profile";

export const User = () => {
  const { username } = useParams();

  return (
    <>
      <Profile username={username} />
    </>
  );
};
