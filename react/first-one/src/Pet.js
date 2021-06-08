import React from "react";
import { Link } from "@reach/router";

const Pet = props => {
  let imgPath = 'http://placecorgi.com/300/300';
  if(props.media.length) {
    imgPath = props.media[0].small;
  }
  return (
    <Link to={`/details/${props.id}`} className="pet">
        <div className="image-container">
          <img src={imgPath} alt={props.name}/>
        </div>
    <div className="info">
      <h1>{props.name}</h1>
      <h2>{`${props.animal},  ${props.breed},   ${props.location}`}</h2>
    </div>
    </Link>
  );
};

export default Pet;
