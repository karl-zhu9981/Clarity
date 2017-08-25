$(document).ready(function(){
    /* opens up the opening page */
    $('.page').hide();
    $('.navbar').hide();
    $('#opening').show();
    /*changePage('#main');*/
    changePageDelay(0);

    var temp = 23;
    $('#main-temp').text(temp);
    changeTemp(temp, cost);


    var cost = 0;
    changeCost(temp, cost);

    /* allows you to change the charts */
    var activeChart = '.to-cost';
    $(activeChart).addClass('nav-item-active');
    changeChart(activeChart);

    /* allows you to change the competition pages */
    var activeComp = '.to-fb';
    $(activeComp).addClass('nav-item-active');
    changeComp(activeComp);

    /* this if for the tabs */
    var activeTab = '#home-tab';
    $(activeTab).addClass('nav-item-active');
    changeTab(activeTab);
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
function changeTemp (temp, cost) {
    /* allows you to increase temperature of house */
    $('#temp-up-button').click(function() {
        temp ++;
        $('#main-temp').text(temp);
        changeCost(temp, cost);
    });

    /* allows you to decrease temperature */
    $('#temp-down-button').click(function() {
        temp --;
        $('#main-temp').text(temp);
        changeCost(temp, cost);
    });
};

/* this functions updates the cost to heat hosue per year */
function changeCost (temp, cost) {
    cost = 100 * temp;
    $('#main-cost').text(cost);
}

/* this function applies for changing the tab on the navbar */
function changeTab (activeTab, activeChart) {
    $('#home-tab').click(function() {
        $(activeTab).removeClass('nav-item-active');
        activeTab = '#home-tab';
        $(activeTab).addClass('nav-item-active');
        changePage('#main');
    });

    $('#comparisons-tab').click(function() {
        $(activeTab).removeClass('nav-item-active');
        activeTab = '#comparisons-tab';
        $(activeTab).addClass('nav-item-active');
        changePage('#comp-fb');
    });

    $('#statistics-tab').click(function() {
        $(activeTab).removeClass('nav-item-active');
        activeTab = '#statistics-tab';
        $(activeTab).addClass('nav-item-active');
        changePage('#charts-cost');
    });

    $('#settings-tab').click(function() {
        $(activeTab).removeClass('nav-item-active');
        activeTab = '#settings-tab';
        $(activeTab).addClass('nav-item-active');
    });
};

function changeComp (activeComp) {
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
};

function changeChart (activeChart) {
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
