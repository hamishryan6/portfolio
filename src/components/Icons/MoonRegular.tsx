import * as React from "react"

type Props = {
    fill: string,
    width: string,
    height: string
}

const MoonRegular = ({ fill, width, height }: Props) => (
  <svg viewBox="0 0 512 512" width={width} height={height} fill={fill}>
    <path d="M124.3 256c0-70 50-128.3 116.2-141.3-22.6 27.6-36.2 62.8-36.2 101.3 0 83.2 63.5 151.6 144.7 159.3-23 15.6-50.8 24.7-80.7 24.7-79.5 0-144-64.5-144-144zm144-192c-106 0-192 86-192 192s86 192 192 192c69.4 0 130.2-36.9 163.9-92 5.3-8.7 4.6-19.9-2-27.8s-17.3-10.8-26.9-7.2c-12.1 4.5-25.3 7-39.1 7-61.9 0-112-50.1-112-112 0-45 26.6-83.9 65-101.7 9.3-4.3 14.8-14 13.8-24.2s-8.4-18.6-18.3-20.9c-14.3-3.4-29.2-5.2-44.4-5.2z" />
  </svg>
)
export default MoonRegular
