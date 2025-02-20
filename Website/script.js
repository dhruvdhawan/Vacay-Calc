function calculateVacation() {
    const rate = parseFloat(document.getElementById('rate').value);
    const hours = parseFloat(document.getElementById('hours').value);
    const shifts = parseFloat(document.getElementById('shifts').value);
    const worked = parseFloat(document.getElementById('worked').value);
    const accrued = parseFloat(document.getElementById('accrued').value);
    const banked = parseFloat(document.getElementById('banked').value);
    const dateString_p = document.getElementById('dateString_p').value;
    const dateString_f = document.getElementById('dateString_f').value;

    if ([rate, hours, shifts, worked, accrued, banked].some(isNaN) || dateString_p.length !== 8 || dateString_f.length !== 8) {
        alert('Please fill all fields with valid numbers');
        return;
    }

    const result = calculate(rate, hours, shifts, worked, accrued, banked, dateString_p, dateString_f);
    document.getElementById('hoursResult').textContent = result.hours;
    document.getElementById('shiftsResult').textContent = result.shifts;
}

function calculate(rate, hours, shifts, worked, accrued, banked, dateString_p, dateString_f) {
    // Step 1: Calculate percentage
    const Percent = accrued / (rate * worked);
    
    // Step 2: Weekly hours
    const Weekly = hours * shifts;

    // Step 3: Parse dates exactly as in your calc_code.js
    const payDate = new Date(
        dateString_p.slice(4, 8), 
        dateString_p.slice(2, 4) - 1, 
        dateString_p.slice(0, 2)
    );
    const inputDate = new Date(
        dateString_f.slice(4, 8), 
        dateString_f.slice(2, 4) - 1, 
        dateString_f.slice(0, 2)
    );

    // Step 4: Calculate weeks difference (EXACT match to your logic)
    const diffInMillis = inputDate - payDate;
    const diffInDays = Math.floor(diffInMillis / (1000 * 3600 * 24));
    const Future = Math.floor(diffInDays / 7);

    // Step 5: Calculations with identical operations
    const New = Future * Percent * Weekly;
    const Old = Math.floor((banked + accrued) / rate);
    const Total = New + Old;

    return {
        hours: Math.floor(Total),
        shifts: Math.floor(Total / hours)
    };
}