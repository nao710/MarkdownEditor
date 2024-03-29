import React from "react";
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import remarkMath from "remark-math";
import remarkToc from "remark-toc";
import remarkSlug from "remark-slug";
import rehypeKatex from "rehype-katex";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import "github-markdown-css/github-markdown.css";
import "highlight.js/styles/github-dark.css"
import "./Parse.css";

interface Props {
  Value: string;
  preMode: boolean;
}
const Parse: React.FC<Props> = (props) => {
  const { Value, preMode } = props;

  return (
    <>
      <div className="markdown-body" style={{ margin: preMode ? "auto" : "" }}>
        <ReactMarkdown remarkPlugins={[remarkHtml, remarkMath, remarkGfm, remarkBreaks, remarkSlug, [remarkToc, { maxDepth: 2, heading: "content" }]]} rehypePlugins={[rehypeStringify, rehypeKatex, rehypeRaw, rehypeHighlight]}>{Value}</ReactMarkdown>
      </div>
    </>
  )
};

export default Parse;
