import React, { useState } from "react";
import Editor from "./components/editor";
import Parse from "./components/parse";
import Titlebar from "./components/titlebar";
import './App.css'

const App = () => {
  const [code, setCode] = useState<string>("");
  const [file, setFile] = useState<string>("")
  const [preMode, setPreMode] = useState<boolean>(false)

  return (
    <>
      <Titlebar setFile={setFile} value={code} preMode={preMode} setPreMode={setPreMode} />
      <div className="content">
        <Editor
          defaultValue={file}
          file={file}
          preMode={preMode}
          onChange={(value: string) => setCode(value)}
        />
        <Parse Value={code} preMode={preMode} />
      </div>
    </>
  );
};

export default App
