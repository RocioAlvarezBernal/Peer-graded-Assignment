import React from "react";

function RenderAllDishes({dish, onClick}) {
  return(
    <div onClick={() => onClick(dish.id)}>
      <img width="100%" src={dish.image} alt={dish.name} />
    </div>
  );
}

const AllDishes = (props) => {
  const allDishes = props.dishes.map((dish)=> {
    return(
      <div className="col-12 col-md-5 m-1"  key={dish.id}>
        <RenderAllDishes dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        {allDishes}
      </div>
    </div>
  );
}

export default AllDishes;