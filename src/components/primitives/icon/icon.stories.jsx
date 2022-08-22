import React from "react"
import telegramIcon from "../../../assets/social/telegram.png"
import discordIcon from "../../../assets/social/discord.png"
import twitterIcon from "../../../assets/social/twitter.png"
import SocialIcon from "./icon"

export default {
  title: "primitives/icon",
  component: SocialIcon,
  argTypes: {
    name: { control: "text" },
  },
}

export function Telegram(args) {
  return (
    <div style={{ width: "30px", height: "30px" }}>
      <SocialIcon {...args} />
    </div>
  )
}

Telegram.args = {
  name: telegramIcon,
}

export function Discord(args) {
  return (
    <div style={{ width: "30px", height: "30px" }}>
      <SocialIcon {...args} />
    </div>
  )
}

Discord.args = {
  name: discordIcon,
}

export function Twitter(args) {
  return (
    <div style={{ width: "30px", height: "30px" }}>
      <SocialIcon {...args} />
    </div>
  )
}

Twitter.args = {
  name: twitterIcon,
}
