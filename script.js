document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.getElementById("convertButton");
    const resultDiv = document.getElementById("result");

    convertButton.addEventListener("click", function() {
        const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
        const unitSelect = document.getElementById("unitSelect").value;

        if (isNaN(temperatureInput)) {
            resultDiv.innerText = "Please enter a valid number.";
            return;
        }

        let convertedTemperature;
        let convertedUnit;

        if (unitSelect === "celsius") {
            convertedTemperature = (temperatureInput * 9/5) + 32;
            convertedUnit = "Fahrenheit";
        } else if (unitSelect === "fahrenheit") {
            convertedTemperature = (temperatureInput - 32) * 5/9;
            convertedUnit = "Celsius";
        } else if (unitSelect === "kelvin") {
            convertedTemperature = temperatureInput + 273.15;
            convertedUnit = "Kelvin";
        }

        resultDiv.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
    });
});
