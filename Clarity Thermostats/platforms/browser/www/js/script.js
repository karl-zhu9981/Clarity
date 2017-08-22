$(document).ready(function(){
    var currentID = '#main';
    $('.page').hide();
    $('.navbar').hide();
    $(currentID).show();
    $('.navbar').show();

    var temp = 23;
    $('#main-temp').text(temp);
    changeTemp(temp);


    var cost = 2500;
    $('#main-cost').text(cost);


    /* this if for the tabs */
    var activeTab = '#home-tab';
    $(activeTab).addClass('nav-item-active');
    changeTab(activeTab);
});

/* this function works for changing the temperature */
function changeTemp (temp) {
    /* allows you to increase temperature of house */
    $('#temp-up-button').click(function() {
        temp ++;
        $('#main-temp').text(temp);
    });

    /* allows you to decrease temperature */
    $('#temp-down-button').click(function() {
        temp --;
        $('#main-temp').text(temp);
    });
};

/* this function applies for changing the tab on the navbar */
function changeTab (activeTab) {
    $('#home-tab').click(function() {
        $(activeTab).removeClass('nav-item-active');
        activeTab = '#home-tab';
        $(activeTab).addClass('nav-item-active');
    });

    $('#comparisons-tab').click(function() {
        $(activeTab).removeClass('nav-item-active');
        activeTab = '#comparisons-tab';
        $(activeTab).addClass('nav-item-active');
    });

    $('#statistics-tab').click(function() {
        $(activeTab).removeClass('nav-item-active');
        activeTab = '#statistics-tab';
        $(activeTab).addClass('nav-item-active');
    });

    $('#settings-tab').click(function() {
        $(activeTab).removeClass('nav-item-active');
        activeTab = '#settings-tab';
        $(activeTab).addClass('nav-item-active');
    });
};
