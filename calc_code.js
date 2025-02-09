function calculate(rate, nights, hours, shifts, worked, accrued, banked, dateString) {
    // Step 1: Check and apply night shift differential
    if nights == True {
        let rate = rate + 2.50
    }
    // Step 2: Calculate percentage of straight-time
    let Percent = accrued / earnings;

    // Step 3: Calculate weekly hours
    let Weekly = hours * shifts;

    // Step 4: Calculate number of weeks between current date and input date
    let currentDate = new Date();
    let inputDate = new Date(dateString.slice(4, 8), dateString.slice(2, 4) - 1, dateString.slice(0, 2)); // Convert DDMMYYYY to Date object
    
    let diffInMillis = inputDate - currentDate;  // Difference in milliseconds
    let diffInDays = diffInMillis / (1000 * 3600 * 24);  // Convert to days
    let Future = Math.floor(diffInDays / 7);  // Convert days to weeks and round down

    // Step 5: Calculate vacation that will be accrued
    let New = Future * Percent * Weekly;

    // Step 6: Calculate existing vacation
    let Old = banked / rate;

    // Step 7: Calculate Total = New + Old
    let Total = New + Old;

    // Output the results
    console.log("Estimated Vacation Hours Available: " + Math.floor(Total));
    console.log("Estimated Number of Shifts: " + Math.floor(Total / hours));
}
