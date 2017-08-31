/* each of the following functions is used to get required information */

function getm () {
    /* m value was calculated by assuming a house that pays $2500 on electrical heating with temperatures below
    warning, m will vary SIGNIFICANTLY if you switch from electical to gas or oil */
    return (4.704 * (10**-5))
}

function getPriceRate () {
    /* if it's electrical (dollars/kwh): */
    return 0.10

    /* if it runs on natural gas (dollars/litre)
    return 0.00025 */

    /* if it runs on furnace oil/HHO (dollars/litre)
    return 0.85 */
}

function costPerYear (inT) {
    /* these are the needed preliminary variables */
    var m = getm();
    var rate = getPriceRate();
    var outT = [-7, -7, -2, 6, 12, 17, 20, 19, 14, 8, 2, -4] /* temperatures for KW; averages per month */

    var fluc = 5.0 /* this is the fluctutations outside thorughout different days in the month */
    var diffOut = 7.0 /* average temperature difference between day and night (outside) ; therefore day temp is half of this above avg, night temp is half of this below avg */


    tempDiffSum = 0 /* this sums the total temperature differences throughout the year */
    var i, j, a;
    for (i=0; i<12; i++) { /* loop around once for each month */
        for (j=0; j<3; j++) { /* loop three times to account for temperature differences outside through the month */
            for (a=0; a<2; a++) {
                tempDiff = inT - outT[i] + (j-1)*fluc + (a-0.5)*diffOut; /* this lets you subctract the average temperature for that month */
                if (tempDiff < 0) {
                    tempDiff *= -1;
                }
                tempDiffSum += tempDiff / 6.0; /* divide by 6 to account for the additional doube and triple loops */
            }
        }
    }

    /* to go from temp diff to $$$, multiply by m * price-rate * (# of seconds/year) */
    return Math.round(tempDiffSum * m * rate * (3600*24*30.4));
}
