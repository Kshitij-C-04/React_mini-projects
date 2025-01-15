import React from "react";
import "./Display.css";

const Display = ({ input }) => {
  return (
    <div className="display">
      {input || "0"}
    </div>
  );
};

export default Display;
