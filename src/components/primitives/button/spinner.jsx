import React from "react"
import "./spinner.css"
import PropTypes from "prop-types"

export default function Spinner({ big }) {
  const spinnerSize = `spinner ${big ? `spinner-big` : ``}`
  return <div className={spinnerSize}> </div>
}

Spinner.propTypes = {
  big: PropTypes.bool,
}
