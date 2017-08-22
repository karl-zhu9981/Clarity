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
});

function changeTemp (temp) {
    /* allows you to increase temperature of house */
    $("#temp-up-button").click(function() {
        temp ++;
        $('#main-temp').text(temp);
    });

    /* allows you to decrease temperature */
    $("#temp-down-button").click(function() {
        temp --;
        $('#main-temp').text(temp);
    });
};
