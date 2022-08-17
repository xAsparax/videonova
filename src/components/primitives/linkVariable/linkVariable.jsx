import React from "react"
// import isInternalLink from "is-internal-link"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import IsInternalLink from "../isInternalLink/isInternalLink";

function LinkVariable ({ children, onClick, ...props }) {
  if (!onClick) {
    return <span {...props}>{children}</span>
  }
  if (IsInternalLink(onClick)) {
    return (
      <Link to={onClick} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <a href={onClick} {...props}>
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

  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

LinkVariable.defaultProps = {
  onClick: undefined,
}
