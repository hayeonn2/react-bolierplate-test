import React from 'react';

function SelectArrow({ ...props }) {
  return (
    <svg
      {...props}
      width="9"
      height="12"
      viewBox="0 0 9 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.85151 11.6945C8.11503 11.3519 8.05094 10.8606 7.70836 10.597L1.73219 6L7.70836 1.40295C8.05094 1.13942 8.11503 0.648069 7.85151 0.305481C7.58798 -0.0371065 7.09662 -0.101196 6.75403 0.162333L0.50907 4.96615L0.986232 5.58646L0.509069 4.96615C-0.16969 5.48827 -0.169689 6.51173 0.509069 7.03385L0.986232 6.41354L0.50907 7.03385L6.75403 11.8377C7.09662 12.1012 7.58798 12.0371 7.85151 11.6945Z"
        fill="#808080"
      />
    </svg>
  );
}

export default SelectArrow;