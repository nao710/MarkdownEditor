import React, { useState } from "react";
import { FaRegWindowMaximize, FaRegWindowMinimize, FaWindowRestore } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import "./titlebar.css"

const Titlebar = () => {
  const [Wsize, setWsize] = useState<boolean>(false)
  const close = () => {
    window.WindowControl.close()
  }
  const min = () => {
    window.WindowControl.min()
  }
  const resize = () => {
    setWsize(!Wsize)
    if (Wsize === false) {
      window.WindowControl.max()
    } else {
      window.WindowControl.restore()
    }
  }

  return (
    <>
      <div className="titlebar">
        <span>MarkdownEditor</span>
        <div className="drag">
        </div>
        <div className="windowcontrol">
          <button onClick={min}><FaRegWindowMinimize /></button>
          <button onClick={resize}>{Wsize ? <FaWindowRestore /> : <FaRegWindowMaximize />}</button>
          <button className="close" onClick={close}><GrClose /> </button>
        </div>
      </div>
    </>
  )
}

export default Titlebar
