import {useSelector} from "react-redux";
import { selectAuthorized, selectUserName, selectUserImage } from "../../../store/modules/user"

export default function useHeaderInfo() {
  const isAuthorized = useSelector(selectAuthorized)
  const userImage = useSelector(selectUserImage)
  const userName = useSelector(selectUserName)
  return { isAuthorized, userImage, userName }
}
