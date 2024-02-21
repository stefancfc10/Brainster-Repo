import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import {IBike} from "./BikesHelper";
import BikeItem from "./BikeItem";
import Filters from "../filters/Filters";
import {FilterType} from "../filters/FiltersHelper";


const Bikes: React.FC = () => {
  const [data, setData] = useState<IBike[]>([]);
  const [filteredData, setFilteredData] = useState<IBike[]>([])

  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
        .then((response) => response.json())
        .then((jsonData) => {
          setData(jsonData.products);
          setFilteredData(jsonData.products)
        });
  }, []);

  const handleChangeFilter = (value: string, filterType: FilterType) => {
      if (filterType === FilterType.ALL) {
          setFilteredData(data)
          return
      }

      setFilteredData(data.filter(b => b[filterType] === value))
  }

  return (
      <>
          <Filters bikes={data} handleFilterChange={handleChangeFilter}/>
          <div className="col-9 display">
              {filteredData.map((product, idx) => (
                  <BikeItem key={idx} bike={product} />
              ))}
          </div>
      </>
  );
};

export default Bikes;


