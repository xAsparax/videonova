import React from "react"
import SignUpForm from "./signUpForm"

export default {
  title: "partials/SignUpForm",
  component: SignUpForm,
  argTypes: {
    onClick: { control: "text" },
  },
}

export function Primary(args) {
  return (
    <div style={{ width: "644px", height: "861px" }}>
      <SignUpForm {...args} />
    </div>
  )
}

Primary.args = {
  onClick: "youtube.com",
}
