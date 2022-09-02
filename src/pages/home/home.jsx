import React, { useState} from "react"
import Layout from "../../layout"
import CardUser from "../../components/partials/cardUser/cardUser"
import Heading from "../../components/primitives/heading/heading"
import Button from "../../components/primitives/button/button"
import "./home.css"
import Image from "../../components/primitives/image/image"
import star from "../../assets/icons/ranking.png"
import SignFormTemplate from "../../components/partials/signFormTemplate/signFormTemplate"
import {useSelector} from "react-redux"
import {selectSiteIntro} from "../../store/modules/siteInfo"
import {selectUsers} from "../../store/modules/usersList"

function HomePage() {

  const userCardInfo = useSelector(selectUsers)
  const siteIntro = useSelector(selectSiteIntro)
  const [show, setShow] = useState(false)

  // const userCardInfo = [
  //   {title: "Anna May", image: annaMay, buttonLink: "/", buttonLabel: "To profile", likesValue: 225, videosValue: 12},
  //   {title: "Den Bennet", image: denBennet, buttonLink: "/", buttonLabel: "To profile", likesValue: 120, videosValue: 27},
  //   {title: "Jane Dou", image: janeDou, buttonLink: "/", buttonLabel: "To profile", likesValue: 305, videosValue: 255},
  //   {title: "Kerry Williams", image: kerryWilliams, buttonLink: "/", buttonLabel: "To profile", likesValue: 400, videosValue: 12}
  // ]


  return (
    <Layout>
        <div className="introducing_block">
          <div  className="heading__elem">
            <Heading weight="1">Welcome to <mark className="red">VideoNova</mark></Heading>
          </div>
          <div  className="text__elem">
           <span>{ siteIntro }</span>
          </div>
          <div className="button__elem">
          <Button variant="prime" label="Start Now" onClick={() => setShow(true)}/>
          </div>
        </div>
        <div className="creators_block">
          <div className="creators_block__title">
            <Heading weight="2">Best Creators</Heading>
            <div className="star_icon">
              <Image src={star} fit="contain"/>
            </div>
          </div>
          <div className="creators_block__content">
            {userCardInfo.map((value) => (
              <div className="cardUser_container">
                <CardUser buttonLink={`user/${value.id}`} buttonLabel="To profile" image={value.userPic} title={value.userName} likesValue={15} videosValue={10}/>
              </div>))}
          </div>
        </div>
        <SignFormTemplate isSignUp="false" onClose={() => setShow(false)} show={show}/>
    </Layout>
  )
}
export default HomePage
