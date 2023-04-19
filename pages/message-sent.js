import React from "react";
import { Cursor } from "../cursor/index";
import "react-creative-cursor/dist/styles.css";
import Link from "next/link";

const MessageSent = () => {
  const messageSent = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const h1 = {
    fontSize: "10vw",
    color: "#1a1a1a",
    fontFamily: "Ageo",
  };

  const span = {
    color: "#5D5AD6",
  };

  const p = {
    fontSize: "1.4vw",
    color: "#1a1a1a",
    fontFamily: "Ageo",
    padding: "0 28vw",
    textAlign: "center",
    fontWeight: "500",
    lineHeight: "1.3",
    color: "#1a1a1a",
  };

  const button = {
    border: "none",
    background: "#5D5AD6",
    color: "#fff",
    fontSize: "1.2vw",
    padding: "0.7vw 3vw 0.5vw 3vw",
    borderRadius: "2vw",
    marginTop: "4vw",
    fontFamily: "Ageo",
    cursor: "pointer",
  };

  return (
    <div>
      <Cursor isGelly={true} />
      <div className="message-sent-page" style={messageSent}>
        <h1 style={h1}>
          Hoooray<span style={span}>!</span>
        </h1>
        <p style={p}>
          It is a pleasure to meet ya! Give us a day and we will schedule our
          first date.
        </p>
        <Link href="/">
          <button style={button}>go home</button>
        </Link>
      </div>
    </div>
  );
};

export default MessageSent;
