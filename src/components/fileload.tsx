import React from "react";
interface Props {
  setFile: any
  value: string
}
const FileLoad: React.FC<Props> = (props) => {
  const loadFile = async () => {
    const data = await window.FileControl.LoadFile()
    await props.setFile(data)
  }

  const saveFile = async () => {
    const data: string = props.value
    await window.FileControl.SaveFile(data)
  }

  return (
    <>
      <button onClick={saveFile}>save</button>
      <button onClick={loadFile}>load</button>
    </>
  )
}
export default FileLoad 
