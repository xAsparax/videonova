import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./header.css"
import UserProfilePreview from "../userProfilePreview/userProfilePreview"
import logo from "../../../assets/logo/logo-blue.png"
import Image from "../../primitives/image/image"
import Button from "../../primitives/button/button"
import PropTypes from "prop-types"
import SignFormTemplate from "../signFormTemplate/signFormTemplate"
import useHeaderInfo from "./useHeaderInfo"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {getSignUpData} from "../signUpForm/signUpForm"

function Header() {
  const { isAuthorized, userImage, userName } = useHeaderInfo()
  const [show, setShow] = useState(false)
  const [formError, setFormError] = useState('')

  let navigate = useNavigate()
  const dispatch = useDispatch()
  const signUp = async () => {
    try {
      const formData = getSignUpData()
      if (!formData.password || !formData.repeatPassword || !formData.username) {
        setFormError("All fields are mandatory.")
        return
      }
      if (formData.password !== formData.repeatPassword) {
        setFormError("Password and password confirmation doesn't match.")
        return
      }
      dispatch({type: "siteInfo/showLoading"})
      const response = await fetch("https://wonderful-app-lmk4d.cloud.serverless.com/register",
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })

      const user_info = await response.json()
      dispatch({type: "siteInfo/hideLoading"})
      if (user_info.type === "exists") {
        setFormError("User already exists")
      } else {
        dispatch({type: 'user/login', payload: user_info})
        dispatch({type: 'users/add', payload: [user_info]})
        navigate(`/user/${user_info.id}`)
      }
    } catch (e) {
      alert('Exception: ' + e)
    }
  }

  // Response:{
  //   "slug":"wild_bill",
  //   "userPic":"https://i.pravatar.cc/150?u=wild_bill",
  //   "id":"73078efd34c7663dce0a15fcbd9efd14",
  //   "userName":"Wild Bill",
  //   "authToken":"6636a62a208d3f8652f394fd24010579"
  // }

  return (
    <div className="header">
      <div className="header_logo">
        <Image src={logo} fit="contain"/>
      </div>
      <div className="header_nav">
        header:
        <NavLink to="/">home</NavLink>
        <NavLink to="/user/1">1</NavLink>
        <NavLink to="/user/2">2</NavLink>
        <NavLink to="/user/name">name</NavLink>
        <NavLink to="/qwert">qwert</NavLink>
      </div>
      <div className="header_authorize">
        { isAuthorized ?
          <UserProfilePreview image={userImage} name={userName} small={true}/> :
          <Button variant="transparent" label="Sign Up" onClick={() => setShow(true) } />
        }
      </div>
        <SignFormTemplate error={formError} isSignUpForm="true" onSubmit={signUp} onClose={() => setShow(false)} show={show} />
    </div>
  )
}

export default Header

Header.propTypes = {
  isAuthorized: PropTypes.bool,
}

Header.defaultProps = {
  isAuthorized: false
}
