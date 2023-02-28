import React, { useState, useEffect } from "react";
import { Vortex } from "react-loader-spinner";

const Spin = () => {
  return (
    <div>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
};

export default Spin;
