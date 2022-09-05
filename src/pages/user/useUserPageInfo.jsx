import {useDispatch, useSelector} from "react-redux"
import {selectAuthorized, selectUserId} from "../../store/modules/user"
import {selectUserByID} from "../../store/modules/usersList"
import {selectVideoByUserID} from "../../store/modules/video"
import {useEffect} from "react";

export default function useUserPageInfo(id) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type: "users/load"})
  }, [])
  const isAuthorized = useSelector(selectAuthorized)
  const authorizedId = useSelector(selectUserId)
  const user = useSelector(selectUserByID(id))
  const userImage = user && user.userPic
  const userName = user && user.userName
  const userVideo = useSelector(selectVideoByUserID(id))
  return { isAuthorized, userImage, userName, authorizedId, userVideo }
}
