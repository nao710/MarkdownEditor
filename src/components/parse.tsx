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
import "github-markdown-css/github-markdown.css";
import "./Parse.css";

interface Props {
  Value: string;
}
const Parse: React.FC<Props> = (props) => {
  const { Value } = props;

  return <ReactMarkdown className="markdown-body" remarkPlugins={[remarkHtml, remarkMath, remarkGfm, remarkBreaks, remarkSlug, [remarkToc, { maxDepth: 2, heading: "content" }]]} rehypePlugins={[rehypeStringify, rehypeKatex, rehypeRaw]}>{Value}</ReactMarkdown>

};

export default Parse;
