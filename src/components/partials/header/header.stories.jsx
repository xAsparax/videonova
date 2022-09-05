/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Header from "./header"

export default {
  title: "partials/header",
  component: Header,
  argTypes: {
    isAuthorized: { boolean: { action: false } },
  },
}

export function UnauthorizedHeader(args) {
  return <Header {...args} />
}

UnauthorizedHeader.args = {
  isAuthorized: false,
}

export function AuthorizedHeader(args) {
  return <Header {...args} />
}

AuthorizedHeader.args = {
  isAuthorized: true,
}
