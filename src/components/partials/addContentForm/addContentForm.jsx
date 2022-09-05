import React from "react"
import Heading from "../../primitives/heading/heading"
import InputField from "../inputField/inputField"
import TextField from "../textField/textField"
import "./addContentForm.css"

export default function AddContentForm() {

  return (
    <div className="addContentForm">
      <div className="addContentForm__heading">
        <Heading weight="1" color="black">Add <mark className="red">new</mark> video</Heading>
      </div>
      <InputField id="video-link" title="Youtube link" placeholder="Past link..."/>
      <InputField id="video-name" title="Name of video" placeholder="Type name..."/>
      <TextField id="video-description" title="Description" placeholder="Type description..."/>
    </div>
  )
}

export function getVideoFormData() {
  return {
    url: document.getElementById("video-link").getAttribute("value"),
    title: document.getElementById("video-name").getAttribute("value"),
    description: document.getElementById("video-description").value,
  }
}
