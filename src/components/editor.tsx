import React, { useEffect, useRef } from "react";
import { EditorView, lineNumbers, highlightActiveLine, drawSelection } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import {
  defaultHighlightStyle,
  syntaxHighlighting,
  bracketMatching,
} from "@codemirror/language";
import { oneDark } from "@codemirror/theme-one-dark";
import { vim } from "@replit/codemirror-vim";
import "./Editor.css";

interface Props {
  defaultValue: string;
  file: string;
  onChange: (event: any) => void;
}
const Editor: React.FC<Props> = (props) => {
  const { defaultValue, file, onChange } = props;
  const editorRef = useRef<HTMLDivElement>(null);
  const updateCallback = EditorView.updateListener.of(
    (update) => update.docChanged && onChange(update.state.doc.toString()),
  );
  const transparentTheme = EditorView.theme({
    "&": {
      backgroundColor: "transparent !important",
    },
    "&.cm-focused": {
      outline: "none",
    },
  });

  useEffect(() => {
    if (editorRef.current === null) return;
    const startState = EditorState.create({
      doc: defaultValue,
      extensions: [
        lineNumbers(),
        bracketMatching(),
        highlightActiveLine(),
        markdown({ codeLanguages: languages }),
        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
        drawSelection({ cursorBlinkRate: 0 }),
        vim(),
        EditorView.lineWrapping,
        updateCallback,
        transparentTheme,
        oneDark
      ],
    });

    const View = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    View.dispatch({
      changes: {
        from: 0,
        to: View.state.doc.length,
        insert: file
      }
    })
    return () => {
      View.destroy();
    };
  }, [editorRef, file]);

  return <div className="Editor" ref={editorRef}></div>;
};

export default Editor;
