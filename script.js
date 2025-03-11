var table = document.getElementById("table");
const submitbtn = document.getElementById("buttonsubmit");
const refreshbtn = document.getElementById("buttonrefresh");
const result = document.getElementById("result");
submitbtn.addEventListener("click", () => {
  event.preventDefault();
  // const weight = document.getElementById("weight").value;
  // const height = document.getElementById("Height").value;
});
refreshbtn.addEventListener("click", () => {
  window.location.reload();
});

function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("Height").value;

  if (weight <= 0 || height <= 0) {
    alert("Enter a value greater than 0");
  } else {
    let resulttext;
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    var row = table.insertRow(4);
    var cell1 = row.insertCell(0);

    cell1.innerHTML = `BMI : ${bmi}`;

    if (bmi < 16) result.innerHTML = "Severe Thinness";
    else if (bmi >= 16 && bmi < 17) result.innerHTML = "Moderate Thinness";
    else if (bmi >= 17 && bmi < 18.5) result.innerHTML = "Mild Thinness";
    else if (bmi >= 18.5 && bmi < 25) result.innerHTML = "Normal";
    else if (bmi >= 25 && bmi < 30) result.innerHTML = "overweight";
    else if (bmi >= 30 && bmi < 35) result.innerHTML = "Class 1 Obese";
    else if (bmi >= 35 && bmi < 40) result.innerHTML = "Class 2 Obese";
    else result.innerHTML = "Severe Obacity ";
  }
}
