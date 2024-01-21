import React, { useState } from "react";
import { FaRegWindowMaximize, FaRegWindowMinimize, FaWindowRestore } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import FileLoad from "./fileload";
import "./titlebar.css"

interface Props {
  setFile: any
  value: string
}
const Titlebar: React.FC<Props> = (props) => {
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
          <FileLoad value={props.value} setFile={props.setFile} />
          <button onClick={min}><FaRegWindowMinimize /></button>
          <button onClick={resize}>{Wsize ? <FaWindowRestore /> : <FaRegWindowMaximize />}</button>
          <button className="close" onClick={close}><GrClose /> </button>
        </div>
      </div>
    </>
  )
}

export default Titlebar
