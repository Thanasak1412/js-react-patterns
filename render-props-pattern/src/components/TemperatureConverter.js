import { useState } from "react";

export default function TemperatureConverter({
  renderKelvin,
  renderFahrenheit,
}) {
  const [value, setValue] = useState(0);

  return (
    <>
      <input
        type="number"
        placeholder="Degrees Celcius"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      {renderKelvin({ value: Math.floor(value * 273.15) })}
      {renderFahrenheit({ value: Math.floor((value * 9) / 5 + 32) })}
    </>
  );
}

export const Kelvin = ({ value }) => {
  return (
    <div className="temp-card">
      The temperature in Kelvin is: <span className="temp">{value}K</span>
    </div>
  );
};

export const Fahrenheit = ({ value }) => {
  return (
    <div className="temp-card">
      The temperature in Fahrenheit is:
      <span className="temp">{value}°F</span>
    </div>
  );
};
