import React, { useState } from "react"
import "./signFormTemplate.css"
import SignInForm from "../signInForm/signInForm"
import SignUpForm from "../signUpForm/signUpForm"
import Image from "../../primitives/image/image"
import closePic from "../../../assets/icons/close pic.png"
import Button from "../../primitives/button/button"
import Modal from "../modal/modal"
import PropTypes from "prop-types"

export default function SignFormTemplate({ show, onSubmit, onClose, isSignUpForm }) {

  const [isSignUp, setIsSignUp] = useState(isSignUpForm)

  return (
    <Modal show={show}>
      <div className="formTemplate">
        <div className="closeWindowPic" onClick={onClose}>
          <Image src={closePic} fit="contain"/>
        </div>
        <div className="formTemplate_content">
          {
            isSignUp ? <SignUpForm /> : <SignInForm />
          }
        </div>
        <div className="formTemplate_submit">
          <div className="formTemplate__buttonBlock">
            <Button variant="prime" onClick={onSubmit} label={isSignUp ? "Sign Up" : "Sign In"}/>
          </div>
          <div className="formTemplate__notification">
            {isSignUp ? <span>Already have an account?</span> : <span>Don't have an account?</span>}
              <div className="link-style" onClick={() => setIsSignUp(!isSignUp)}> {isSignUp ? "Sign In" : "Sign Up"} </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

SignFormTemplate.propTypes={
  show: PropTypes.bool,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  isSignUpForm: PropTypes.bool
}
