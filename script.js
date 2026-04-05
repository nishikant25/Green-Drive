function scrollToSection(){
document.getElementById("features").scrollIntoView({behavior:"smooth"});
}

// 🔥 CALCULATOR FUNCTION
function calculateCost() {
    let distance = parseFloat(document.getElementById("distance").value);

    if (isNaN(distance) || distance <= 0) {
        alert("Please enter a valid distance");
        return;
    }

    let evCostPerKm = 1.5;

    let petrolPrice = 100;
    let petrolMileage = 15;

    let dieselPrice = 90;
    let dieselMileage = 20;

    let ev = distance * evCostPerKm;
    let petrol = (distance / petrolMileage) * petrolPrice;
    let diesel = (distance / dieselMileage) * dieselPrice;

    document.getElementById("evCost").innerText = "₹ " + ev.toFixed(2);
    document.getElementById("petrolCost").innerText = "₹ " + petrol.toFixed(2);
    document.getElementById("dieselCost").innerText = "₹ " + diesel.toFixed(2);
}

console.log("Premium EV Site Loaded 🚀");
