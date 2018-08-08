$.ajax({
  dataType: 'json',
  url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHUSD',
  success: function(jsondata){
    $('.price-ethereum').html(jsondata.last + "$");
    $('.data-hour-ethereum').html(jsondata.changes.percent.hour + "%");
    $('.data-day-ethereum').html(jsondata.changes.percent.day + "%");
    $('.data-week-ethereum').html(jsondata.changes.percent.week + "%");
    $('.data-month-ethereum').html(jsondata.changes.percent.month + "%");

    $('.data-hour-ethereum-usd').html(jsondata.changes.price.hour + "$");
    $('.data-day-ethereum-usd').html(jsondata.changes.price.day + "$");
    $('.data-week-ethereum-usd').html(jsondata.changes.price.week + "$");
    $('.data-month-ethereum-usd').html(jsondata.changes.price.month + "$");
  }
});

$.ajax({
  dataType: 'json',
  url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCUSD',
  success: function(jsondata){
    $('.price-ltc').html(jsondata.last + "$");
    $('.data-hour-ltc').html(jsondata.changes.percent.hour + "%");
    $('.data-day-ltc').html(jsondata.changes.percent.day + "%");
    $('.data-week-ltc').html(jsondata.changes.percent.week + "%");
    $('.data-month-ltc').html(jsondata.changes.percent.month + "%");

    $('.data-hour-ltc-usd').html(jsondata.changes.price.hour + "$");
    $('.data-day-ltc-usd').html(jsondata.changes.price.day + "$");
    $('.data-week-ltc-usd').html(jsondata.changes.price.week + "$");
    $('.data-month-ltc-usd').html(jsondata.changes.price.month + "$");

  }
});

$.ajax({
  dataType: 'json',
  url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD',
  success: function(jsondata){
    $('.price-btc').html(jsondata.last + "$");
    $('.data-hour-btc').html(jsondata.changes.percent.hour + "%");
    $('.data-day-btc').html(jsondata.changes.percent.day + "%");
    $('.data-week-btc').html(jsondata.changes.percent.week + "%");
    $('.data-month-btc').html(jsondata.changes.percent.month + "%");

    $('.data-hour-btc-usd').html(jsondata.changes.price.hour + "$");
    $('.data-day-btc-usd').html(jsondata.changes.price.day + "$");
    $('.data-week-btc-usd').html(jsondata.changes.price.week + "$");
    $('.data-month-btc-usd').html(jsondata.changes.price.month + "$");
  }
});

$("#toggle-ethereum").click(function(){
    $(".data-hour-ethereum").toggleClass("active");
    $(".data-hour-ethereum-usd").toggleClass("active");
    $(".data-day-ethereum").toggleClass("active");
    $(".data-day-ethereum-usd").toggleClass("active");
    $(".data-week-ethereum").toggleClass("active");
    $(".data-week-ethereum-usd").toggleClass("active");
    $(".data-month-ethereum").toggleClass("active");
    $(".data-month-ethereum-usd").toggleClass("active");
});

$("#toggle-litecoin").click(function(){
    $(".data-hour-ltc").toggleClass("active");
    $(".data-hour-ltc-usd").toggleClass("active");
    $(".data-day-ltc").toggleClass("active");
    $(".data-day-ltc-usd").toggleClass("active");
    $(".data-week-ltc").toggleClass("active");
    $(".data-week-ltc-usd").toggleClass("active");
    $(".data-month-ltc").toggleClass("active");
    $(".data-month-ltc-usd").toggleClass("active");
});

$("#toggle-bitcoin").click(function(){
    $(".data-hour-btc").toggleClass("active");
    $(".data-hour-btc-usd").toggleClass("active");
    $(".data-day-btc").toggleClass("active");
    $(".data-day-btc-usd").toggleClass("active");
    $(".data-week-btc").toggleClass("active");
    $(".data-week-btc-usd").toggleClass("active");
    $(".data-month-btc").toggleClass("active");
    $(".data-month-btc-usd").toggleClass("active");
});
