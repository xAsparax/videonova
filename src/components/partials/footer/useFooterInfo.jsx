import { useSelector } from "react-redux"
import { selectFooterText, selectSocial } from "../../../store/modules/siteInfo"

export default function useFooterInfo() {
  const text = useSelector(selectFooterText)
  const social = useSelector(selectSocial)
  return { text, social }
}
