import { useSelector } from "react-redux"
import {selectSiteIntro} from "../../store/modules/siteInfo"

export default function useHomePageInfo() {
  const siteIntro = useSelector(selectSiteIntro)
  return ( siteIntro )
}
