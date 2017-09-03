$(document).ready(function(){
    /* opens up the opening page */
    $('.page').hide();
    $('.navbar').hide();
    $('#opening').show();
    /*changePage('#main');*/
    changePageDelay(0);

    var temp = 23;
    $('#main-temp').text(temp);
    $('#main-temp-confirm').text(temp);
    setTemp_savePage(temp);

    var cost = 0;
    var saveMoneyVal = 0; /* saveMoneyVal applies for when you decrease temp by 2 degrees */
    /* this lets you deal with the compare to yourself page */
    var costAt23 = costPerYear(23);
    $('#compare-self-avg').text(costAt23);
    /* this is for the regional comparison prices */
    var regAvg = 2100;
    $('#cost-reg-avg').text(regAvg);

    changeCost(temp, cost, saveMoneyVal, costAt23, regAvg);
    changeTemp(temp, cost, saveMoneyVal, costAt23, regAvg);

    /* allows you to change the charts */
    var activeChart = '.to-cost';
    $(activeChart).addClass('nav-item-active');

    /* allows you to change the competition pages */
    var activeComp = '.to-fb';
    $(activeComp).addClass('nav-item-active');

    /* this if for the tabs */
    var activeTab = '#home-tab';
    $(activeTab).addClass('nav-item-active');
    changeTab(activeTab, activeComp, activeChart);

    /* this affects the thermostat verification code */
    var thermoCode = '#A1G8X3';
    showCode(thermoCode);
    changeCode(thermoCode);
});

/* changes the active page */
function changePage (newID) {
    $('.page').hide();
    $(newID).show();
    $('.navbar').show();
}

/* will delay changing the page for a set time */
function changePageDelay (miliseconds) {
    setTimeout(function() {
        changePage('#main');
    }, miliseconds);
};

/* this function works for changing the temperature */
function changeTemp (temp, cost, saveMoneyVal, costAt23, regAvg) {
    var oldTemp; var confirmCostDiff; /* these are for the confirmation page when you increase temp */

    /* allows you to decrease temperature */
    $('#temp-down-button').click(function() {
        temp --;
        $('#main-temp').text(temp);
        $('#main-temp-confirm').text(temp);
        changeCost(temp, cost, saveMoneyVal, costAt23, regAvg);
        setTemp_savePage(temp);
    });

    /* allows you to increase temperature of house */
    $('#temp-up-button').click(function() {
        oldTemp = temp; /* for the increasing temp confirmation page */
        temp ++;
        confirmCostDiff = costPerYear(temp) - costPerYear(oldTemp);
        $('#main-temp').text(temp);
        $('#main-temp-confirm').text(temp);
        changeCost(temp, cost, saveMoneyVal, costAt23, regAvg);
        setTemp_savePage(temp);
        /* deals with the the confirmation page */
        changePage('#main-confirm');
        $('#confirm-old-temp').text(oldTemp);
        $('#confirm-new-temp').text(temp);
        $('#confirm-cost-year').text(confirmCostDiff);
    });

    /* deals with confirm page */
    $('#temp-down-button-confirm').click(function() {
        temp --;
        /* this checks to see if you brought temp back to original one. If so, go back to main page */
        if (temp <= oldTemp) {
            changePage('#main');
        };
        confirmCostDiff = costPerYear(temp) - costPerYear(oldTemp);
        $('#main-temp').text(temp);
        $('#main-temp-confirm').text(temp);
        changeCost(temp, cost, saveMoneyVal, costAt23, regAvg);
        setTemp_savePage(temp);
        /* deals with the the confirmation page */
        $('#confirm-new-temp').text(temp);
        $('#confirm-cost-year').text(confirmCostDiff);
    });

    /* allows you to increase temperature of house on confirm page */
    $('#temp-up-button-confirm').click(function() {
        temp ++;
        confirmCostDiff = costPerYear(temp) - costPerYear(oldTemp);
        $('#main-temp').text(temp);
        $('#main-temp-confirm').text(temp);
        changeCost(temp, cost, saveMoneyVal, costAt23, regAvg);
        setTemp_savePage(temp);
        /* deals with the the confirmation page */
        $('#confirm-new-temp').text(temp);
        $('#confirm-cost-year').text(confirmCostDiff);
    });

    $('#confirm-temp-yes').click(function() {
        changePage('#main');
    });

    $('#confirm-temp-no').click(function() {
        temp = oldTemp;
        $('#main-temp').text(temp);
        $('#main-temp-confirm').text(temp);
        changeCost(temp, cost, saveMoneyVal, costAt23, regAvg);
        setTemp_savePage(temp);
        changePage('#main');
    });

    /* this deals with the save money button page */
    $('#save-yes').click(function() {
        changePage('#main');
        temp -= 2;
        $('#main-temp').text(temp);
        $('#main-temp-confirm').text(temp);
        changeCost(temp, cost, saveMoneyVal, costAt23, regAvg);
        setTemp_savePage(temp);
    });

    $('#save-no').click(function() {
        changePage('#main');
    });
}

