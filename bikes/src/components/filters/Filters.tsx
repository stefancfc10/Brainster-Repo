import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterItem from "./FilterItem";
import {IBike} from "../bikes/BikesHelper";
import {FilterType, getUniqueValues} from "./FiltersHelper";

interface Props {
    bikes: IBike[]
    handleFilterChange: (label: string, filterType: FilterType) => void
}

const Filters: React.FC<Props> = (props) => {
    const [active, setActive] = useState("Show all")

    const handleFilterItemClicked = (label: string, filterType: FilterType) => {
        setActive(label)
        props.handleFilterChange(label, filterType)
    }

    return (
        <div className="col-md-3 filters bg_white">
            <h1>Bikes</h1>
            <hr/>
            <h3>Filter by:</h3>
            <FilterItem active={active}
                        label={"Show all"}
                        filterType={FilterType.ALL}
                        bikes={props.bikes}
                        handleItemClick={() => handleFilterItemClicked("Show all", FilterType.ALL)}/>
            <hr/>
            <h5>Gender</h5>
            {getUniqueValues(props.bikes.map((b) => b.gender)).map(f => (
                <FilterItem key={f}
                            active={active}
                            label={f}
                            filterType={FilterType.GENDER}
                            bikes={props.bikes}
                            handleItemClick={() => handleFilterItemClicked(f, FilterType.GENDER)}/>
            ))}
            <hr/>
            <h5>Brand</h5>
            {getUniqueValues(props.bikes.map((b) => b.brand)).map(f => (
                <FilterItem key={f}
                            active={active}
                            label={f}
                            filterType={FilterType.BRAND}
                            bikes={props.bikes}
                            handleItemClick={() => handleFilterItemClicked(f, FilterType.BRAND)}/>
            ))}
        </div>
    );
};

export default Filters;
