
var d;
chrome.storage.local.get("InitialTime", function(data) {
d = data;
  if (!data.InitialTime) {
    chrome.storage.local.set({"InitialTime": Date.now()}, function () {});
  }

  var Omonth = 120;
  var time = Date.now() / 1000 - data.InitialTime / 1000 ;
  var day;



});

function translates(word) {
  var b = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160403T022846Z.091eb269bff8d087.67f13b7f81138a13ea50f9020cda2e5029942df8&text="+word+"&lang=en-es&format=html";
  var a = new XMLHttpRequest();
  a.open('GET', b, false);
  //callback(a.responseText);
  a.send(null);

  var result = a.response.toString();
  //result.
  result = result.substring(result.indexOf("[") + 2, result.indexOf("]") - 1);
  console.log(result + "kjh kjblk gpiyg liyk blh");
  return result;

}

var week = function() {

      day = (Date.now() / 1000 - "InitialTime" / 1000);
      return Math.floor(day / 60);
}


var w = week();
var elements = document.getElementsByTagName('*');
var replace = function() {
  var words = [' hello ', ' and ', ' but ', ' in ', ' if ', ' you ', ' a ' , ' the '];
  for(y in words){

      var x = translates(words[y]);
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
          var k = 0;
        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                text = text.toLowerCase();
                var replacedText = text.replace(words[y], ' ' + x + ' ');

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
                else if(week( )>w && k<30){


                  words.push(text.toString);
                  k++;

                  if(k==30){
                    w = week();
                  }
                }

            }


        }
    }
}
}

replace();
