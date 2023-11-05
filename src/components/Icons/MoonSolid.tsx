import * as React from "react"

type Props = {
    fill: string,
    width: string,
    height: string
}

const MoonSolid = ({ fill, width, height }: Props) => (
  <svg viewBox="0 0 512 512" width={width} height={height} fill={fill}>
    <path d="M282.7 63.8c-106 0-191.8 86.1-191.8 192.2s85.8 192.2 191.8 192.2c52 0 99.1-20.7 133.6-54.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-8.1 1.4-16.5 2.2-25.1 2.2-80.7 0-146.2-65.6-146.2-146.6 0-54.8 30-102.6 74.4-127.8 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-5.4-.5-10.8-.7-16.3-.7l.1-.1z" />
  </svg>
)
export default MoonSolid
