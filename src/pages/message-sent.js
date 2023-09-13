import React from "react";
import { Cursor } from "../../cursor/index";
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

  return (
    <div>
      <Cursor isGelly={true} />
      <div className="message-sent-page">
          <h1>
              Hoooray <span className="color-primary">!</span>
          </h1>
          <p>
            It is a pleasure to meet ya! Give us a day and we will schedule our first date.
          </p>
        
        <div className='form-button-2 mt-10'>
          <Link href="/">
            <button className='btn_CTA'>
                <span className="btn_CTA-ripple">
                <span></span>
                </span>
                <span className='btn_CTA-title'>
                <span data-text='Go Home'>Go Home</span>
                </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MessageSent;
