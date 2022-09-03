import React from "react"
import Heading from "../../primitives/heading/heading"
import InputField from "../inputField/inputField"
import "./signUpForm.css"
import PropTypes from "prop-types"

export default function SignUpForm({error}) {
  return (
      <div className="signUpForm">
        <div className="signUpForm__heading">
          <Heading weight="1" color="black">Sign<mark className="red">Up</mark></Heading>
        </div>
        {error && <div className="signUpForm__errMessage">{error}</div>}
        <InputField id="sign-up-name" title="Name" placeholder="Type name..." />
        <InputField id="sign-up-pwd" title="Password" placeholder="Type password..." password="true"/>
        <InputField id="sign-up-rep-pwd" title="Repeat Password" placeholder="Repeat password..." password="true" />
      </div>
  )
}

export function getSignUpData() {
  return {
    username: document.getElementById("sign-up-name").getAttribute("value"),
    password: document.getElementById("sign-up-pwd").getAttribute("value"),
    repeatPassword: document.getElementById("sign-up-rep-pwd").getAttribute("value")
  }
}
