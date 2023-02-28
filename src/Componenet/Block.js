import React from "react";
import handleViewport from "react-in-viewport";

const Block  = (props: { inViewport: boolean }) {
    const { inViewport, forwardedRef } = props;
    const color = inViewport ? '#217ac0' : '#ff9800';
    const text = inViewport ? 'In viewport' : 'Not in viewport';
    return (
      <div className="viewport-block" ref={forwardedRef}>
        <h3>{ text }</h3>
        <div style={{ width: '400px', height: '300px', background: color }} />
      </div>
    );
  
};

export default Block;
