function scrollToSection() {
    const el = document.getElementById("features");
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}

function calculateCost() {
    let distance = parseFloat(document.getElementById("distance").value);

    if (isNaN(distance) || distance <= 0) {
        alert("Please enter valid distance");
        return;
    }

    // EV
    let evCostPerKm = parseFloat(document.getElementById("evCostInput").value);

    // Petrol
    let petrolPrice = parseFloat(document.getElementById("petrolPrice").value);
    let petrolMileage = parseFloat(document.getElementById("petrolMileage").value);

    // Diesel
    let dieselPrice = parseFloat(document.getElementById("dieselPrice").value);
    let dieselMileage = parseFloat(document.getElementById("dieselMileage").value);

    if (
        isNaN(evCostPerKm) ||
        isNaN(petrolPrice) || isNaN(petrolMileage) ||
        isNaN(dieselPrice) || isNaN(dieselMileage)
    ) {
        alert("Please fill all fields correctly");
        return;
    }

    let ev = distance * evCostPerKm;
    let petrol = (distance / petrolMileage) * petrolPrice;
    let diesel = (distance / dieselMileage) * dieselPrice;

    document.getElementById("evCost").innerText = "₹ " + ev.toLocaleString("en-IN");
    document.getElementById("petrolCost").innerText = "₹ " + petrol.toLocaleString("en-IN");
    document.getElementById("dieselCost").innerText = "₹ " + diesel.toLocaleString("en-IN");
}

console.log("🔥 Smart EV Calculator Loaded");
