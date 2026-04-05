function scrollToSection(){
document.getElementById("features").scrollIntoView({behavior:"smooth"});
}

// 🔥 CALCULATOR FUNCTION
function calculateCost(){
let distance = parseFloat(document.getElementById("distance").value);

// realistic values
let evCostPerKm = 13;

let petrolPrice = 100;
let petrolMileage = 15;

let dieselPrice = 90;
let dieselMileage = 20;

// calculations
let ev = distance * evCostPerKm;
let petrol = (distance / petrolMileage) * petrolPrice;
let diesel = (distance / dieselMileage) * dieselPrice;

// update UI
document.getElementById("evCost").innerText = "₹ " + ev.toFixed(2);
document.getElementById("petrolCost").innerText = "₹ " + petrol.toFixed(2);
document.getElementById("dieselCost").innerText = "₹ " + diesel.toFixed(2);
}
console.log("Premium EV Site Loaded 🚀");
