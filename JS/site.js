$(document).ready(function() {

    $("#searchButton").click(function() {

        var cityName = $("#citySearch").val();

        $.get('http://originweather.azurewebsites.net/weather/city?name=' + cityName, function(data) {
            $("#location").text(data.location);
            $("#summary").text(data.summary);
            $("#temperature").text(data.temperature);
            $("#stormDistance").text(data.nearestStorm);
            
            $("#weatherIcon").attr('src', 'Images/' + data.icon + '.png');
        });
    });
});