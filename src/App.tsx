import { useState } from "react";
import Editor from "./Editor";
import Parse from "./Parse";
import "./App.css";

const App = () => {
  const [code, setCode] = useState<string>("# Hello World!\n");

  return (
    <>
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

export default App;
