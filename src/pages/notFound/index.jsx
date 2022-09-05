import React from "react"
import Layout from "../../layout"
import Heading from "../../components/primitives/heading/heading"
import "./notFound.css"
import Button from "../../components/primitives/button/button"

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
        <Button onClick="/" label="Homepage" variant="prime"/>
      </div>
    </div>
  </Layout>
}

export default NotFoundPage
