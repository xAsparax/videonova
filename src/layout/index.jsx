import React from "react"
import PropTypes from "prop-types"
import Header from "../components/partials/header/header"
import Footer from "../components/partials/footer/footer"
import "./style.css"

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__content">{children}</div>
      <div className="siteContent__footer">
        <Footer text="All Rights Reserved 2022"/>
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
