$(document).ready(function() {
    $.simpleWeather({   
        location: '30076',
        woeid: '',
        unit: 'f',
        success: function(weather) {
            html = '<p><i class="weather-icon icon-'+weather.code+'"></i> '+weather.temp+'&deg;: '+weather.currently+'</p>';
            // html += '<p>'+weather.city+', '+weather.region+'</p>';
            $(".weather").html(html);
        },
        error: function(error) {
            $(".weather").html('<p>'+error+'</p>');
        }
    });
});
