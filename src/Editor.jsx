import React, { useEffect, useRef } from "react";
import { EditorView, lineNumbers } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import {
  defaultHighlightStyle,
  syntaxHighlighting,
} from "@codemirror/language";

const Editor = ({ Value, onChange }) => {
  const editorRef = useRef();

  const updateCallback = EditorView.updateListener.of((update) => {
    onChange(update.state.doc.toString());
  });

  useEffect(() => {
    if (editorRef.current === null) return;
    const startState = EditorState.create({
      doc: Value,
      extensions: [
        lineNumbers(),
        markdown({ codeLanguages: languages }),
        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
        EditorView.lineWrapping,
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

export default Editor;