/* adjusts temperatures for the save money page */
function setTemp_savePage (temp) {
    $('#save-current-temp').text(temp);
    $('#save-new-temp').text(temp-2);
}

/* this functions updates the cost to heat hosue per year */
function changeCost (temp, cost, saveMoneyVal, costAt23, regAvg) {
    cost = costPerYear(temp);
    $('#main-cost').text(cost);
    /* this deals with money saved from dropping temp 2 degrees */
    saveMoneyVal = cost - costPerYear(temp-2);
    $('#save-down-2').text(saveMoneyVal);
    $('#save-year').text(saveMoneyVal);
    $('#save-month').text((saveMoneyVal/12).toFixed(2));
    /* this deals with the compare to yourself page */
    $('#compare-self-current').text('$' + cost);
    var avgCurrentDiff = costAt23 - cost;
    if (avgCurrentDiff > 0) {
        $('#compare-self-diff').text('+$' + avgCurrentDiff);
        $('#compare-self-diff').css('color', '#5cb85c');
        $('#compare-self-current').css('color', '#5cb85c');
    } else if (avgCurrentDiff == 0) {
        $('#compare-self-diff').text('$' + avgCurrentDiff);
        $('#compare-self-diff').css('color', '#000');
        $('#compare-self-current').css('color', '#000');
    } else {
        $('#compare-self-diff').text('-$' + (-1*avgCurrentDiff));
        $('#compare-self-diff').css('color', '#f30a23');
        $('#compare-self-current').css('color', '#f30a23');
    }
    /* this is for the current cost on regional comparisons page */
    $('#cost-reg-you').text('$' + cost);
    if (cost < regAvg) {
        $('#cost-reg-you').css('color', '#5cb85c');
    } else if (cost == regAvg) {
        $('#cost-reg-you').css('color', '#000');
    } else {
        $('#cost-reg-you').css('color', '#f30a23');
    }
}

