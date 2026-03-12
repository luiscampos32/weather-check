$('#weather-form').submit(function(e) {
  e.preventDefault();
  var input = $('#area').val();
  $('#form-wrapper').fadeOut('slow');
  $('#clouds').fadeOut('slow');

  $.ajax('/request', {
    data: {
      input: input
    },
    method: 'post',
    success: function(response){
      console.log('request successful');
      getWeather(response.url_request);
    },
    error: function(err) {
      alert('post failed');
    }
  });
});

function getWeather(url) {
  $.getJSON(url, function(data) {
    $('#forecast-wrapper').empty();
    $('#forecast-wrapper').append('<div id="forecast"></div>');
    $('#forecast').append('<div id="current-temp"><i class="fa fa-sun-o" aria-hidden="true"></i>' + data.main.temp + '\xB0</div>');
    $('#forecast').append('<div id="min-temp">Low: ' + data.main.temp_min + '\xB0</div>');
    $('#forecast').append('<div id="max-temp">High: ' + data.main.temp_max + '\xB0</div>');
    $('#root').append('<form action="/" id="get-another"><button type="submit" class="pure-button">Get Another</button></form>')
  });
}
