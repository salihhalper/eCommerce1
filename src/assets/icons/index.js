import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchIcon(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M24.953 21.98a13.812 13.812 0 10-2.969 2.971h-.002c.064.085.132.166.208.245l8.181 8.181a2.125 2.125 0 103.007-3.005l-8.18-8.18a2.138 2.138 0 00-.245-.213v.002zm.548-8.168a11.686 11.686 0 11-23.373.001 11.686 11.686 0 0123.373 0z"
        fill="#23A6F0"
      />
    </Svg>
  )
}

export {
  SearchIcon
} 
