import React from "react"
import Heading from "../../primitives/heading/heading"
import InputField from "../inputField/inputField"
import Button from "../../primitives/button/button"
import "./signUpForm.css"
import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import Image from "../../primitives/image/image"
import closePic from "../../../assets/icons/close pic.png"

export default function SignUpForm({onClick}) {

  return (
    <div className="signUpForm">
      <div className="closeWindowPic">
        <Image src={closePic} fit="contain"/>
      </div>
      <div className="signUpForm__heading">
        <Heading weight="1" color="black">Sign <mark className="red">Up</mark></Heading>
      </div>

      <InputField title="Name" placeholder="Type name..."></InputField>
      <InputField title="Password" placeholder="Type password..."></InputField>
      <InputField title="Repeat Password" placeholder="Repeat password..."></InputField>

      <div className="signUpForm__buttonBlock">
        <Button label="Sign Up" variant="prime" onClick={onClick}></Button>
      </div>

      <div className="signUpForm__notification">
        Already have an account?  <Link className="link-style" to="/">Sign In</Link>
      </div>

    </div>
  )
}

SignUpForm.propTypes={
  onclick: PropTypes.string
}
