/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import SignFormTemplate from "./signFormTemplate"

export default {
  title: "partials/SignFormTemplate",
  component: SignFormTemplate,
  argTypes: {
    show: { control: "boolean" },
    isSignUpForm: { control: "boolean" },
  },
}

export function SignUpForm(args) {
  return <SignFormTemplate {...args} />
}

SignUpForm.args = {
  isSignUpForm: true,
  show: true,
}

export function SignInForm(args) {
  return <SignFormTemplate {...args} />
}

SignInForm.args = {
  isSignUpForm: false,
  show: true,
}
