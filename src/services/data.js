import averse from "../img/averse.png";
import cielVariable from "../img/cielVariable.png";
import nuagePluie from "../img/nuagePluie.png";
import orages from "../img/orages.png";
import risqueAverse from "../img/risqueAverse.png";
import risqueOragesForts from "../img/risqueOragesForts.png";
import soleilNuage from "../img/soleilNuage.png";

export const meteo = [
    {
        id: 1,
        date: "Monday",
        image: averse,
        max: "20°C",
        min: "18°C",
        today: true,
    },
    {
        id: 2,
        date: "Tuesday",
        image: cielVariable,
        max: "15",
        min: "8°C",
        today: false,
    },
    {
        id: 3,
        date: "Wednesday",
        image: nuagePluie,
        max: "25°C",
        min: "11°C",
        today: false,
    },
    {
        id: 4,
        date: "Thursday",
        image: orages,
        max: "22°C",
        min: "19°C",
        today: false,
    },
    {
        id: 5,
        date: "Friday",
        image: risqueAverse,
        max: "15°C",
        min: "10°C",
        today: false,
    },
    {
        id: 6,
        date: "Saturday",
        image: risqueOragesForts,
        max: "8°C",
        min: "1°C",
        today: false,
    },
    {
        id: 7,
        date: "Sunday",
        image: soleilNuage,
        max: "9°C",
        min: "2°C",
        today: false,
    },
];
