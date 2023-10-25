import React from "react";

function Footer(props) {
  return (
    <div>
      <div>{props.data.copyright}</div>
      <div>{props.data.service_version}</div>
    </div>
  );
}
export default Footer;
