import React from "react"
import "./videoFormTemplate.css"
import AddContentForm, {getVideoFormData} from "../addContentForm/addContentForm"
import Image from "../../primitives/image/image"
import closePic from "../../../assets/icons/close pic.png"
import Button from "../../primitives/button/button"
import Modal from "../modal/modal"
import PropTypes from "prop-types"
import AddVideoBlock from "../addVideoBlock/addVideoBlock"
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import {selectError, selectIsVideoForm, selectVideoLoading} from "../../../store/modules/videoForm"

export function showVideoForm() {
  return {type: "videoForm/show"}
}

export function hideVideoForm() {
  return {type: "videoForm/hide"}
}

export default function VideoFormTemplate({show, onClose}) {
  const isVideoForm = useSelector(selectIsVideoForm)
  const loading = useSelector(selectVideoLoading)
  const error = useSelector(selectError)
  const dispatch = useDispatch()
  const submitVideo = () => {
    dispatch({type:"videoForm/update", payload: getVideoFormData()})
  }

  return (
    <Modal show={show}>
      <div className="videoFormTemplate">
        <div className="closeWindowPic" onClick={onClose}>
          <Image src={closePic} fit="contain"/>
        </div>
        <div className="videoFormTemplate_content">
          {
            isVideoForm ? <AddContentForm error={error} /> : <AddVideoBlock error={error} loading={loading}/>
          }
        </div>
        {isVideoForm && <div className="videoFormTemplate_submit">
          <Button label="Cancel" variant="transparent" onClick={onClose}/>
          <Button label="Submit" variant="prime" onClick={submitVideo}/>
        </div>}
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
