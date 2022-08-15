import React from "react"
import Layout from "../../layout"

function HomePage() {
  const headingH1 = {
    fontFamily: "Chillax, sans-serif",
    fontWeight: 600,
    fontSize: "24px",
  }

  return (
    <Layout>
      <div style={headingH1}>VideoNova home page</div>
    </Layout>
  )
}
export default HomePage
