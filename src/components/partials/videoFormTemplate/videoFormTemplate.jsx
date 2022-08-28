import React, { useState } from "react"
import "./videoFormTemplate.css"
import AddContentForm from "../addContentForm/addContentForm"
import Image from "../../primitives/image/image"
import closePic from "../../../assets/icons/close pic.png"
import Button from "../../primitives/button/button"
import Modal from "../modal/modal"
import PropTypes from "prop-types"
import AddVideoBlock from "../addVideoBlock/addVideoBlock"

export default function VideoFormTemplate({show, onClose, onSubmit, isVideoForm, isLoading, children}) {

  return (
    <Modal show={show}>
      <div className="videoFormTemplate">
        <div className="closeWindowPic" onClick={onClose}>
          <Image src={closePic} fit="contain"/>
        </div>
        <div className="videoFormTemplate_content">
          {
            isVideoForm ? <AddContentForm /> : <AddVideoBlock />
          }
        </div>
        <div className="videoFormTemplate_submit">
          <Button label="Cancel" variant="transparent" onClick={onClose}/>
          <Button label="Submit" variant="prime" onClick={onSubmit}/>
        </div>
      </div>
    </Modal>
  )
}

VideoFormTemplate.propTypes={
  show: PropTypes.bool,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  isVideoForm: PropTypes.bool
}
