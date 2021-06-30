import { meteo } from "./services/data";
import "./App.css";
import MeteoList from "./components/MeteoList";

function App() {
    return <MeteoList meteo={meteo} />;
}

export default App;
