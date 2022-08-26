import React from "react"
import "./spinner.css"
import PropTypes from "prop-types"

export default function Spinner(big) {
  const className = `spinner ${ big ? `spinner_big` : ``}`
  return <div className={className}> </div>
}

Spinner.propTypes = {
  big: PropTypes.bool,
}
