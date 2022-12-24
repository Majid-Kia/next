import React from "react";

const ArrowDown = ({ color }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 8.75781L14.59 7.34781L9 12.9278V0.757813L7 0.757813V12.9278L1.41 7.34781L0 8.75781L8 16.7578L16 8.75781Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDown;
