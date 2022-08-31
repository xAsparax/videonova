import React, {useState} from "react"
import { useSelector } from "react-redux"
import PropTypes from "prop-types"
import Header from "../components/partials/header/header"
import Footer from "../components/partials/footer/footer"
import "./style.css"
import { selectAuthorized, selectUserId, selectUserName, selectUserImage } from "../store/modules/user"

function Layout({ children }) {

  const isAuthorized = useSelector(selectAuthorized)

  return (
    <div className="layout">
      <div className="layout__header">
        <Header isAuthorized={isAuthorized} />
      </div>
      <div className="layout__content">{children}</div>
      <div className="siteContent__footer">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
Layout.propTypes = {
  /**
   *
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
