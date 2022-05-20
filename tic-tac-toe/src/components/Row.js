import React from "react";

const Row = ({ value, onClick }) => {
  const style = value ? `row ${value}` : `row`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Row;
