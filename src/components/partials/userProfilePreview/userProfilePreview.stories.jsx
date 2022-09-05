/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import UserProfilePreview from "./userProfilePreview"
import avatar from "../../../assets/avatars/anna-may-avatar.jpg"

export default {
  title: "partials/UserProfilePreview",
  component: UserProfilePreview,
  argTypes: {
    name: { control: "text" },
    image: { control: "text" },
    small: { boolean: { action: false } },
  },
}

export function Primary(args) {
  return <UserProfilePreview {...args} />
}

Primary.args = {
  name: "Anna May",
  image: avatar,
  small: false,
}

export function Small(args) {
  return <UserProfilePreview {...args} />
}

Small.args = {
  ...Primary.args,
  small: true,
}
