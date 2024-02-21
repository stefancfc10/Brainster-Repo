import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IBike} from "../bikes/BikesHelper";
import {FilterType} from "./FiltersHelper";

interface Props {
    active: string
    label: string
    filterType: FilterType
    bikes: IBike[]
    handleItemClick: () => void
}

const FilterItem: React.FC<Props> = (props) => {
    const isActive = props.active === props.label
    const totalItems = props.filterType === "all" ? props.bikes.length :
        props.bikes.filter(b => b[props.filterType] === props.label).length

    return (
        <p className={`${isActive ? "active" : undefined}`} onClick={props.handleItemClick}>
            {props.label}
            <span className={`badge rounded-pill ${isActive ? "text-dark" : ""}`}>{totalItems}</span>
        </p>
    );
};

export default FilterItem;