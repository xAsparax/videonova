import React from "react"
import "./footer.css"
import logoWhite from "../../../assets/logo/logo-white.png"
import SocialIcon from "../../primitives/icon/icon"
import Image from "../../primitives/image/image"
import PropTypes from "prop-types"
import useFooterInfo from "./useFooterInfo"

export default function Footer() {

const { text, social} = useFooterInfo()

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
