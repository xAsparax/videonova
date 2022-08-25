import React from "react"
import Layout from "../../layout"
import Heading from "../../components/primitives/heading/heading"
import "./notFound.css"
import Button from "../../components/primitives/button/button"
import {NavLink} from "react-router-dom"

function NotFoundPage() {
  return <Layout>
    <div className="notFound">
      <div className="notFound_message">
        <Heading weight="1">
          404 - not found!
        </Heading>
      </div>
      <div className="notFound_button">
        <span> Go to </span>
        <NavLink to="/">
          <Button onClick="/" variant="prime">Homepage</Button>
        </NavLink>
      </div>
    </div>
  </Layout>
}

export default NotFoundPage
