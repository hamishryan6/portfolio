import * as React from "react"

type Props = {
    fill: string
    width: string,
    height: string
}

const SunSolid = ({ fill, width, height }: Props) => (
  <svg viewBox="0 0 512 512"  width={width} height={height} fill={fill}>
    <path d="M256 0c-13.3 0-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24zm0 400c-13.3 0-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24v-64c0-13.3-10.7-24-24-24zm232-120c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24h64zm-376-24c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c13.3 0 24-10.7 24-24zm325-147.1c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-45.3 45.3c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l45.3-45.3zM154.2 357.8c-9.4-9.4-24.6-9.4-33.9 0L75 403.1c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l45.3-45.3c9.4-9.4 9.4-24.6 0-33.9zM403.1 437c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-45.3-45.3c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l45.3 45.3zM154.2 154.2c9.4-9.4 9.4-24.6 0-33.9L108.9 75c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l45.3 45.3c9.4 9.4 24.6 9.4 33.9 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224z" />
  </svg>
)
export default SunSolid