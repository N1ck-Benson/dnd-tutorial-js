import React from "react";

const SingleCard = ({ key }) => {
  return (
    <div className="card_single" key={key}>
      {key}
    </div>
  );
};

export default SingleCard;
