import React from "react"
import "./button.css"
import PropTypes from "prop-types"
import isInternalLink from "is-internal-link"
import { Link } from "react-router-dom"


export default function Button({ label, onClick, variant, disabled}) {
  const buttonDisabled = disabled ? `button_disabled` : ``
  const className = `button button_${variant} ${buttonDisabled}`
  let LinkVariable


  LinkVariable = () => (isInternalLink(onClick)) ?
    <Link className={className} to={onClick}>{label}</Link> :
    <a href={onClick} className={className}>{label}</a>
  return (
    <LinkVariable/>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["prime", "transparent"]).isRequired,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  label: undefined,
  onClick: undefined,
  variant: "prime",
  disabled: false
}
