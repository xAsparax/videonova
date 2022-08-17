import React from "react"

export default function IsInternalLink(onClick) {
  const external = /^(https?:\/\/|\/\/)/i
  return !external.test(onClick)
}
