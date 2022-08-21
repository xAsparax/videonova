import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import IsInternalLink from "../isInternalLink/isInternalLink"

function LinkVariable ({ children, action, ...props }) {

  if (!action) {
    return <span {...props}>{children}</span>
  }

  if (typeof action === "function") {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <span role="button" tabIndex="0" onClick={action} {...props}>
        {children}
      </span>
    )
  }

  if (IsInternalLink(action) && typeof action === "string") {
    return (
      <Link to={action} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a href={action} {...props}>
      {children}
    </a>
  )
}

export default LinkVariable

LinkVariable.propTypes = {
  /**
   * Content to put inside block.
   * Could be any react node
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  action: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

LinkVariable.defaultProps = {
  action: undefined,
}
