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
        <Link href="/our-portfolio">
          <MagneticButton
            className="primary-button"
            data-cursor-text="click"
            data-cursor-color="#1a1a1a"
            data-cursor-size="100px"
          >
            <span className="round" />
            View All Projects
          </MagneticButton>
        </Link>
      </div>
    </>
  );
}
