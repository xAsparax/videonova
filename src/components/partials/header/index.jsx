import React from "react"
import { NavLink } from "react-router-dom"
import "./style.css"

function Header() {
  return (
    <div className="header">
      header:
      <NavLink to="/">home</NavLink>
      <NavLink to="/user/1">1</NavLink>
      <NavLink to="/user/2">2</NavLink>
      <NavLink to="/user/name">name</NavLink>
      <NavLink to="/qwert">qwert</NavLink>
    </div>
  )
}

export default Header
