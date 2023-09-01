$(document).ready(function() {
    $.getJSON('/rate', function(data) {
        $('#rate').text(data.rates.UAH);
        $('#date').text(data.date);
        $('#rate2').text(data.rates.usd);
    });
});