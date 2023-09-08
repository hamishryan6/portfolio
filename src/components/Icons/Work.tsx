import * as React from "react"

type Props = {
    color: string,
    width: string,
    height: string
}

const Work = ({ color, width, height }: Props) => (
  <svg viewBox="0 0 512 512" style={{ fill: color, width: width, height: height }}>
    <path d="M176 56v40h160V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V56c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v40h64c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64zM48 304v112c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V304H320v16c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-16H48zm144-48h272v-96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v96h144z" />
  </svg>
)

export default Work
