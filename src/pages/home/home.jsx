import React from "react"
import Layout from "../../layout"
import CardUser from "../../components/partials/cardUser/cardUser"
import Heading from "../../components/primitives/heading/heading"
import Button from "../../components/primitives/button/button"
import "./home.css"
import Image from "../../components/primitives/image/image"
import star from "../../assets/icons/ranking.png"
import {showForm} from "../../components/partials/signFormTemplate/signFormTemplate"
import {useDispatch, useSelector} from "react-redux"
import {selectSiteIntro} from "../../store/modules/siteInfo"
import {selectUsers} from "../../store/modules/usersList"
import {useEffect} from "react"
import {selectAuthorized, selectUserId} from "../../store/modules/user"

function HomePage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type: "users/load"})
  }, [])
  const userCardInfo = useSelector(selectUsers)
  const siteIntro = useSelector(selectSiteIntro)
  const isAuthorized = useSelector(selectAuthorized)
  const authorizedId = useSelector(selectUserId)

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
            { !isAuthorized ?
            <Button variant="prime" label="Start Now" onClick={() => dispatch(showForm(false))}/> :
            <Button variant="prime" label="To Profile" onClick={`user/${authorizedId}`}/>
          }
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
    </Layout>
  )
}
export default HomePage
