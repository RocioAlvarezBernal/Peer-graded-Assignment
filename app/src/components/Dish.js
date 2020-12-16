import React from "react";

function RenderDish({dish}) {
    if (dish != null) {
        return(
            <div className="col-12 col-md-5 m-1">
                <div>
                    <img width="100%"/>
                </div>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

const Dish = (props) => {
    const {dish} = props;

    return dish?(
        <div className="container">
            <div className="row">
                <RenderDish dish={dish} />
            </div>
        </div>
    ):(
        <div></div>
    )
}

export default Dish;