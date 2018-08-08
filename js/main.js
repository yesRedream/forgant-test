function ajaxCall(coin, money) {
  var url = "https://apiv2.bitcoinaverage.com/indices/global/ticker/"+coin+money;
  if (money === "USD") {
    var symbol = "$"
  } 
  else if (money === "RUB") {
    var symbol = "р.";
  } 
  else if (money === "EUR") {
    var symbol = "€";
  } 
  else if (money === "GBP") {
    var symbol = "£";
  } 
  $.ajax({  
    dataType: 'json',
    url: url,
    success: function(jsondata){
      $('.price-'+coin).html(jsondata.last + symbol);
      $('.data-hour-'+coin).html(jsondata.changes.percent.hour + "%");
      $('.data-day-'+coin).html(jsondata.changes.percent.day + "%");
      $('.data-week-'+coin).html(jsondata.changes.percent.week + "%");
      $('.data-month-'+coin).html(jsondata.changes.percent.month + "%");

      $('.data-hour-'+coin+'-usd').html(jsondata.changes.price.hour + symbol);
      $('.data-day-'+coin+'-usd').html(jsondata.changes.price.day + symbol);
      $('.data-week-'+coin+'-usd').html(jsondata.changes.price.week + symbol);
      $('.data-month-'+coin+'-usd').html(jsondata.changes.price.month + symbol);
      
      if (parseInt(jsondata.changes.percent.hour) < 0) $('.data-hour-'+coin).addClass('red');
      if (parseInt(jsondata.changes.percent.day) < 0) $('.data-day-'+coin).addClass('red');
      if (parseInt(jsondata.changes.percent.week) < 0) $('.data-week-'+coin).addClass('red');
      if (parseInt(jsondata.changes.percent.month) < 0) $('.data-month-'+coin).addClass('red');
      
      if (parseInt(jsondata.changes.price.hour) < 0) $('.data-hour-'+coin+'-usd').addClass('red');
      if (parseInt(jsondata.changes.price.day) < 0)  $('.data-day-'+coin+'-usd').addClass('red');
      if (parseInt(jsondata.changes.price.week) < 0)  $('.data-week-'+coin+'-usd').addClass('red');
      if (parseInt(jsondata.changes.price.month) < 0) $('.data-month-'+coin+'-usd').addClass('red');
    }
  });
  
 }

$( document ).ready(function(){
  ajaxCall('ETH', 'USD');
  ajaxCall('LTC', 'USD');
  ajaxCall('BTC', 'USD');
});

$('.eur-val').click(function(){
  ajaxCall('ETH', 'EUR');
  ajaxCall('LTC', 'EUR');
  ajaxCall('BTC', 'EUR');
});

$('.rub-val').click(function(){
  ajaxCall('ETH', 'RUB');
  ajaxCall('LTC', 'RUB');
  ajaxCall('BTC', 'RUB');
});

$('.gbp-val').click(function(){
  ajaxCall('ETH', 'GBP');
  ajaxCall('LTC', 'GBP');
  ajaxCall('BTC', 'GBP');
});

$('.usd-val').click(function(){
  ajaxCall('ETH', 'USD');
  ajaxCall('LTC', 'USD');
  ajaxCall('BTC', 'USD');
});




$("#toggle-ethereum").click(function(){
    $(".data-hour-ETH").toggleClass("active");
    $(".data-hour-ETH-usd").toggleClass("active");
    $(".data-day-ETH").toggleClass("active");
    $(".data-day-ETH-usd").toggleClass("active");
    $(".data-week-ETH").toggleClass("active");
    $(".data-week-ETH-usd").toggleClass("active");
    $(".data-month-ETH").toggleClass("active");
    $(".data-month-ETH-usd").toggleClass("active");
});

$("#toggle-litecoin").click(function(){
    $(".data-hour-LTC").toggleClass("active");
    $(".data-hour-LTC-usd").toggleClass("active");
    $(".data-day-LTC").toggleClass("active");
    $(".data-day-LTC-usd").toggleClass("active");
    $(".data-week-LTC").toggleClass("active");
    $(".data-week-LTC-usd").toggleClass("active");
    $(".data-month-LTC").toggleClass("active");
    $(".data-month-LTC-usd").toggleClass("active");
});

$("#toggle-bitcoin").click(function(){
    $(".data-hour-BTC").toggleClass("active");
    $(".data-hour-BTC-usd").toggleClass("active");
    $(".data-day-BTC").toggleClass("active");
    $(".data-day-BTC-usd").toggleClass("active");
    $(".data-week-BTC").toggleClass("active");
    $(".data-week-BTC-usd").toggleClass("active");
    $(".data-month-BTC").toggleClass("active");
    $(".data-month-BTC-usd").toggleClass("active");
});

$(".dropdown").click(function(){
    $(".dropdown-list").toggleClass("active");
});

$(".dropdown-list .val").click(function(e) {
  e.preventDefault();
  $(".dropdown-list .val").removeClass('active');
  $(this).addClass('active');
  $('.current-value').html($(this).html());
  $(".dropdown-list").removeClass('active');
})
