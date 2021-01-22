import React from 'react'
import { IconProps } from '../Icon'

const MoonIcon: React.FC<IconProps> = ({ size = 20 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#989898"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path fill="#989898" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  )
}

export default MoonIcon
