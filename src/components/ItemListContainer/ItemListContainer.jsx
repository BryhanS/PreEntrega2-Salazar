import React from "react";
const ItemListContainer = (props) => {
  const { content } = props;
  return (
    <h1
      className="container d-flex"
      style={{ color: "green", textTransform: "uppercase", marginTop: "50px" }}
    >
      {props.content}
    </h1>
  );
};

export default ItemListContainer;
