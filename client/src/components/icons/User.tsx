import * as React from "react"
import { SVGProps } from "react"

const User = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path opacity={0.15} d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill={props.color} />
    <path
      d="m23 9-3.2 3.2-1.8-1.8M8 15h8a4 4 0 0 1 4 4v2H4v-2a4 4 0 0 1 4-4Zm8-8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default User