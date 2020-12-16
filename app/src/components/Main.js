import React from "react";

function RenderMain({dish, onClick}) {
  return(
    <div onClick={() => onClick(dish.id)}>
      <img width="100%" src={dish.image} alt={dish.name} />
    </div>
  );
}

const Main = (props) => {
  const main = props.dishes.map((dish)=> {
    return(
      <div className="col-12 col-md-5 m-1"  key={dish.id}>
        <RenderMain dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        {main}
      </div>
    </div>
  );
}

export default Main;