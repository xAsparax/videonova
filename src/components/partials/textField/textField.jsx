import React from "react"
import "./textField.css"
import PropTypes from "prop-types";
import Heading from "../../primitives/heading/heading";

export default function TextField({id, title, placeholder, inputValue }) {

  return (
    <div className="textField">
      <div className="textField__title">
        <Heading weight="3">{title}</Heading>
      </div>
      <textarea id={id} className="textField__form" rows="30" placeholder={placeholder}>{inputValue}</textarea>
    </div>
  )
}

TextField.propTypes = {
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
}

TextField.defaultProps = {
  title: undefined,
  placeholder: undefined,
  inputValue: undefined,
}
