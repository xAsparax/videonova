import React from "react"
import Heading from "../../primitives/heading/heading"
import InputField from "../inputField/inputField"
import "./signInForm.css"
import PropTypes from "prop-types"

export default function SignInForm({ error }) {

  return (
    <div className="signInForm">
      <div className="signInForm__heading">
        <Heading weight="1" color="black">Sign <mark className="red">In</mark></Heading>
      </div>
      {error && <div className="signInForm__errMessage">{error}</div>}
      <InputField title="Name" placeholder="Type name..."/>
      { error ?
        <InputField title="Password" placeholder="Type password..." password="true" error="true" helpLabel="Forgot Password?" helpLink="/"/> :
        <InputField title="Password" placeholder="Type password..." password="true"/>
      }
    </div>
  )
}

SignInForm.propTypes={
  error: PropTypes.bool,
}
