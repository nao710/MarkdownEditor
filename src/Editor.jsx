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
import "./Editor.css";

const Editor = ({ Value, onChange }) => {
  const editorRef = useRef();

  const updateCallback = EditorView.updateListener.of((update) => {
    onChange(update.state.doc.toString());
  });

  const transparentTheme = EditorView.theme({
    "&": {
      backgroundColor: "transparent !important",
    },
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
        transparentTheme,
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

  return <div className="Editor" ref={editorRef}></div>;
};

export default Editor;
