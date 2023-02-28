import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

const SideBar = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <div style={{ display: "flex", height: "100%" }}> */}
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: disabled ? "#f5d9ff" : "#d359ff",
                  backgroundColor: active ? "white" : undefined,
                };
            },
          }}
          style={{ position: "fixed" }}
        >
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        {/* <button onClick={() => collapseSidebar()}>Collapse</button> */}
      </main>
    </div>
    // </div>
  );
};

export default SideBar;
