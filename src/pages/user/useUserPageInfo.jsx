import {useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {selectAuthorized } from "../../store/modules/user"
import {selectUserByID} from "../../store/modules/usersList"
import {selectVideoByUserID} from "../../store/modules/video";

export default function useUserPageInfo() {
  const id = useParams().id
  const isAuthorized = useSelector(selectAuthorized)
  const user = useSelector(selectUserByID(id))
  const userImage = user && user.userPic
  const userName = user && user.userName
  const userVideo = useSelector(selectVideoByUserID(id))
  return { isAuthorized, userImage, userName, id, userVideo }
}
