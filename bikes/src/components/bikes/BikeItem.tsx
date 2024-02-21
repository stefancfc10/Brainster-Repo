import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {IBike} from "./BikesHelper";


interface Props {
    bike: IBike
}

const BikeItem: React.FC<Props> = (props) => {
    return (
        <div className="col-4">
            <div className="card">
                <img src={`./images/${parseInt(props.bike.image)}.png`} className="card-img-top pt-3 pb-3" alt="..."/>
                <div className="card_body">
                    <h4 className="card-title">{props.bike.name}</h4>
                    <p className="card-text">{props.bike.price} <b>$</b></p>
                </div>
            </div>
        </div>
    );
};

export default BikeItem;

