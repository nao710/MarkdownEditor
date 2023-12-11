import React, { useEffect } from "react";
import { useRemark } from "react-remark";
import "github-markdown-css/github-markdown.css";

const Parse = ({ value }) => {
  const [markdownContent, setmarkdownSource] = useRemark();
  useEffect(() => {
    setmarkdownSource(value);
  }, [value]);
  return <div className="markdown-body">{markdownContent}</div>;
};

export default Parse;
