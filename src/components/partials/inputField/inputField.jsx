import React from "react"
import "./inputField.css"
import PropTypes from "prop-types";
import Heading from "../../primitives/heading/heading";

export default function InputField({title, placeholder, inputValue, isHidden }) {

  return (
    <div className="inputField">
      <Heading className="inputField__title" weight="3">{title}</Heading>
      <input className="inputField__form" type="text" value={inputValue} placeholder={placeholder}/>
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
}

InputField.defaultProps = {
  title: undefined,
  placeholder: undefined,
  inputValue: undefined,
  isHidden: false,
}
