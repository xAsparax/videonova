import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./header.css"
import UserProfilePreview from "../userProfilePreview/userProfilePreview"
import avatar from "../../../assets/avatars/anna-may-avatar.jpg"
import logo from "../../../assets/logo/logo-blue.png"
import Image from "../../primitives/image/image"
import Button from "../../primitives/button/button"
import PropTypes from "prop-types"
import SignFormTemplate from "../signFormTemplate/signFormTemplate"

function Header({isAuthorized}) {
  const [show, setShow] = useState(false)

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
          <UserProfilePreview image={avatar} name="Anna May" small={true}/> :
          <Button variant="transparent" label="Sign Up" onClick={() => setShow(true) } />
        }
      </div>
        <SignFormTemplate isSignUpForm="true" onClose={() => setShow(false)} show={show} />
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
