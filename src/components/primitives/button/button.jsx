import React from "react"
import "./button.css"
import PropTypes from "prop-types"
import LinkVariable from "../linkVariable/linkVariable";

export default function Button({ label, onClick, variant, disabled, children, ...props}) {
  const buttonDisabled = disabled ? `button_disabled` : ``
  const className = `button button_${variant} ${buttonDisabled}`

  return (
    <LinkVariable
      className={className}
      onClick={onClick}
      {...props}
    >
      {children || label}
    </LinkVariable>
  )
}

Button.propTypes = {
  /**
   * Button title
   */
  label: PropTypes.string,
  /** Can be function or text. If text is provided, will render button as link component.
   * Internal links will be rendered with Link component.
   */
  onClick: PropTypes.oneOf([PropTypes.func, PropTypes.string]),
  /**
   *Renders one of the button styles: "prime" or "transparent"
   * default variant is `prime`
   */
  variant: PropTypes.oneOf(["prime", "transparent"]).isRequired,
  /**
   * Disables all button interactions
   */
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  label: undefined,
  onClick: undefined,
  variant: "prime",
  disabled: false,
  children: undefined,
}
