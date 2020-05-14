import React, { useEffect, useState, useContext } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

const Users = () => {
  const auth = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/users",
          "GET",
          null,
          {
            Authorization: "Bearer " + auth.token,
          }
        );

        setLoadedUsers(responseData.users);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [sendRequest, auth.token]);

  return (
    <div>
      This is the users page
      {loadedUsers && (
        <ul>
          {loadedUsers.map((user) => {
            return <li key={user.id}>{user.username}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Users;
