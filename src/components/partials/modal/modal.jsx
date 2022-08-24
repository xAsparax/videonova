import React from "react"
import "./modal.css"

export default function Modal ({show, children}){
  if (!show) return null
  return (
    <div className="modal">
      <div className="modal_container">
        {children}
      </div>
    </div>
  )
}
