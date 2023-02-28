import React from "react";
import Child from "./Child";
import items from "./Item";
const Parent = () => {
  return (
    <div className="container4">
      {items.map((item) => {
        return (
          <Child
            key={item.id}
            icon={item.icon}
            skill={item.skill}
            percentage={item.percentage}
          />
        );
      })}
    </div>
  );
};

export default Parent;
