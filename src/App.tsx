import React, { useState } from "react";
import Editor from "./components/editor";
import Parse from "./components/parse";
import Titlebar from "./components/titlebar";
import './App.css'

const App = () => {
  const [code, setCode] = useState<string>("");
  const [file, setFile] = useState<string>("")

  return (
    <>
      <Titlebar setFile={setFile} value={code} />
      <div className="content">
        <Editor
          defaultValue={file}
          file={file}
          onChange={(value: string) => setCode(value)}
        />
        <Parse Value={code} />
      </div>
    </>
  );
};

export default App
