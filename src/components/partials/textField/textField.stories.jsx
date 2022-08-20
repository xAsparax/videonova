import React from "react"
import TextField from "./textField.jsx"

export default {
  title: "partials/textField",
  component: TextField,
  argTypes: {
    title: { control: "text" },
    placeholder: { control: "text" },
  },
}

export function Primary(args) {
  return <TextField {...args} />
}

Primary.args = {
  title: "Description",
  placeholder: "Type description...",
}
