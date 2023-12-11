import React, { useState, useCallback } from "react";
import Editor from "./Editor";
import Parse from "./Parse";

const App = () => {
  const initalDoc = "Hello\n\n```javascript\nlet x = 'y'\n```";
  const [code, setCode] = useState(initalDoc);
  return (
    <>
      <Editor Value={code} onChange={(value) => setCode(value)} />
      <Parse Value={code} />
    </>
  );
};

export default App;
