import React from "react"
import "./inputField.css"
import PropTypes from "prop-types";
import Heading from "../../primitives/heading/heading";
import {Link} from "react-router-dom";

export default function InputField({title, placeholder, inputValue, isHidden, error, helpLabel, helpLink }) {
  const className = `inputField__form ${error ? `form_error` : ``}`

  return (
    <div className="inputField">
      <div className="inputField__title">
        <Heading weight="3">{title}</Heading>
        { error ? <Link className="link-style" to={helpLink}>{helpLabel}</Link> : ``}
      </div>
      <input className={className} type="text" value={inputValue} placeholder={placeholder}/>
    </div>
  )
}

InputField.propTypes = {
  /**
   * Title text
   */
  title: PropTypes.string,
  /**
   * Placeholder text
   */
  placeholder: PropTypes.string,
  /**
   *Information entered by the user
   */
  inputValue: PropTypes.string,
  /**
   * Hidden icon
   */
  isHidden: PropTypes.bool,
  /**
   * Error message renders
   */
  error: PropTypes.bool,
  /**
   * Help message with link
   */
  helpLabel: PropTypes.string,
  /**
   * Link to help source
   */
  helpLink: PropTypes.string
}

InputField.defaultProps = {
  title: undefined,
  placeholder: undefined,
  inputValue: undefined,
  isHidden: false,
  error:false,
  helpLabel: undefined,
  helpLink: undefined
}
