function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid weight and height.";
        return;
    }

    height = height / 100;
    var bmi = weight / (height * height);

    var resultText = "Your BMI is: " + bmi.toFixed(2) + " - ";
    if (bmi < 18.5) {
        resultText += "Underweight";
    } else if (bmi < 24.9) {
        resultText += "Normal Weight";
    } else if (bmi < 29.9) {
        resultText += "Overweight";
    } else {
        resultText += "Obese";
    }

    document.getElementById("result").innerHTML = resultText;
}
