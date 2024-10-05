const celsius = prompt("Enter a temperature in Celsius:");
const fahrenheit = celsiusToFahrenheit(celsius);
alert(`${celsius}°C is equal to ${fahrenheit}°F.`);
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;