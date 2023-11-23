// Set the initial temperature in Kelvin
const kelvin = 293;

// Convert Kelvin to Celsius
const celsius = kelvin - 273;

// Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;


fahrenheit = Math.floor(fahrenheit);


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


const newton = Math.floor(celsius * (33/100));

// Log the temperature in Newton
console.log(`The temperature is ${newton} degrees Newton.`);
