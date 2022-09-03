import {useSelector} from "react-redux";
import {
  selectAuthorized,
  selectUserName,
  selectUserImage,
  selectUserId,
  selectUserError
} from "../../../store/modules/user"
import {selectIsSignUp, selectShow} from "../../../store/modules/forms";

export default function useHeaderInfo() {
  const isAuthorized = useSelector(selectAuthorized)
  const userImage = useSelector(selectUserImage)
  const userName = useSelector(selectUserName)
  const userId = useSelector(selectUserId)
  const userError = useSelector(selectUserError)
  const show = useSelector(selectShow)
  const isSignUp = useSelector(selectIsSignUp)
  return { isAuthorized, userId, userImage, userName, userError, show, isSignUp }
}
