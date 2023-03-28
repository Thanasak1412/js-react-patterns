import "./style.css";

import TemperatureConverter, {
  Kelvin,
  Fahrenheit,
} from "./components/TemperatureConverter";

function App() {
  return (
    <TemperatureConverter
      renderKelvin={({ value }) => <Kelvin value={value} />}
      renderFahrenheit={({ value }) => <Fahrenheit value={value} />}
    />
  );
}

export default App;
