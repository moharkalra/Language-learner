chrome.storage.get("InitialTime", function(data) {
  if (!data.InitialTime) {
    chrome.storage.set({"InitialTime": Date.now()}, function () {});
  }

  var Omonth = 2592000;
  var time = Date.now() / 1000 - data.InitialTime / 1000 ;
  var day;



});

var week = function(time) {

      day = Date.now() / 1000 - data.InitialTime / 1000;
      return Math.floor(day / 7);
}
