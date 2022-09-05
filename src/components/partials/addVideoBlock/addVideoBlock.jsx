import React from "react"
import "./addVideoBlock.css"
import Heading from "../../primitives/heading/heading"
import Image from "../../primitives/image/image"
import Spinner from "../../primitives/button/spinner"
import bg from "../../../assets/backgrounds/bg.jpg"
import mark from "../../../assets/icons/mark.png"
import PropTypes from "prop-types"
import Button from "../../primitives/button/button"
import {useDispatch} from "react-redux"
import {hideVideoForm} from "../videoFormTemplate/videoFormTemplate"


export default function AddVideoBlock({loading, error}) {
  const dispatch = useDispatch()
  const goToVideo = () => {
    dispatch({type: "videos/load"})
    dispatch(hideVideoForm())
  }

  return (
    <div className="addVideoBlock">
      <div className="addVideoBlock__heading">
        <Heading weight="1" color="black">Add <mark className="red">new</mark> video</Heading>
      </div>
      <div className="addVideoBlock__video">
        <Image src={bg} fit= "cover"/>
        <div className="loadingStatus_label">
          { loading ? <Spinner big="true" /> : <Image src={mark} fit="contain"/> }
        </div>
      </div>
      <div className="addVideoBlock__notification">{
        error ?
        <Heading weight="2" children={error}/> :
        <Heading weight="2" children={loading ? "Loading..." : "Successful"}/>
      }
      </div>
      <div className="addVideoBlock__button">
        <Button variant="prime" label="To Video" disabled={loading} onClick={goToVideo}/>
      </div>
    </div>
  )
}

AddVideoBlock.propTypes = {
  loading: PropTypes.bool,
}
