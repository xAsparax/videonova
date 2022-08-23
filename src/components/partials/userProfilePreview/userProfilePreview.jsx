import React from "react"
import "./userProfilePreview.css"
import Image from "../../primitives/image/image"
import Heading from "../../primitives/heading/heading"
import PropTypes from "prop-types"

export default function UserProfilePreview({image, name, small}) {
  const className = `userProfilePreview ${ small ? `userProfilePreview-small` : `` }`
  const classImage = `userImage_block ${ small ? `userImage-small` : `` }`
  return (
    <div className={className}>
      <div className={classImage}>
        <Image src={image} fit="cover"/>
      </div>
      <div className="userName_block">
        { small ? <span className="userName__text">{name}</span> :
        <Heading weight="1">{name}</Heading>
        }
      </div>
    </div>
  )
}

UserProfilePreview.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  small: PropTypes.bool,
}

UserProfilePreview.defaultProps = {
  image: undefined,
  name: undefined,
  small: false
}
