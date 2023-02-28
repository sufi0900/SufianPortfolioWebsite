import React from "react";

const Last = () => {
  return (
    <div>
      <div
        className="text-center p-3 sit"
        // style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-white" href="https://mdbootstrap.com/">
          Website created by Sufian
        </a>
      </div>
    </div>
  );
};

export default Last;
