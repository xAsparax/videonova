import React, {useState} from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Layout from "../../layout"
import UserProfilePreview from "../../components/partials/userProfilePreview/userProfilePreview"
import VideoCard from "../../components/partials/videoCard/videoCard"
import Button from "../../components/primitives/button/button"
import Heading from "../../components/primitives/heading/heading"
import Image from "../../components/primitives/image/image"
import videoIcon from "../../assets/icons/video-square-black.png"
import avatar from "../../assets/avatars/anna-may-avatar.jpg"
import "./userPage.css"
import VideoFormTemplate from "../../components/partials/videoFormTemplate/videoFormTemplate"

function UserPage({userImage, userName}) {
  const siteInfo = useSelector((store) => store.siteInfo)
  const user = useParams()

  const [show, setShow] = useState(false)

  const userVideoInfo = [
    {title: "R.E.M.", text: "ÜBerlin (Official Music Video)", video: "https://www.youtube.com/watch?v=ZITh-XIikgI"},
    {title: "Placebo", text: "Running Up That Hill (A Deal With God) (Cover) Official Music Video", video: "https://www.youtube.com/watch?v=d-mYX0qKkB8"},
    {title: "The Verve", text: "Bitter Sweet Symphony (Official Music Video)", video: "https://www.youtube.com/watch?v=1lyu1KKwC74"},
    {title: "Depeche Mode", text: "Enjoy The Silence (Official Video)", video: "https://www.youtube.com/watch?v=aGSKrC7dGcY"},
    {title: "R.E.M.", text: "ÜBerlin (Official Music Video)", video: "https://www.youtube.com/watch?v=ZITh-XIikgI"},
    {title: "Placebo", text: "Running Up That Hill (A Deal With God) (Cover) Official Music Video", video: "https://www.youtube.com/watch?v=d-mYX0qKkB8"},
    {title: "The Verve", text: "Bitter Sweet Symphony (Official Music Video)", video: "https://www.youtube.com/watch?v=1lyu1KKwC74"},
    {title: "Depeche Mode", text: "Enjoy The Silence (Official Video)", video: "https://www.youtube.com/watch?v=aGSKrC7dGcY"},
  ]

  return (
    <Layout>
      {/*<div>*/}
      {/*  page content for user {user.id};<br />*/}
      {/*  message from store: {siteInfo.test}*/}
      {/*</div>*/}
      <div className="userInfo">
        <UserProfilePreview image={avatar} name="Anna May" />
      </div>
      <div className="userVideo">
        <div className="userVideo_head">
          <div className="userVideo_title">
            <Heading weight="2"> Anna May`s videos</Heading>
           <div className="video_icon">
              <Image src={videoIcon}/>
           </div>
          </div>
          <Button variant="prime" label="Add video" onClick={() => setShow(true)}/>
        </div>
        <div className="userVideo_list">
          {userVideoInfo.map((value) => (
            <div className="userVideo_container">
              <VideoCard video={value.video} title={value.title} text={value.text}/>
            </div>))}
        </div>
      </div>
      <VideoFormTemplate isVideoForm="false" onClose={() => setShow(false)} show={show}/>
    </Layout>
  )
}

export default UserPage
