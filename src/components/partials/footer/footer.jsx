import React from "react"
import "./footer.css"
import { useSelector } from "react-redux"
import { selectFooterText, selectSocial } from "../../../store/modules/siteInfo"
import logoWhite from "../../../assets/logo/logo-white.png"
import SocialIcon from "../../primitives/icon/icon"
import Image from "../../primitives/image/image"
import PropTypes from "prop-types"

export default function Footer() {

  const text = useSelector(selectFooterText)
  const social = useSelector(selectSocial)

  return (
    <div className="footer">
      <div className="footer_logo">
        <Image src={logoWhite} fit="center"/>
      </div>

      <div className="footer_text">
        <p>{text}</p>
      </div>

      <div className="footer_social">
        <div className="icons">
          {social.map((value) => (
            <a href={value.to}>
            <SocialIcon name={value.name} />
            </a> ))}
        </div>
      </div>

    </div>
  )
}

Footer.propTypes = {
  text: PropTypes.string,
 }

Footer.defaultProps = {
  text: undefined,
 }
