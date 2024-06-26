import React from 'react';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi"
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md"

import "./descriptions.css"

const Descriptions = ({weather, units}) => {

    const tempUnit = units === "metric" ? "°C" : "°F";
    const windUnit = units === "metric" ? "meter/s" : "mile/h";

    const cards = [
        {
            id: 1,
            icon: <FaArrowDown />,
            title: "min",
            data: weather.temp_min,
            unit: tempUnit,
        },
        {
            id: 2,
            icon: <FaArrowUp />,
            title: "max",
            data: weather.temp_max,
            unit: tempUnit,
        },
        {
            id: 3,
            icon: <BiHappy />,
            title: "feels like",
            data: weather.feels_like,
            unit: tempUnit,
        },
        {
            id: 4,
            icon: <MdCompress />,
            title: "pressure",
            data: weather.pressure,
            unit: "hPa",
        },
        {
            id: 5,
            icon: <MdOutlineWaterDrop />,
            title: "humidity",
            data: weather.humidity,
            unit: "%",
        },
        {
            id: 6,
            icon: <FaWind />,
            title: "wind speed",
            data: weather.speed,
            unit: windUnit,
        },
    ];
    
  return (
    <div className="section section__descriptions">
        {cards.map(({id, icon, title, data, unit}) => (
            <div key = {id} className="card">
                <div className="description__card-icon">
                    {icon}
                    <small>{title}</small>
                </div>
                <h2>{`${data} ${unit}`}</h2>
            </div>
        ))}
    </div>
  )
}

export default Descriptions

