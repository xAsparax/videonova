import React from "react"
import Heading from "../../primitives/heading/heading"
import InputField from "../inputField/inputField"
import Button from "../../primitives/button/button"
import "./signInForm.css"
import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import Image from "../../primitives/image/image"
import closePic from "../../../assets/icons/close pic.png"
import Modal from "../modal/modal"

export default function SignInForm({show, onSubmit, onClose, error}) {

  return (
    <Modal show={show}>

      <div className="signInForm">

        <div className="closeWindowPic" onClick={onClose}>
          <Image src={closePic} fit="contain"/>
        </div>

        <div className="signInForm__heading">
          <Heading weight="1" color="black">Sign <mark className="red">In</mark></Heading>
        </div>

        { error ? <div className="signInForm__errMessage"> Your Password is incorrect. Please, try again </div> : ``}

        <InputField title="Name" placeholder="Type name..."/>

        { error ?
          <InputField title="Password" placeholder="Type password..." password="true" error="true" helpLabel="Forgot Password?" helpLink="/"/> :
          <InputField title="Password" placeholder="Type password..." password="true"/>
        }

        <div className="signInForm__buttonBlock">
          <Button variant="prime" onClick={onSubmit}>Sign In</Button>
        </div>

        <div className="signInForm__notification">
          Don't have an account?  <Link className="link-style" to="/">Sign Up</Link>
        </div>

      </div>
    </Modal>
  )
}

SignInForm.propTypes={
  show: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.oneOf([PropTypes.func, PropTypes.string]),
  error: PropTypes.bool,
}
