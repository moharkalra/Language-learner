chrome.storage.get("InitialTime", function(data) {
  if (!data.InitialTime) {
    chrome.storage.set({"InitialTime": Date.now()}, function () {});
  }

  var Omonth = 2592000;
  var time = Date.now() / 1000 - data.InitialTime / 1000 ;
  var day;



});

var week = function(time) {
  if(time < month){ //if it has been a month
      day = Date.now() / 1000 - data.InitialTime / 1000;
      return Math.floor(day / 7);
  }
}
if(time > month * 2){ //2 months

}
