import React from "react";

import ExpressLogo from "../assets/images/express.png";
import HtmlLogo from "../assets/images/html.jpeg";
import CSSLogo from "../assets/images/css.jpeg";
import JSLogo from "../assets/images/js.png";
import NodeLogo from "../assets/images/node.png";

const Logos = [ExpressLogo, HtmlLogo, CSSLogo, JSLogo, NodeLogo];

export function TechnologyList() {
  return (
    <ul style={{ display: "flex", flexDirection: "row", listStyleType: "none", width: "50%" }}>
      {Logos.map((icon) => {
        return (
          <li style={{width: "50%"}}>
            <img src={icon} style={{ width: "50%", height:"50%", margin: 20, padding:10 , borderRadius: 10}} />
          </li>
        );
      })}
    </ul>
  );
}
