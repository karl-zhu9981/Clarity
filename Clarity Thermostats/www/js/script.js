$(document).ready(function(){
    /* opens up the opening page */
    $('.page').hide();
    $('.navbar').hide();
    $('#opening-info-app').show();

    /*this must all be put in here for the opening page about house info.... */
    var openInputs = [1, 0, 0, 0];
    $('#opening-costs-table-2').hide();
    $('#opening-costs-table-3').hide();
    $('#opening-costs-table-4').hide();
    $('#settings-costs-table-2').hide();
    $('#settings-costs-table-3').hide();
    $('#settings-costs-table-4').hide();

    $('#new-cost-button').click(function() {
        if (openInputs[1] == 0) {
            $('#opening-costs-table-2').show();
            $('#settings-costs-table-2').show();
            openInputs[1] = 1;
        } else if (openInputs[2] == 0) {
            $('#opening-costs-table-3').show();
            $('#settings-costs-table-3').show();
            openInputs[2] = 1;
        } else if (openInputs[3] == 0) {
            $('#opening-costs-table-4').show();
            $('#settings-costs-table-4').show();
            openInputs[3] = 1;
        }
        if (openInputs.indexOf(0) == -1) {
            $('#new-cost-button').hide();
            $('#settings-new-cost-button').hide();
        }
    });

    $('#settings-new-cost-button').click(function() {
        if (openInputs[1] == 0) {
            $('#settings-costs-table-2').show();
            openInputs[1] = 1;
        } else if (openInputs[2] == 0) {
            $('#settings-costs-table-3').show();
            openInputs[2] = 1;
        } else if (openInputs[3] == 0) {
            $('#settings-costs-table-4').show();
            openInputs[3] = 1;
        }
        if (openInputs.indexOf(0) == -1) {
            $('#settings-new-cost-button').hide();
        }
    });

    $('#house-cost-delete-2').click(function() {
        $('#opening-costs-table-2').hide();
        $('#settings-costs-table-2').hide();
        openInputs[1] = 0;
        $('#new-cost-button').show();
        $('#settings-new-cost-button').show();
    });
    $('#house-cost-delete-3').click(function() {
        $('#opening-costs-table-3').hide();
        $('#settings-costs-table-3').hide();
        openInputs[2] = 0;
        $('#new-cost-button').show();
        $('#settings-new-cost-button').show();
    });
    $('#house-cost-delete-4').click(function() {
        $('#opening-costs-table-4').hide();
        $('#settings-costs-table-4').hide();
        openInputs[3] = 0;
        $('#new-cost-button').show();
        $('#settings-new-cost-button').show();
    });
    $('#settings-house-cost-delete-2').click(function() {
        $('#settings-costs-table-2').hide();
        openInputs[1] = 0;
        $('#settings-new-cost-button').show();
    });
    $('#settings-house-cost-delete-3').click(function() {
        $('#settings-costs-table-3').hide();
        openInputs[2] = 0;
        $('#settings-new-cost-button').show();
    });
    $('#settings-house-cost-delete-4').click(function() {
        $('#settings-costs-table-4').hide();
        openInputs[3] = 0;
        $('#settings-new-cost-button').show();
    });

    /* makes it so that typing enter/go has you leave the box */
    $('#house-cost-1').keypress(function(e){
        if(e.which == 13){
            $(this).blur();
        }
    });
    $('#house-cost-2').keypress(function(e){
        if(e.which == 13){
            $(this).blur();
        }
    });
    $('#house-cost-3').keypress(function(e){
        if(e.which == 13){
            $(this).blur();
        }
    });
    $('#house-cost-4').keypress(function(e){
        if(e.which == 13){
            $(this).blur();
        }
    });
    $('#settings-house-cost-1').keypress(function(e){
        if(e.which == 13){
            $(this).blur();
        }
    });
    $('#settings-house-cost-2').keypress(function(e){
        if(e.which == 13){
            $(this).blur();
        }
    });
    $('#settings-house-cost-3').keypress(function(e){
        if(e.which == 13){
            $(this).blur();
        }
    });
    $('#settings-house-cost-4').keypress(function(e){
        if(e.which == 13){
            $(this).blur();
        }
    });


    $('#opening-costs-entered').click(function() {
        /* this is for once they press the move one button */
        var values = [];
        var monthCost1 = document.getElementById('house-cost-1').value;
        if (monthCost1 != "") {
            values.push([$('#opening-month-1').val(), 1*monthCost1]);
        }
        var monthCost2 = document.getElementById('house-cost-2').value;
        if (monthCost2 != "" && openInputs[1] == 1) {
            values.push([$('#opening-month-2').val(), 1*monthCost2]);
        }
        var monthCost3 = document.getElementById('house-cost-3').value;
        if (monthCost3 != "" && openInputs[2] == 1) {
            values.push([$('#opening-month-3').val(), 1*monthCost3]);
        }
        var monthCost4 = document.getElementById('house-cost-4').value;
        if (monthCost4 != "" && openInputs[3] == 1) {
            values.push([$('#opening-month-4').val(), 1*monthCost4]);
        }

        $('#settings-month-1').val($('#opening-month-1').val());
        $('#settings-month-2').val($('#opening-month-2').val());
        $('#settings-month-3').val($('#opening-month-3').val());
        $('#settings-month-4').val($('#opening-month-4').val());
        document.getElementById('settings-house-cost-1').value = document.getElementById('house-cost-1').value;
        document.getElementById('settings-house-cost-2').value = document.getElementById('house-cost-2').value;
        document.getElementById('settings-house-cost-3').value = document.getElementById('house-cost-3').value;
        document.getElementById('settings-house-cost-4').value = document.getElementById('house-cost-4').value;

        var m;
        if (values.length == 0) {
            m = 4.704 * (10**-5); /* this is the default */
        } else {
            m = calculateM(values);
        }
        changePage('#main');

        var cost = 0;
        var saveMoneyVal = 0; /* saveMoneyVal applies for when you decrease temp by 2 degrees */
        /* this lets you deal with the compare to yourself page */
        var costAt23 = costPerYear(23, m);
        $('#compare-self-avg').text(costAt23);
        /* this is for the regional comparison prices */
        var regAvg = 2100;
        $('#cost-reg-avg').text(regAvg);

        changeCost(temp, cost, saveMoneyVal, costAt23, regAvg, m);
        changeTemp(temp, cost, saveMoneyVal, costAt23, regAvg, m);
    });
    /* deals with the opening page – enter house information */
    var temp = 23;
    $('#main-temp').text(temp);
    $('#main-temp-confirm').text(temp);
    setTemp_savePage(temp);

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

    /* this is for the custom schedule in settings */
    customSchedule();
});

