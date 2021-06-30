import React from "react";
import MeteoItems from "./MeteoItems";
import "./MeteoItems.css";

function MeteoList(props) {
    return (
        <div className="row">
            {props.meteo.map((MeteoList) => (
                <div className="column" key={MeteoList.id}>
                    <MeteoItems meteo={MeteoList} />
                </div>
            ))}
        </div>
    );
}

export default MeteoList;
