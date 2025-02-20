function calculate(rate, hours, shifts, worked, accrued, banked, dateString) {
    // Step 1: Calculate percentage of straight-time, worked = total hours on last paystub
    let Percent = accrued / (rate * worked);

    // Step 2: Calculate weekly hours
    let Weekly = hours * shifts;

    // Step 3: Calculate number of weeks between current date and input date
    let currentDate = new Date();
    let inputDate = new Date(dateString.slice(4, 8), dateString.slice(2, 4) - 1, dateString.slice(0, 2)); // Convert DDMMYYYY to Date object
    
    let diffInMillis = inputDate - currentDate;  // Difference in milliseconds
    let diffInDays = diffInMillis / (1000 * 3600 * 24);  // Convert to days
    let Future = Math.floor(diffInDays / 7);  // Convert days to weeks and round down

    // Step 4: Calculate vacation that will be accrued
    let New = Future * Percent * Weekly;

    // Step 5: Calculate existing vacation, floor because pay increases over the accruel period might lead to overestimation
    let Old = Math.floor( banked / rate);

    // Step 6: Calculate Total = New + Old
    let Total = New + Old;

    // Output the results
    console.log("Estimated Vacation Hours Available: " + Math.floor(Total));
    console.log("Estimated Number of Shifts: " + Math.floor(Total / hours));
}
