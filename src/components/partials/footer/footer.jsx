import React from "react"
import "./footer.css"
import logoWhite from "../../../assets/logo/logo-white.png"
import PropTypes from "prop-types"
import telegram from "../../../assets/social/telegram.png"
import discord from "../../../assets/social/discord.png"
import twitter from "../../../assets/social/twitter.png"
import SocialIcon from "../../primitives/icon/icon"
import Image from "../../primitives/image/image"

export default function Footer({text}) {
  const social = [
    { name: telegram, to: "https://web.telegram.org" },
    { name: discord, to: "https://discord.com/" },
    { name: twitter, to: "https://twitter.com" },
    ]
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
