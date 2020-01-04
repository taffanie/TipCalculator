let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value + "%"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value + "%";
  }

let bill = document.getElementById('bill');

bill.addEventListener('input', function() {
});

document.getElementById('calculate').addEventListener('click', function() {
    let tiptotal = (bill.value * slider.value /100);
    if (bill.value) {
        tipamount.innerHTML = "Tip Amount: " + "£" + tiptotal.toFixed(2); 
    }
    let billtotal = (parseInt(bill.value) + parseInt(tiptotal));
    if (bill.value) {
        totalbill.innerHTML = "Total Bill: " + "£" + billtotal;
    }
 });

let tipamount = document.getElementById('tipamount');
let totalbill = document.getElementById('totalbill');

 
