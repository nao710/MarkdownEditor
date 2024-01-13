import React, { useState } from "react";
import Editor from "./components/editor";
import Parse from "./components/parse";
import Titlebar from "./components/titlebar";
import './App.css'

const App = () => {
  const [code, setCode] = useState<string>("# Hello World!\n");

  return (
    <>
      <Titlebar />
      <div className="content">
        <Editor
          defaultValue={code}
          onChange={(value: string) => setCode(value)}
        />
        <Parse Value={code} />
      </div>
    </>
  );
};

export default App
