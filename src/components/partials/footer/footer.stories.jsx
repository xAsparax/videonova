import React from "react"
import Footer from "./footer"

export default {
  title: "partials/footer",
  component: Footer,
  argTypes: {
    text: { control: "text" },
  },
}

export function Primary(args) {
  return <Footer {...args} />
}

Primary.args = {
  text: "All Rights Reserved 2022",
}
