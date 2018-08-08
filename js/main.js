function ajaxCall(coin, money) {
  var url = "https://apiv2.bitcoinaverage.com/indices/global/ticker/"+coin+money;
  $.ajax({  
    dataType: 'json',
    url: url,
    success: function(jsondata){
      $('.price-'+coin).html(jsondata.last + "$");
      $('.data-hour-'+coin).html(jsondata.changes.percent.hour + "%");
      $('.data-day-'+coin).html(jsondata.changes.percent.day + "%");
      $('.data-week-'+coin).html(jsondata.changes.percent.week + "%");
      $('.data-month-'+coin).html(jsondata.changes.percent.month + "%");

      $('.data-hour-'+coin+'-usd').html(jsondata.changes.price.hour + "$");
      $('.data-day-'+coin+'-usd').html(jsondata.changes.price.day + "$");
      $('.data-week-'+coin+'-usd').html(jsondata.changes.price.week + "$");
      $('.data-month-'+coin+'-usd').html(jsondata.changes.price.month + "$");
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

