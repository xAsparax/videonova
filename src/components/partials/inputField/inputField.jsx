import React from "react"
import { useState } from "react"
import "./inputField.css"
import PropTypes from "prop-types"
import Heading from "../../primitives/heading/heading"
import {Link} from "react-router-dom"
import Image from "../../primitives/image/image"
import eye from "../../../assets/icons/eye.png"
import eyeClosed from "../../../assets/icons/eye-closed.png"

export default function InputField({title, placeholder, error, password, helpLabel, helpLink }) {
  const className = `inputField__form ${error ? `form_error` : ``}`
  const [passwordShown, setPasswordShown] = useState(false)
  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }
  const inputType = passwordShown ? "text" : "password"
  const [value, setValue] = useState("")

  return (
    <div className="inputField">
      <div className="inputField__title">
        <Heading weight="3">{title}</Heading>
        { error ? <Link className="link-style" to={helpLink}>{helpLabel}</Link> : ``}
      </div>
      <div className="password_form">
        <input className={className} type={password ? inputType : "text"} value={value} onChange={(e)=>{setValue(e.target.value)}} placeholder={placeholder}/>
        { password ?
          <div className="eye-icon" onClick={togglePassword}>
            <Image src={passwordShown ? eyeClosed : eye} fit="contain"/>
          </div> : ``
        }
      </div>
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
  value: PropTypes.string,
  /**
   * Sets input form in password mode. If not set generates text type of input
   */
  password: PropTypes.bool,
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
  helpLink: PropTypes.string,
}

InputField.defaultProps = {
  title: undefined,
  placeholder: undefined,
  password: false,
  error:false,
  helpLabel: "Need help?",
  helpLink: "/"
}
