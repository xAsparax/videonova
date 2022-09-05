import React from "react"
import "./signFormTemplate.css"
import SignInForm, {getSignInData} from "../signInForm/signInForm"
import SignUpForm, {getSignUpData} from "../signUpForm/signUpForm"
import Image from "../../primitives/image/image"
import closePic from "../../../assets/icons/close pic.png"
import Button from "../../primitives/button/button"
import Modal from "../modal/modal"
import PropTypes from "prop-types"
import {selectLoading} from "../../../store/modules/siteInfo"
import {useDispatch, useSelector} from "react-redux"


export function showForm(isSignUp) {
  return {type: "forms/show", payload: {isSignUp: isSignUp}}
}

export function hideForm() {
  return {type: "forms/hide"}
}

function getPrompt(isSignUp) {
  return isSignUp ? "Already have an account?" : "Don't have an account?"
}

function getLabel(isSignUp) {
  return isSignUp ? "Sign In" : "Sign Up"
}

export default function SignFormTemplate({ show, onSubmit, onClose, isSignUpForm, error }) {
  const loading = useSelector(selectLoading)
  const dispatch = useDispatch()
  const submitHandler = () => {
    dispatch({type: "forms/update", payload: isSignUpForm ? getSignUpData() : getSignInData()})
    onSubmit()
  }

  return (
    <Modal show={show}>
      <div className="formTemplate">
        <div className="closeWindowPic" onClick={onClose}>
          <Image src={closePic} fit="contain"/>
        </div>
        <div className="formTemplate_content">
          {
            isSignUpForm ? <SignUpForm error={error}/> : <SignInForm error={error}/>
          }
        </div>
        <div className="formTemplate_submit">
          <div className="formTemplate__buttonBlock">
            <Button variant="prime" loading={loading} onClick={submitHandler} label={getLabel(!isSignUpForm)}/>
          </div>
          <div className="formTemplate__notification">
            <span>{getPrompt(isSignUpForm)}</span>
            <div className="link-style" onClick={() => dispatch(showForm(!isSignUpForm))}>{getLabel(isSignUpForm)}</div>
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
