import React, { useState } from "react"
import "./videoFormTemplate.css"
import AddContentForm from "../addContentForm/addContentForm"
import Image from "../../primitives/image/image"
import closePic from "../../../assets/icons/close pic.png"
import Button from "../../primitives/button/button"
import Modal from "../modal/modal"
import PropTypes from "prop-types"

export default function VideoFormTemplate({show, onClose, onSubmit, }) {

  return (
    <Modal show={show}>
      <div className="videoFormTemplate">
        <div className="closeWindowPic" onClick={onClose}>
          <Image src={closePic} fit="contain"/>
        </div>
        <div className="videoFormTemplate_content">
          <AddContentForm />
        </div>
        <div className="videoFormTemplate_submit">
          <Button label="Cancel" variant="transparent"/>
          <Button label="Submit" variant="prime" onClick={onSubmit}/>
        </div>
      </div>
    </Modal>
  )
}
