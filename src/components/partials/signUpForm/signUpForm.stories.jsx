import React from "react"
import SignUpForm from "./signUpForm"

export default {
  title: "partials/SignUpForm",
  component: SignUpForm,
  argTypes: {
    show: { control: "boolean" },
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
  show: true,
}
