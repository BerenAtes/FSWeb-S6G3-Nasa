import React from "react";
function Nasa(props) {
  return (
    <div>
      <img className="image" src={props.data.url}></img>
    </div>
  );
}
export default Nasa;
