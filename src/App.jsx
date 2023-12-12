import React, { useState } from "react";
import Editor from "./Editor";
import Parse from "./Parse";
import "./App.css";

const App = () => {
  const initalDoc = "# Hello World!\n";
  const [code, setCode] = useState(initalDoc);
  return (
    <>
      <div className="content">
        <Editor Value={code} onChange={(value) => setCode(value)} />
        <Parse Value={code} />
      </div>
    </>
  );
};

export default App;
