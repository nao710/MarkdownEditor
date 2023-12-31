import React, { useEffect } from "react";
import { useRemark } from "react-remark";
import "github-markdown-css/github-markdown.css";
import "./Parse.css";

interface Props {
  Value: string;
}
const Parse: React.FC<Props> = (props) => {
  const { Value } = props;
  const [markdownContent, setmarkdownSource] = useRemark();
  useEffect(() => {
    setmarkdownSource(Value);
  }, [Value]);
  return <div className="markdown-body">{markdownContent}</div>;
};

export default Parse;
