import React, { useCallback, useEffect, useRef, useState } from "react";
import { EditorView, lineNumbers } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import {
  defaultHighlightStyle,
  syntaxHighlighting,
} from "@codemirror/language";
import "github-markdown-css/github-markdown.css";
import Parse from "./Parse";

const Codemirror = ({ value, onChange }) => {
  const editorRef = useRef();

  const updateCallback = EditorView.updateListener.of((update) => {
    onChange(update.state.doc.toString());
  });

  useEffect(() => {
    if (editorRef.current === null) return;
    const startState = EditorState.create({
      doc: value,
      extensions: [
        lineNumbers(),
        markdown({ codeLanguages: languages }),
        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
        updateCallback,
      ],
    });

    const View = new EditorView({
      state: startState,
      parent: editorRef.current,
    });
    return () => {
      View.destroy();
    };
  }, [editorRef]);

  return <div ref={editorRef}></div>;
};

const App = () => {
  const initalDoc = "Hello\n\n```javascript\nlet x = 'y'\n```";
  const [code, setCode] = useState(initalDoc);
  return (
    <>
      <Codemirror Value={code} onChange={(value) => setCode(value)} />
      <Parse value={code} />
    </>
  );
};
export default App;
