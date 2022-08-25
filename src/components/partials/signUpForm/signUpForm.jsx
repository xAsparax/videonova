import React from "react"
import Heading from "../../primitives/heading/heading"
import InputField from "../inputField/inputField"
import "./signUpForm.css"
import PropTypes from "prop-types"

export default function SignUpForm() {
  return (
      <div className="signUpForm">
        <div className="signUpForm__heading">
          <Heading weight="1" color="black">Sign <mark className="red">Up</mark></Heading>
        </div>
        <InputField title="Name" placeholder="Type name..." />
        <InputField title="Password" placeholder="Type password..." password="true"/>
        <InputField title="Repeat Password" placeholder="Repeat password..." password="true" />
      </div>
  )
}
