import React from "react"
import Heading from "../../primitives/heading/heading"
import InputField from "../inputField/inputField"
import TextField from "../textField/textField"
import "./addContentForm.css"
import PropTypes from "prop-types"

export default function AddContentForm({onClick}) {

  return (
    <div className="addContentForm">
      <div className="addContentForm__heading">
        <Heading weight="1" color="black">Add <mark className="red">new</mark> video</Heading>
      </div>
      <InputField title="Youtube link" placeholder="Past link..."/>
      <InputField title="Name of video" placeholder="Type name..."/>
      <TextField title="Description" placeholder="Type description..."/>
    </div>
  )
}

AddContentForm.propTypes={
  onclick: PropTypes.string
}
