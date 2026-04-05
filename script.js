function scrollToSection(){
document.getElementById("features").scrollIntoView({behavior:"smooth"});
}

// 🔥 CALCULATOR FUNCTION
function calculateCost(){
let distance = document.getElementById("distance").value;

let ev = distance * 1;
let petrol = distance * 7;
let diesel = distance * 6;

// update UI
document.getElementById("evCost").innerText = "₹ " + ev;
document.getElementById("petrolCost").innerText = "₹ " + petrol;
document.getElementById("dieselCost").innerText = "₹ " + diesel;
}

console.log("Premium EV Site Loaded 🚀");
