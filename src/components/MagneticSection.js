import React from "react";
import MagneticButton from "./MagneticButton";

export default function MagneticSection() {
  return (
    <>
      <div className="magnetic-section">
        <div className="magnetic-sub-section">
          <div className="first-box-magnetic">
            <MagneticButton>Hello</MagneticButton>
            <MagneticButton>Hello</MagneticButton>
            <MagneticButton>Hello</MagneticButton>
            <MagneticButton>Hello</MagneticButton>
          </div>
        </div>
      </div>
    </>
  );
}
