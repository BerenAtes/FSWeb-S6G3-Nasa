import React from "react";

function Header(props) {
  return (
    <div>
      <div>{props.data.title}</div>
      <div>{props.data.date}</div>
    </div>
  );
}
export default Header;
