import React, {useEffect, useState} from "react"
import { NavLink } from "react-router-dom"
import "./header.css"
import UserProfilePreview from "../userProfilePreview/userProfilePreview"
import logo from "../../../assets/logo/logo-blue.png"
import Image from "../../primitives/image/image"
import Button from "../../primitives/button/button"
import PropTypes from "prop-types"
import SignFormTemplate, {showForm, hideForm}  from "../signFormTemplate/signFormTemplate"
import useHeaderInfo from "./useHeaderInfo"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"

function Header() {
  const { isAuthorized, userId, userImage, userName, userError, show, isSignUp } = useHeaderInfo()
  const [authorizedState, setAuthorizedState] = useState(isAuthorized)

  let navigate = useNavigate()
  useEffect(() => {
    if ((authorizedState !== isAuthorized) && isAuthorized) {
      setAuthorizedState(authorizedState)
      navigate(`/user/${userId}`)
    }
  }, [isAuthorized])
  const dispatch = useDispatch()
  const onSubmit = () => {
    dispatch({type: "user/authorize"})
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
          <Button variant="transparent" label="Sign Up" onClick={() => dispatch(showForm(true)) } />
        }
      </div>
        <SignFormTemplate error={userError} isSignUpForm={isSignUp} onSubmit={onSubmit} onClose={() => dispatch(hideForm())} show={show} />
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