/* this function applies for changing the tab on the navbar */
function changeTab (activeTab, activeComp, activeChart) {
    $('#home-tab').click(function() {
        $(activeTab).removeClass('nav-item-active');
        activeTab = '#home-tab';
        $(activeTab).addClass('nav-item-active');
        changePage('#main');
    });

    /* this deals with clicking the save money button on home page */
    $('#save-button').click(function() {
        changePage('#save-money');
    });

    $('#comparisons-tab').click(function() {
        $(activeTab).removeClass('nav-item-active');
        activeTab = '#comparisons-tab';
        $(activeTab).addClass('nav-item-active');
        if (activeComp == '.to-fb') {
            changePage('#comp-fb');
        } else if (activeComp == '.to-reg') {
            changePage('#comp-reg');
        } else {
            changePage('#comp-you');
        }
    });

    $('#statistics-tab').click(function() {
        $(activeTab).removeClass('nav-item-active');
        activeTab = '#statistics-tab';
        $(activeTab).addClass('nav-item-active');
        if (activeChart == '.to-cost') {
            changePage('#charts-cost');
        } else if (activeChart == '.to-energy') {
            changePage('#charts-energy');
        } else if (activeChart == '.to-temp') {
            changePage('#charts-temp');
        } else {
            changePage('#charts-goals');
        }
    });

    /* this deals with the different settings pages */
    $('#settings-tab').click(function() {
        $(activeTab).removeClass('nav-item-active');
        activeTab = '#settings-tab';
        $(activeTab).addClass('nav-item-active');
        changePage('#settings');
    });

    $('#settings-to-thermo').click(function() {
        changePage('#settings-thermo');
        $('.change-code-info').hide();
        $('#change-code-general').show();
    });

    $('#settings-to-house').click(function() {
        changePage('#settings-house');
    });

    $('#settings-to-fb').click(function() {
        changePage('#settings-fb');
    });

    $('#settings-to-custom').click(function() {
        changePage('#settings-custom');
    });

    $('#settings-to-support').click(function() {
        changePage('#settings-support');
    });

    $('.settings-return').click(function() {
        changePage('#settings');
    });

    /* deals with the toggle on fb settings page */
    $('#settings-fb-share').click(function() {
        if ($('#settings-fb-toggle').hasClass('fa-toggle-on')) {
            $('#settings-fb-toggle').removeClass('fa-toggle-on');
            $('#settings-fb-toggle').addClass('fa-toggle-off');
            $('#settings-fb-toggle').css('color', '#000');
        } else {
            $('#settings-fb-toggle').removeClass('fa-toggle-off');
            $('#settings-fb-toggle').addClass('fa-toggle-on');
            $('#settings-fb-toggle').css('color', '#1b9af7');
        }
    });

    /* this is for the circle nav in the competitions page */
    $('.to-fb').click(function() {
        $(activeComp).removeClass('nav-item-active');
        activeComp = '.to-fb';
        $(activeComp).addClass('nav-item-active');
        changePage('#comp-fb');
    });

    $('.to-reg').click(function() {
        $(activeComp).removeClass('nav-item-active');
        activeComp = '.to-reg';
        $(activeComp).addClass('nav-item-active');
        changePage('#comp-reg');
    });

    $('.to-you').click(function() {
        $(activeComp).removeClass('nav-item-active');
        activeComp = '.to-you';
        $(activeComp).addClass('nav-item-active');
        changePage('#comp-you');
    });

    /* this is for the circle nav in the charts page */
    $('.to-cost').click(function() {
        $(activeChart).removeClass('nav-item-active');
        activeChart = '.to-cost';
        $(activeChart).addClass('nav-item-active');
        changePage('#charts-cost');
    });

    $('.to-energy').click(function() {
        $(activeChart).removeClass('nav-item-active');
        activeChart = '.to-energy';
        $(activeChart).addClass('nav-item-active');
        changePage('#charts-energy');
    });

    $('.to-temp').click(function() {
        $(activeChart).removeClass('nav-item-active');
        activeChart = '.to-temp';
        $(activeChart).addClass('nav-item-active');
        changePage('#charts-temp');
    });

    $('.to-goals').click(function() {
        $(activeChart).removeClass('nav-item-active');
        activeChart = '.to-goals';
        $(activeChart).addClass('nav-item-active');
        changePage('#charts-goals');
    });
};

/* this displays the code in the settings page */
function showCode (thermoCode) {
    /* this sets the placehodler in input form */
    document.getElementById("new-code").placeholder = thermoCode;
}

/* allows you to change the thermostat code connected */
function changeCode (thermoCode) {
    /* this deals with the thermostat code form */
    $("#code-form").submit(function(e) {
        e.preventDefault();
        $('.change-code-info').hide();
        var newCode = document.getElementById('new-code').value; /* this gets whatever is in the input box */
        newCode = newCode.toUpperCase();
        if (newCode[0] == "#" && newCode.length == 7) {
            $('#change-code-success').show();
            thermoCode = newCode;
            showCode(thermoCode);
            document.getElementById('new-code').value = "";
        } else {
            if (newCode[0] != "#") {
                $('#change-code-hashtag').show();
            }
            if (newCode.length != 7) {
                $('#change-code-length').show();
            }
        }
    });
}
