import React from "react";
// import './styles.css'
import Data from "./user.json";
const UserProfile = (props) => {
  return (
    <div>
      {Data.map((post) => {
        return (
          <>
            <h1> {post.first_name} </h1>
            <p> {post.email} </p>
          </>
        );
      })}
    </div>
  );
};

export default UserProfile;
