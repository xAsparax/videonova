import React, {useEffect} from "react"
import Layout from "../../layout"
import UserProfilePreview from "../../components/partials/userProfilePreview/userProfilePreview"
import VideoCard from "../../components/partials/videoCard/videoCard"
import Button from "../../components/primitives/button/button"
import Heading from "../../components/primitives/heading/heading"
import Image from "../../components/primitives/image/image"
import videoIcon from "../../assets/icons/video-square-black.png"
import "./userPage.css"
import VideoFormTemplate, {showVideoForm} from "../../components/partials/videoFormTemplate/videoFormTemplate"
import useUserPageInfo from "./useUserPageInfo"
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {selectShow as selectVideoFormShow} from "../../store/modules/videoForm"

function UserPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type: "videos/load"})
  }, [])
  const params = useParams()
  const { userName, authorizedId, userImage, userVideo } = useUserPageInfo(params.id)
  const videoFormShow = useSelector(selectVideoFormShow)
  const isCurrentUser = params.id === authorizedId
  const addVideo = () => {
    dispatch(showVideoForm())
  }

  return (
    <Layout>
      <div className="userInfo">
        <UserProfilePreview image={userImage} name={userName} />
      </div>
      <div className="userVideo">
        <div className="userVideo_head">
          <div className="userVideo_title">
            <Heading weight="2"> {userName}`s videos</Heading>
           <div className="video_icon">
              <Image src={videoIcon}/>
           </div>
          </div>
          { isCurrentUser ?
          <Button variant="prime" label="Add video" onClick={addVideo}/> : ``
          }
        </div>
        <div className="userVideo_list">
          {userVideo.map((value) => (
            <div className="userVideo_container">
              <VideoCard video={value.url} title={value.title} text={value.description}/>
            </div>))}
        </div>
      </div>
      <VideoFormTemplate isVideoForm="false" onClose={() => dispatch(hideVideForm())} show={videoFormShow} userId={authorizedId}/>
    </Layout>
  )
}

export default UserPage
