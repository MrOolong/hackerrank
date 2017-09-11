//solution for day 2    
var tip = mealCost * (tipPercent/100);
var tax = mealCost * (taxPercent/100);
var totalCost = Math.round(mealCost + tip + tax);
console.log("The total meal cost is " + totalCost + " dollars.");