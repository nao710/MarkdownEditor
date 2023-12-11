import React, { useEffect, useRef } from "react";
import { EditorView, lineNumbers, highlightActiveLine } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import {
  defaultHighlightStyle,
  syntaxHighlighting,
  bracketMatching,
} from "@codemirror/language";
import { dracula } from "thememirror";

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
        bracketMatching(),
        highlightActiveLine(),
        markdown({ codeLanguages: languages }),
        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
        EditorView.lineWrapping,
        updateCallback,
        dracula,
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
