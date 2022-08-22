import React from "react"
import AddContentForm from "./addContentForm"

export default {
  title: "partials/AddContentForm",
  component: AddContentForm,
  argTypes: {
    onClick: { control: "text" },
  },
}

export function Primary(args) {
  return (
    <div style={{ width: "644px", height: "861px" }}>
      {" "}
      <AddContentForm {...args} />{" "}
    </div>
  )
}

Primary.args = {
  onClick: "youtube.com",
}
