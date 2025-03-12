document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  calculateBMI();
});

const result = document.getElementById("result");

const refreshbtn = document.getElementById("buttonrefresh");
refreshbtn.addEventListener("click", () => {
  result.innerHTML = "";
});
function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (weight >= 5 && weight <= 640 && height >= 54 && height <= 280) {
    let resulttext;
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category = "";

    if (bmi < 16) category = "Severe Thinness";
    else if (bmi >= 16 && bmi < 17) category = "Moderate Thinness";
    else if (bmi >= 17 && bmi < 18.5) category = "Mild Thinness";
    else if (bmi >= 18.5 && bmi < 25) category = "Normal";
    else if (bmi >= 25 && bmi < 30) category = "overweight";
    else if (bmi >= 30 && bmi < 35) category = "Class 1 Obese";
    else if (bmi >= 35 && bmi < 40) category = "Class 2 Obese";
    else category = "Severe Obacity ";
    result.innerHTML = `<pre>BMI: ${bmi} <strong> ${category} </strong></pre>`;
  }
  else {
    alert("Enter a valid value within the given range");
  }
}
