import React from "react";

const ArrowRight = ({ color }) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.53125 0.546875L7.12125 1.95687L12.7013 7.54688H0.53125V9.54688H12.7013L7.12125 15.1369L8.53125 16.5469L16.5312 8.54688L8.53125 0.546875Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowRight;