function calculateM (monthCostArr) {
    var mAvg = 0;
    for (var i=0; i<monthCostArr.length; i++) {
        mAvg = (mAvg * i + getM_month(monthCostArr[i][0], monthCostArr[i][1])) / (i+1)
    }
    return mAvg;
}

/* changes the active page */
function changePage (newID) {
    $('.page').hide();
    $(newID).show();
    $('.navbar').show();
}

/* this function works for changing the temperature */
function changeTemp (temp, cost, saveMoneyVal, costAt23, regAvg, m) {
    var oldTemp; var confirmCostDiff; /* these are for the confirmation page when you increase temp */

    /* allows you to decrease temperature */
    $('#temp-down-button').click(function() {
        temp --;
        $('#main-temp').text(temp);
        $('#main-temp-confirm').text(temp);
        changeCost(temp, cost, saveMoneyVal, costAt23, regAvg, m);
        setTemp_savePage(temp);
    });

    /* allows you to increase temperature of house */
    $('#temp-up-button').click(function() {
        oldTemp = temp; /* for the increasing temp confirmation page */
        temp ++;
        confirmCostDiff = costPerYear(temp, m) - costPerYear(oldTemp, m);
        $('#main-temp').text(temp);
        $('#main-temp-confirm').text(temp);
        changeCost(temp, cost, saveMoneyVal, costAt23, regAvg, m);
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
        confirmCostDiff = costPerYear(temp, m) - costPerYear(oldTemp, m);
        $('#main-temp').text(temp);
        $('#main-temp-confirm').text(temp);
        changeCost(temp, cost, saveMoneyVal, costAt23, regAvg, m);
        setTemp_savePage(temp);
        /* deals with the the confirmation page */
        $('#confirm-new-temp').text(temp);
        $('#confirm-cost-year').text(confirmCostDiff);
    });

    /* allows you to increase temperature of house on confirm page */
    $('#temp-up-button-confirm').click(function() {
        temp ++;
        confirmCostDiff = costPerYear(temp, m) - costPerYear(oldTemp, m);
        $('#main-temp').text(temp);
        $('#main-temp-confirm').text(temp);
        changeCost(temp, cost, saveMoneyVal, costAt23, regAvg, m);
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
        changeCost(temp, cost, saveMoneyVal, costAt23, regAvg, m);
        setTemp_savePage(temp);
        changePage('#main');
    });

    /* this deals with the save money button page */
    $('#save-yes').click(function() {
        changePage('#main');
        temp -= 2;
        $('#main-temp').text(temp);
        $('#main-temp-confirm').text(temp);
        changeCost(temp, cost, saveMoneyVal, costAt23, regAvg, m);
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
function changeCost (temp, cost, saveMoneyVal, costAt23, regAvg, m) {
    cost = costPerYear(temp, m);
    $('#main-cost').text(cost);
    /* this deals with money saved from dropping temp 2 degrees */
    saveMoneyVal = cost - costPerYear(temp-2, m);
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
    /* allows you to leave opening info page */
    $('#opening-info-app').click(function() {
        changePage('#opening-info-thermo');
        $('.navbar').hide();
        $('.change-code-info').hide();
        $('#opening-change-code-general').show();
    });
    $('#opening-info-thermo').click(function() {
        changePage('#opening-code');
        $('.navbar').hide();
        $('.change-code-info').hide();
        $('#opening-change-code-general').show();
    });

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

    $('#settings-to-fb').click(function() {
        changePage('#settings-fb');
    });

    $('#settings-to-location').click(function() {
        changePage('#settings-location');
    });

    $('#settings-to-custom').click(function() {
        changePage('#settings-custom');
    });

    $('#settings-to-house').click(function() {
        changePage('#settings-house');
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

    /* deals with the toggle on lcoations settings page */
    $('#settings-location-access').click(function() {
        if ($('#settings-location-toggle').hasClass('fa-toggle-on')) {
            $('#settings-location-toggle').removeClass('fa-toggle-on');
            $('#settings-location-toggle').addClass('fa-toggle-off');
            $('#settings-location-toggle').css('color', '#000');
        } else {
            $('#settings-location-toggle').removeClass('fa-toggle-off');
            $('#settings-location-toggle').addClass('fa-toggle-on');
            $('#settings-location-toggle').css('color', '#1b9af7');
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
    document.getElementById("opening-new-code").placeholder = thermoCode;
    document.getElementById("new-code").placeholder = thermoCode;
}

/* allows you to change the thermostat code connected */
function changeCode (thermoCode) {
    /* this deals with the thermostat code form in the OPENING */
    $("#opening-code-form").submit(function(e) {
        e.preventDefault();
        $('.change-code-info').hide();
        var newCode = document.getElementById('opening-new-code').value; /* this gets whatever is in the input box */
        newCode = newCode.toUpperCase();
        if (newCode[0] == "#" && newCode.length == 7) {
            thermoCode = newCode;
            showCode(thermoCode);
            document.getElementById('new-code').value = "";
            changePage("#opening-costs"); /* move to next page now */
            $('.navbar').hide();
        } else {
            if (newCode[0] != "#") {
                $('#opening-change-code-hashtag').show();
            }
            if (newCode.length != 7) {
                $('#opening-change-code-length').show();
            }
        }
    });

    /* this deals with the thermostat code form in the SETTINGS */
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

    /* makes it so that if you click enter, you leave the form for OPENING */
    $('#opening-new-code').keypress(function(e){
        if(e.which == 13){
            $(this).blur();
            $("#opening-code-form").submit();
        }
    });

    /* makes it so that if you click enter, you leave the form for SETTINGS */
    $('#new-code').keypress(function(e){
        if(e.which == 13){
            $(this).blur();
            $("#code-form").submit();
        }
    });
}

/* this function runs the custom schedule apge */
function customSchedule () {
    var openInputs = [1, 0, 0, 0];
    $('#settings-custom-2').hide();
    $('#settings-custom-3').hide();
    $('#settings-custom-4').hide();

    $('#custom-new-button').click(function() {
        if (openInputs[1] == 0) {
            $('#settings-custom-2').show();
            openInputs[1] = 1;
        } else if (openInputs[2] == 0) {
            $('#settings-custom-3').show();
            openInputs[2] = 1;
        } else if (openInputs[3] == 0) {
            $('#settings-custom-4').show();
            openInputs[3] = 1;
        }
        if (openInputs.indexOf(0) == -1) {
            $('#custom-new-button').hide();
        }
    });

    $('#custom-delete-2').click(function() {
        $('#settings-custom-2').hide();
        openInputs[1] = 0;
        $('#custom-new-button').show();
    });
    $('#custom-delete-3').click(function() {
        $('#settings-custom-3').hide();
        openInputs[2] = 0;
        $('#custom-new-button').show();
    });
    $('#custom-delete-4').click(function() {
        $('#settings-custom-4').hide();
        openInputs[3] = 0;
        $('#custom-new-button').show();
    });

    /* makes it so that typing enter/go has you leave the box */
    $('#custom-temp-1').keypress(function(e){
        if(e.which == 13){
            $(this).blur();
        }
    });
    $('#custom-temp-2').keypress(function(e){
        if(e.which == 13){
            $(this).blur();
        }
    });
    $('#custom-temp-3').keypress(function(e){
        if(e.which == 13){
            $(this).blur();
        }
    });
    $('#custom-temp-4').keypress(function(e){
        if(e.which == 13){
            $(this).blur();
        }
    });
}
