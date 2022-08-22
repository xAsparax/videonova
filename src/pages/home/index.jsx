import React from "react"
import Layout from "../../layout"
import CardUser from "../../components/partials/cardUser/cardUser"
import annaMay from "../../assets/avatars/anna-may-avatar.jpg"
import denBennet from "../../assets/avatars/den-bennet-avatar.jpg"
import janeDou from "../../assets/avatars/jane-dou-avatar.jpg"
import kerryWilliams from "../../assets/avatars/kerry-willams-avatar.jpg"
import Heading from "../../components/primitives/heading/heading"
import Button from "../../components/primitives/button/button"
import "./home.css"
import Image from "../../components/primitives/image/image"
import star from "../../assets/icons/ranking.png"

function HomePage() {
  const userCardInfo = [
    {title: "Anna May", image: annaMay, buttonLink: "/", buttonLabel: "To profile", likesValue: 225, videosValue: 12},
    {title: "Den Bennet", image: denBennet, buttonLink: "/", buttonLabel: "To profile", likesValue: 120, videosValue: 27},
    {title: "Jane Dou", image: janeDou, buttonLink: "/", buttonLabel: "To profile", likesValue: 305, videosValue: 255},
    {title: "Kerry Williams", image: kerryWilliams, buttonLink: "/", buttonLabel: "To profile", likesValue: 400, videosValue: 12}
  ]

  return (
    <Layout>
        <div className="introducing_block">
          <Heading className="heading__elem" weight="1">Welcome to <mark className="red">VideoNova</mark></Heading>
          <span className="text__elem">Create videos with a single click. Add subtitles, transcribe audio and more.</span>
          <div className="button__elem">
          <Button variant="prime" label="Start Now" onClick="/" />
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
                <CardUser buttonLink={value.buttonLink} buttonLabel={value.buttonLabel} image={value.image} title={value.title} likesValue={value.likesValue} videosValue={value.videosValue}/>
              </div>))}
          </div>
        </div>
    </Layout>
  )
}
export default HomePage
