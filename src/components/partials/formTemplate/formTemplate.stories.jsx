import React from "react"
import FormTemplate from "./formTemplate"

export default {
  title: "partials/FormTemplate",
  component: FormTemplate,
  argTypes: {
    show: {control: "boolean"},
    isSignUpForm: {control: "boolean"},
  }
}

export function SignUpForm(args) {
  return <FormTemplate {...args} />
}

SignUpForm.args = {
  isSignUpForm: true,
  show: true,
}

export function SignInForm(args) {
  return <FormTemplate {...args} />
}

SignInForm.args = {
  isSignUpForm: false,
  show: true,
}
