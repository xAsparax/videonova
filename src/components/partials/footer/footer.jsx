import React from "react"
import "./footer.css"
import Image from "../../primitives/image/image";
import logoWhite from "../../../assets/logo/logo-white.png"
import PropTypes from "prop-types"
import telegramIcon from "../../../assets/social/telegram.png"

export default function Footer({text, social}) {
  return (
    <div className="footer">
      <div className="footer_logo">
        <Image src={logoWhite} fit="center"/>
      </div>
      <div className="footer_text">
        <p>{text}</p>

      </div>
      <div className="footer_social">
        <a href={social}> <Image src={telegramIcon} fit="contain"> </Image></a>
      </div>
    </div>
  )
}

Footer.propTypes = {
  text: PropTypes.string,
  social: PropTypes.string
 }

Footer.defaultProps = {
  text: undefined,
  social: undefined
 }
