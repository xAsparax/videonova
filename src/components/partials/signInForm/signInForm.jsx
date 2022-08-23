import React from "react"
import Heading from "../../primitives/heading/heading"
import InputField from "../inputField/inputField"
import Button from "../../primitives/button/button"
import "./signInForm.css"
import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import Image from "../../primitives/image/image"
import closePic from "../../../assets/icons/close pic.png"

export default function SignInForm({onClick, error}) {

  return (
    <div className="signInForm">

      <div className="closeWindowPic">
        <Image src={closePic} fit="contain"/>
      </div>

      <div className="signInForm__heading">
        <Heading weight="1" color="black">Sign <mark className="red">In</mark></Heading>
      </div>

      { error ? <div className="signInForm__errMessage"> Your Password is incorrect. Please, try again </div> : ``}

      <InputField title="Name" placeholder="Type name..."/>

      { error ?
        <InputField title="Password" placeholder="Type password..." error="true" helpLabel="Forgot Password?" helpLink="/"/> :
        <InputField title="Password" placeholder="Type password..."/>
      }

      <div className="signInForm__buttonBlock">
        <Button variant="prime" onClick={onClick}>Sign In</Button>
      </div>

      <div className="signInForm__notification">
        Don't have an account?  <Link className="link-style" to="/">Sign Up</Link>
      </div>

    </div>
  )
}

SignInForm.propTypes={
  onclick: PropTypes.string,
  error: PropTypes.bool
}
