import React from "react"
import Footer from "./footer.jsx"

export default {
  title: "partials/footer",
  component: Footer,
  argTypes:{
    text: {control: "text"},
    social: {control: "text"}
  }
}

export function Primary(args) {
  return <Footer {...args} />
}

Primary.args = {
  text: "All rights reserved 2022",
  social: "https://web.telegram.org"
}
