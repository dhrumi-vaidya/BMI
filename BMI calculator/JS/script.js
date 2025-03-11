var table = document.getElementById("table");
const submitbtn = document.getElementById("buttonsubmit");
const refreshbtn = document.getElementById("buttonrefresh");
submitbtn.addEventListener("click", () => {
  event.preventDefault();
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("Height").value;

  if (weight <= 0 || height <= 0) {
    alert("Enter a value greater than 0");
  } else {
    const BMI = (weight / height / height) * 10000;
    const BMIresult = BMI.toFixed(1);
    var row = table.insertRow(3);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "BMI";
    cell2.innerHTML = BMIresult;
  }
});
refreshbtn.addEventListener("click", () => {
  window.location.reload();
});
