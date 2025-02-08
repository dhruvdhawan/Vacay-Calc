# Vacay-Calc
# The idea is to have members use their last pay cheque to find an estimate of their vacation
# They'll need the wage rate, total earnings for the week, accrued vacation amount, and total vacation amount from their last paystub.
# They'll also need to input the number of hours per shift and shifts per week. (shifts per week is to make the estimation easier, rather than actually needing to figure out how many Mon-Tue-Wed cycles happen, and hours per shift lets us output an estimated number of shifts they can request)
# The format I used for the date the member wants to check for is DDMMYYYY.
# The number of weeks between the current date and the target date is calculated. (floor is taken so it will be a conservative estimation)
# The percentage the member gets is found by dividing the accrued vacation by the total earnings for the pay period. (This should always work no matter the number of hours)
# The number of hours per week is calculated from the hours per shift and shifts per week.
# Hours per week * number of weeks * percentage = estimated hours of vacation that will be accrued.
# Total vacation ammount / wage rate = existing vacation hours
# Estimated vacation at the inputted date = existing + accrued.
# Should return the estimated total number of vacation hours available at the inputted date. (floor of estimated vacation)
# Should return estimated number of shifts the member can request. (floor of estimated vacation / hours per shift)
# I am using floors because I think it is safer to underestimate the amount slightly.
# I have no clue how to actually implement this on the site because I really only use python and C++. My idea is to have a couple of text boxes that can be filled in and an image of a paystub so members know the values to input.
