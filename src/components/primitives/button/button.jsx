import React from "react"
import "./button.css"
import PropTypes from "prop-types"
import LinkVariable from "../linkVariable/linkVariable"
import Spinner from "./spinner"

export default function Button({ label, onClick, variant, disabled, loading, children, ...props}) {

  const buttonDisabled = disabled ? `button_disabled` : ``
  const className = `button button_${variant} ${buttonDisabled} `
  const isSpinning = loading && !disabled

  return (
    <LinkVariable
      className={className}
      action={onClick}
      {...props}
    >
      {children || label}
      { isSpinning &&
        (<Spinner />)}
    </LinkVariable>
  )
}

Button.propTypes = {
  /**
   * Button title
   */
  label: PropTypes.string,
  /**
   * Can be function or text. If text is provided, will render button as link component.
   * Internal links will be rendered with Link component.
   */
  onClick: PropTypes.oneOf([PropTypes.func, PropTypes.string]),
  /**
   *Renders one of the button styles: "prime" or "transparent"
   * default variant is `prime`
   */
  variant: PropTypes.oneOf(["prime", "transparent"]),
  /**
   * Disables all button interactions
   */
  disabled: PropTypes.bool,
  /**
   * Renders button with loading spinner
   */
  loading: PropTypes.bool,
}

Button.defaultProps = {
  label: undefined,
  onClick: undefined,
  variant: "prime",
  disabled: false,
  children: undefined,
  loading: false
}
