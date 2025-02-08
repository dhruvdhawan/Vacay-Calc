function calculateVacation() {
    // Get input values
    const rate = parseFloat(document.getElementById('rate').value);
    const hours = parseFloat(document.getElementById('hours').value);
    const shifts = parseFloat(document.getElementById('shifts').value);
    const earnings = parseFloat(document.getElementById('earnings').value);
    const accrued = parseFloat(document.getElementById('accrued').value);
    const banked = parseFloat(document.getElementById('banked').value);
    const dateString = document.getElementById('dateString').value;

    // Basic validation
    if ([rate, hours, shifts, earnings, accrued, banked].some(isNaN) || dateString.length !== 8) {
        alert('Please fill all fields with valid numbers');
        return;
    }

    // Perform calculation
    const result = calculate(rate, hours, shifts, earnings, accrued, banked, dateString);
    
    // Display results
    document.getElementById('hoursResult').textContent = result.hours;
    document.getElementById('shiftsResult').textContent = result.shifts;
}

function calculate(rate, hours, shifts, earnings, accrued, banked, dateString) {
    // Step 1: Calculate percentage
    const percent = accrued / earnings;
    
    // Step 2: Weekly hours
    const weeklyHours = hours * shifts;
    
    // Step 3: Calculate weeks between dates
    const day = dateString.slice(0, 2);
    const month = dateString.slice(2, 4) - 1; // Months are 0-indexed
    const year = dateString.slice(4, 8);
    const targetDate = new Date(year, month, day);
    const currentDate = new Date();
    
    const timeDiff = targetDate - currentDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    const weeksDiff = Math.floor(daysDiff / 7);

    // Step 4: New vacation
    const newVacation = weeksDiff * percent * weeklyHours;
    
    // Step 5: Existing vacation
    const existingVacation = banked / rate;
    
    // Step 6: Total
    const totalHours = newVacation + existingVacation;
    
    return {
        hours: Math.floor(totalHours),
        shifts: Math.floor(totalHours / hours)
    };
}