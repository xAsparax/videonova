import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Button({ label, onClick }) {
  return (
    <div>
      <Link to={onClick}>{label}</Link>
    </div>
  )
}

export default Button
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
}
