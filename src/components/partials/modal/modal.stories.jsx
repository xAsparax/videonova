/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Modal from "./modal"

export default {
  title: "partials/modal",
  component: Modal,
  argTypes: {
    show: { control: "boolean" },
  },
}

export function Primary(args) {
  return (
    <Modal {...args}>
      <div
        style={{ width: "644px", height: "861px", backgroundColor: "#FFFFFF" }}
      />
    </Modal>
  )
}

Primary.args = {
  show: true,
}
