import React from "react";

export const ColorRows = ({ colors: any }) => {
  return (
    <>
      <div>name</div>
      {colors.map((color) => (
        <div key={color}>{color}</div>
      ))}
      <div>rows</div>
    </>
  );
};
