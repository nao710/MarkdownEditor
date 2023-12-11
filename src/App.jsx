import React, { useState } from "react";
import Editor from "./Editor";
import Parse from "./Parse";

const App = () => {
  const initalDoc = "# Hello World!\n";
  const [code, setCode] = useState(initalDoc);
  return (
    <>
      <Editor Value={code} onChange={(value) => setCode(value)} />
      <Parse Value={code} />
    </>
  );
};

export default App;
