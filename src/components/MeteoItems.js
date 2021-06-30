import React, { Component } from "react";
import "./MeteoItems.css";

export default class MeteoItems extends Component {
    render() {
        const { meteo } = this.props;
        return (
            <div className={meteo.today ? "cardToday" : "card"}>
                <p>{meteo.date}</p>
                <img src={meteo.image} alt={meteo.image} />
                <p>{meteo.max}</p>
                <p>{meteo.min}</p>
            </div>
        );
    }
}
