import React from "react"
import { createRoot } from "react-dom/client"
import App from "./app"
import StyleLoader from "./styleLoader"
import reportWebVitals from "./reportWebVitals"

const app = createRoot(document.getElementById("root"))
app.render(
  <React.StrictMode>
    <StyleLoader />
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
