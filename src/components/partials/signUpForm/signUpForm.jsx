import React from "react"
import Heading from "../../primitives/heading/heading"
import InputField from "../inputField/inputField"
import Button from "../../primitives/button/button"
import "./signUpForm.css"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import Image from "../../primitives/image/image"
import closePic from "../../../assets/icons/close pic.png"
import Modal from "../modal/modal"

export default function SignUpForm({show, onSubmit, onClose}) {
  return (
    <Modal show={show}>

      <div className="signUpForm">
        <div className="closeWindowPic" onClick={onClose}>
          <Image src={closePic} fit="contain"/>
        </div>

        <div className="signUpForm__heading">
          <Heading weight="1" color="black">Sign <mark className="red">Up</mark></Heading>
        </div>

        <InputField title="Name" placeholder="Type name..." />
        <InputField title="Password" placeholder="Type password..." password="true"/>
        <InputField title="Repeat Password" placeholder="Repeat password..." password="true" />

        <div className="signUpForm__buttonBlock">
          <Button variant="prime" onClick={onSubmit}>Sign Up</Button>
        </div>

        <div className="signUpForm__notification">
          Already have an account?  <Link className="link-style" to="/">Sign In</Link>
        </div>
      </div>

    </Modal>
  )
}

SignUpForm.propTypes={
  show: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.oneOf([PropTypes.func, PropTypes.string]),
}
