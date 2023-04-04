import React, { useEffect } from "react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

export default function Button() {
  // Button
  useEffect(() => {
    let button = document.querySelector(".primary-button");
    let item = document.querySelector(".primary-button .round");

    button.addEventListener("mouseenter", function (event) {
      this.classList += " animate";

      let buttonX = event.offsetX;
      let buttonY = event.offsetY;

      if (buttonY < 24) {
        item.style.top = 0 + "px";
      } else if (buttonY > 30) {
        item.style.top = 48 + "px";
      }

      item.style.left = buttonX + "px";
      item.style.width = "1px";
      item.style.height = "1px";
    });

    button.addEventListener("mouseleave", function () {
      this.classList.remove("animate");

      let buttonX = event.offsetX;
      let buttonY = event.offsetY;

      if (buttonY < 24) {
        item.style.top = 0 + "px";
      } else if (buttonY > 30) {
        item.style.top = 48 + "px";
      }
      item.style.left = buttonX + "px";
    });
  });

  return (
    <>
      <div id="button-container">
        {/* <Link href="/works">
          <button
            className="primary-button"
            data-cursor-text="click"
            data-cursor-color="#1a1a1a"
            data-cursor-size="100px"
          >
            View all Projects
            <span className="round" />
          </button>
        </Link> */}
        {/* <MagneticButton
          className="primary-button"
          data-cursor-text="click"
          data-cursor-color="#1a1a1a"
          data-cursor-size="100px"
        >
          <span className="round" />
          View All Projects
        </MagneticButton> */}

        <MagneticButton
          className="button-1"
          style={{ backgroundColor: "transparent" }}
          scale={4}
          tollerance={1}
          speed={0.3}
          borderRadius="50%"
          onClick={() => {
            console.log("click");
          }}
          data-cursor-text="click"
          data-cursor-color="#1a1a1a"
          data-cursor-size="100px"
        >
          <MagneticButton
            className="button-1  primary-button"
            scale={4}
            tollerance={1}
            speed={0.5}
            borderRadius="50%"
            onClick={() => {
              console.log("click");
            }}
          >
            View All Projects
            <span className="round" />
          </MagneticButton>
        </MagneticButton>
      </div>
    </>
  );
}
